
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format, addDays } from 'date-fns';
import { CalendarIcon, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { appointmentService } from '@/services/appointmentService';
import { 
  Alert,
  AlertTitle,
  AlertDescription
} from '@/components/ui/alert';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  propertyType: z.string().min(1, { message: "Please select a property type" }),
  projectType: z.string().min(1, { message: "Please select a project type" }),
  appointmentDate: z.date({ required_error: "Please select a date" }),
  message: z.string().optional()
});

const AppointmentForm = () => {
  const [availableSlots, setAvailableSlots] = useState<Date[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<Date | undefined>(undefined);
  const [showAlert, setShowAlert] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      propertyType: "",
      projectType: "",
      message: ""
    }
  });

  // Update available time slots when date changes
  useEffect(() => {
    if (selectedDate) {
      const slots = appointmentService.getAvailableSlots(selectedDate);
      setAvailableSlots(slots);
      
      // Reset selected time if it's no longer available
      if (selectedTime && !slots.find(slot => slot.getTime() === selectedTime.getTime())) {
        setSelectedTime(undefined);
        form.setValue('appointmentDate', selectedDate); // Set only the date, not the time
      }
      
      // Show alert if no slots available
      setShowAlert(slots.length === 0);
    }
  }, [selectedDate, selectedTime, form]);

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setSelectedDate(date);
      // Reset time when date changes
      setSelectedTime(undefined);
      form.setValue('appointmentDate', date);
    }
  };

  const handleTimeSelect = (time: Date) => {
    setSelectedTime(time);
    form.setValue('appointmentDate', time);
  };

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    try {
      // Add the appointment
      const newAppointment = appointmentService.addAppointment(data);
      
      console.log("Appointment created:", newAppointment);
      
      // Show success message
      toast({
        title: "Appointment request submitted!",
        description: `We'll contact you shortly to confirm your appointment for ${appointmentService.formatAppointmentDate(data.appointmentDate)}.`,
      });
      
      // Reset form
      form.reset();
      setSelectedDate(undefined);
      setSelectedTime(undefined);
      
    } catch (error) {
      // Show error message if there was a conflict
      toast({
        title: "Booking Error",
        description: error instanceof Error ? error.message : "Failed to book appointment. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="section-padding bg-company-gray">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Consultation</h2>
            <p className="text-lg text-gray-600 mb-8">
              Schedule a free consultation with our experts to discuss your project requirements, 
              get accurate quotes, and discover the perfect windows and doors for your property.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-semibold mb-4">What to expect:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-company-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</div>
                  <p>Detailed assessment of your property's requirements</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-company-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</div>
                  <p>Professional advice on suitable window and door solutions</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-company-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</div>
                  <p>Accurate cost estimates and timeline for your project</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-company-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">4</div>
                  <p>Information about our installation process and warranty</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="(555) 123-4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="propertyType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Property Type</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select property type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="residential">Residential</SelectItem>
                            <SelectItem value="apartment">Apartment</SelectItem>
                            <SelectItem value="commercial">Commercial</SelectItem>
                            <SelectItem value="hospital">Hospital</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="projectType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Type</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select project type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="new-installation">New Installation</SelectItem>
                            <SelectItem value="replacement">Replacement</SelectItem>
                            <SelectItem value="repair">Repair</SelectItem>
                            <SelectItem value="consultation">Consultation Only</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="appointmentDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Preferred Appointment Date</FormLabel>
                      <div className="grid grid-cols-1 gap-4">
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !selectedDate && "text-muted-foreground"
                                )}
                              >
                                {selectedDate ? (
                                  format(selectedDate, "PPP")
                                ) : (
                                  <span>Select a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={selectedDate}
                              onSelect={handleDateSelect}
                              disabled={(date) =>
                                date < new Date(new Date().setHours(0, 0, 0, 0)) ||
                                date > addDays(new Date(), 90)
                              }
                              initialFocus
                              className={cn("p-3 pointer-events-auto")}
                            />
                          </PopoverContent>
                        </Popover>
                        
                        {showAlert && selectedDate && (
                          <Alert variant="destructive" className="mt-2">
                            <AlertTitle>No available slots</AlertTitle>
                            <AlertDescription>
                              There are no available appointment slots for the selected date. 
                              Please select another date.
                            </AlertDescription>
                          </Alert>
                        )}
                        
                        {selectedDate && availableSlots.length > 0 && (
                          <div className="mt-2">
                            <FormLabel>Select Time Slot</FormLabel>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
                              {availableSlots.map((slot, index) => (
                                <Button
                                  key={index}
                                  type="button"
                                  variant={selectedTime?.getTime() === slot.getTime() ? "default" : "outline"}
                                  onClick={() => handleTimeSelect(slot)}
                                  className={cn(
                                    "justify-start px-3",
                                    selectedTime?.getTime() === slot.getTime() && "bg-company-blue"
                                  )}
                                >
                                  <Clock className="mr-2 h-4 w-4" />
                                  {format(slot, "h:mm a")}
                                </Button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Information</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us more about your project, requirements, or questions..." 
                          className="resize-none min-h-[120px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="btn-primary w-full"
                  disabled={!selectedTime || form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "Submitting..." : "Book Appointment"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
