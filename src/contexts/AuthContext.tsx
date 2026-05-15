import { createContext, useContext, useState, ReactNode } from 'react';
import { users, type User } from '../data/mockData';

interface AuthContextType {
  currentUser: User | null;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signup: (name: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  isAdmin: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('currentUser');
    return saved ? JSON.parse(saved) : null;
  });

  const login = async (email: string, password: string) => {
    // Validação de formato de email
    if (!email.includes('@') || !email.includes('.')) {
      return { success: false, error: 'E-mail deve ter formato válido' };
    }

    // Simulação de API - aceita qualquer senha para usuários existentes
    const user = users.find(u => u.email === email);

    if (!user) {
      return { success: false, error: 'Credenciais inválidas. Tente novamente.' };
    }

    setCurrentUser(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
    return { success: true };
  };

  const signup = async (name: string, email: string, password: string) => {
    // Validação de formato de email
    if (!email.includes('@') || !email.includes('.')) {
      return { success: false, error: 'E-mail deve ter formato válido' };
    }

    // Verifica se email já existe
    if (users.find(u => u.email === email)) {
      return { success: false, error: 'E-mail já cadastrado' };
    }

    // Cria novo usuário
    const newUser: User = {
      id: String(users.length + 1),
      name,
      email,
      role: 'USER',
      createdAt: new Date().toISOString().split('T')[0],
    };

    users.push(newUser);
    setCurrentUser(newUser);
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    return { success: true };
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
  };

  const isAdmin = () => currentUser?.role === 'ADMIN';

  return (
    <AuthContext.Provider value={{ currentUser, login, signup, logout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
