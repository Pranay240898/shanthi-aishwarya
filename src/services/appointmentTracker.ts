
// This service will track appointment creation attempts to prevent spam
import { rateLimit } from './rateLimit';

export const appointmentTracker = {
  // Track appointment request and check if it's allowed
  trackAppointmentRequest: (ip: string): { allowed: boolean; reason?: string } => {
    // Check if the user has exceeded their appointment request limit
    if (rateLimit.shouldLimit(ip, 'appointment')) {
      const resetTime = Math.ceil(rateLimit.getTimeUntilReset(ip, 'appointment') / 1000 / 60);
      return {
        allowed: false,
        reason: `Rate limit exceeded. Please try again in ${resetTime} minutes.`
      };
    }
    
    // Check if the user has exceeded their global request limit
    if (rateLimit.shouldLimit(ip, 'global')) {
      return {
        allowed: false,
        reason: 'Daily request limit reached. Please try again tomorrow.'
      };
    }
    
    return { allowed: true };
  },
  
  // Get remaining appointment requests for today
  getRemainingRequests: (ip: string): number => {
    return rateLimit.getRemainingRequests(ip, 'appointment');
  }
};
