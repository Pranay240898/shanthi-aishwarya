
import { format, isSameDay, addHours } from 'date-fns';

export interface Appointment {
  id: string;
  name: string;
  email: string;
  phone: string;
  propertyType: string;
  projectType: string;
  appointmentDate: Date;
  message?: string;
  createdAt: Date;
}

// For demo purposes, we'll store appointments in localStorage
// In a real app, this would be in a database
class AppointmentService {
  private STORAGE_KEY = 'appointments';
  
  // Get all appointments
  getAppointments(): Appointment[] {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (!stored) return [];
    return JSON.parse(stored, (key, value) => {
      // Convert ISO date strings back to Date objects
      if (key === 'appointmentDate' || key === 'createdAt') {
        return new Date(value);
      }
      return value;
    });
  }
  
  // Save appointments
  private saveAppointments(appointments: Appointment[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(appointments));
  }
  
  // Add a new appointment
  addAppointment(appointment: Omit<Appointment, 'id' | 'createdAt'>): Appointment {
    const appointments = this.getAppointments();
    
    // Check for conflicts
    const conflict = this.checkForConflicts(appointment.appointmentDate);
    if (conflict) {
      throw new Error('This time slot is already booked. Please select another time.');
    }
    
    // Create new appointment with ID and timestamp
    const newAppointment: Appointment = {
      ...appointment,
      id: this.generateId(),
      createdAt: new Date()
    };
    
    // Add to storage
    appointments.push(newAppointment);
    this.saveAppointments(appointments);
    
    return newAppointment;
  }
  
  // Check if a time slot is already booked (simple version)
  // In a real app, you would need more sophisticated logic
  checkForConflicts(date: Date): boolean {
    const appointments = this.getAppointments();
    
    // Appointment slots are 2 hours long
    // Check if any existing appointment overlaps with the requested time
    return appointments.some(app => {
      return isSameDay(app.appointmentDate, date) && 
        Math.abs(app.appointmentDate.getTime() - date.getTime()) < (2 * 60 * 60 * 1000);
    });
  }
  
  // Get available time slots for a specific day
  getAvailableSlots(date: Date): Date[] {
    // Business hours: 9 AM to 5 PM, 2-hour slots
    const businessHours = {
      start: 9, // 9 AM
      end: 17,  // 5 PM
    };
    
    // Number of 2-hour slots in a day
    const totalSlots = (businessHours.end - businessHours.start) / 2;
    
    // Generate all possible slots
    const allSlots: Date[] = [];
    for (let i = 0; i < totalSlots; i++) {
      const slotTime = new Date(date);
      slotTime.setHours(businessHours.start + (i * 2), 0, 0, 0);
      allSlots.push(slotTime);
    }
    
    // Filter out booked slots
    return allSlots.filter(slot => !this.checkForConflicts(slot));
  }
  
  // Format date for display
  formatAppointmentDate(date: Date): string {
    return format(date, 'PPpp'); // e.g., "Apr 6, 2025, 10:00 AM"
  }
  
  // Generate a simple ID (in a real app, use a proper UUID library)
  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }
}

// Create singleton instance
export const appointmentService = new AppointmentService();
