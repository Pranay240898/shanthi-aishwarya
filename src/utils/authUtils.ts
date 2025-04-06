
import { jwtDecode } from 'jwt-decode';

// Define JWT token payload structure
interface JwtPayload {
  sub: string;
  name: string;
  email: string;
  exp: number;
  iat: number;
}

// Token management functions
export const authUtils = {
  // Generate a JWT token (in a real app, this would be done on the server)
  generateToken: (userId: string, name: string, email: string): string => {
    // This is a mock implementation - in production, this would be done server-side
    console.warn('Token generation should happen on the server side in production');
    
    // Create a mock token with basic structure (for demo purposes only)
    const now = Math.floor(Date.now() / 1000);
    const payload = {
      sub: userId,
      name: name,
      email: email,
      iat: now,
      exp: now + 3600 // Token expires in 1 hour
    };
    
    // This is just for simulation - real token would be signed with a secret
    return btoa(JSON.stringify(payload));
  },
  
  // Store token in localStorage
  storeToken: (token: string): void => {
    localStorage.setItem('auth_token', token);
  },
  
  // Get token from localStorage
  getToken: (): string | null => {
    return localStorage.getItem('auth_token');
  },
  
  // Remove token from localStorage
  removeToken: (): void => {
    localStorage.removeItem('auth_token');
  },
  
  // Check if token exists and is valid
  isAuthenticated: (): boolean => {
    const token = localStorage.getItem('auth_token');
    if (!token) return false;
    
    try {
      const decoded = authUtils.decodeToken(token);
      // Check if token is expired
      const currentTime = Math.floor(Date.now() / 1000);
      return decoded.exp > currentTime;
    } catch (error) {
      console.error('Invalid token:', error);
      return false;
    }
  },
  
  // Decode token to get user info
  decodeToken: (token: string): JwtPayload => {
    try {
      // In a real implementation, we would use a proper JWT library
      return JSON.parse(atob(token)) as JwtPayload;
    } catch {
      throw new Error('Invalid token format');
    }
  },
  
  // Get user info from token
  getUserInfo: (): { userId: string; name: string; email: string } | null => {
    try {
      const token = authUtils.getToken();
      if (!token) return null;
      
      const decoded = authUtils.decodeToken(token);
      return {
        userId: decoded.sub,
        name: decoded.name,
        email: decoded.email
      };
    } catch (error) {
      console.error('Error getting user info:', error);
      return null;
    }
  }
};
