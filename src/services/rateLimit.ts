
// Store for tracking request counts
interface RateLimitStore {
  [ip: string]: {
    count: number;
    resetAt: number;
  };
}

// Settings for different rate limits
interface RateLimitSettings {
  windowMs: number;
  maxRequests: number;
}

export const rateLimit = {
  // In-memory store for tracking requests (in production, use Redis or similar)
  store: {} as RateLimitStore,
  
  // Rate limit settings
  settings: {
    global: { windowMs: 24 * 60 * 60 * 1000, maxRequests: 1000 }, // 1000 requests per day
    appointment: { windowMs: 60 * 60 * 1000, maxRequests: 5 },     // 5 appointment requests per hour
    contact: { windowMs: 10 * 60 * 1000, maxRequests: 3 }          // 3 contact form submissions per 10 minutes
  } as Record<string, RateLimitSettings>,
  
  // Check if a request should be rate limited
  shouldLimit: (ip: string, actionType: keyof typeof rateLimit.settings = 'global'): boolean => {
    const now = Date.now();
    const settings = rateLimit.settings[actionType];
    
    // Initialize if this is the first request from this IP for this action
    if (!rateLimit.store[`${ip}:${actionType}`]) {
      rateLimit.store[`${ip}:${actionType}`] = {
        count: 0,
        resetAt: now + settings.windowMs
      };
    }
    
    const record = rateLimit.store[`${ip}:${actionType}`];
    
    // Reset counter if the time window has passed
    if (now > record.resetAt) {
      record.count = 0;
      record.resetAt = now + settings.windowMs;
    }
    
    // Increment counter and check against limit
    record.count++;
    return record.count > settings.maxRequests;
  },
  
  // Get remaining requests for an IP
  getRemainingRequests: (ip: string, actionType: keyof typeof rateLimit.settings = 'global'): number => {
    const now = Date.now();
    const settings = rateLimit.settings[actionType];
    const record = rateLimit.store[`${ip}:${actionType}`];
    
    if (!record || now > record.resetAt) {
      return settings.maxRequests;
    }
    
    return Math.max(0, settings.maxRequests - record.count);
  },
  
  // Get time until reset in milliseconds
  getTimeUntilReset: (ip: string, actionType: keyof typeof rateLimit.settings = 'global'): number => {
    const now = Date.now();
    const record = rateLimit.store[`${ip}:${actionType}`];
    
    if (!record) {
      return 0;
    }
    
    return Math.max(0, record.resetAt - now);
  },
  
  // Clear all rate limit data (useful for testing)
  clearAll: (): void => {
    Object.keys(rateLimit.store).forEach(key => {
      delete rateLimit.store[key];
    });
  }
};
