import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

// Mock users for demo
const MOCK_USERS = {
  worker: { id: '1', email: 'worker@demo.com', name: 'Demo Worker', role: 'worker', coin: 150 },
  buyer: { id: '2', email: 'buyer@demo.com', name: 'Demo Buyer', role: 'buyer', coin: 500 },
  admin: { id: '3', email: 'admin@demo.com', name: 'Demo Admin', role: 'admin', coin: 0 }
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Mock login - just returns true/false and sets user
  const login = async (email, password, role = 'worker') => {
    setIsLoading(true);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Always succeed for demo - use selected role
    const mockUser = MOCK_USERS[role] || MOCK_USERS.worker;
    setUser({ ...mockUser, email: email || mockUser.email });
    setIsLoading(false);
    return true;
  };

  // Mock logout
  const logout = () => {
    setUser(null);
    return true;
  };

  // Quick role switch for demo
  const switchRole = (role) => {
    const mockUser = MOCK_USERS[role];
    if (mockUser) {
      setUser(mockUser);
    }
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    switchRole
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
export default AuthContext;