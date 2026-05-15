import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

export default function LoginPage() {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const result = isSignup
      ? await signup(name, email, password)
      : await login(email, password);

    if (result.success) {
      navigate('/');
    } else {
      setError(result.error || 'Erro ao processar solicitação');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
              <span className="text-2xl text-white font-bold">FH</span>
            </div>
          </div>
          <CardTitle className="text-2xl">FragranceHub</CardTitle>
          <CardDescription>
            {isSignup ? 'Crie sua conta' : 'Entre na sua conta'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignup && (
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo</Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Seu nome"
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="seu@email.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
              />
            </div>

            {error && (
              <div className="text-sm text-red-600 bg-red-50 p-3 rounded">
                {error}
              </div>
            )}

            <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              {isSignup ? 'Cadastrar' : 'Entrar'}
            </Button>

            <div className="text-center text-sm">
              {isSignup ? (
                <>
                  Já tem conta?{' '}
                  <button
                    type="button"
                    onClick={() => setIsSignup(false)}
                    className="text-purple-600 hover:underline font-medium"
                  >
                    Entre aqui
                  </button>
                </>
              ) : (
                <>
                  Não tem conta?{' '}
                  <button
                    type="button"
                    onClick={() => setIsSignup(true)}
                    className="text-purple-600 hover:underline font-medium"
                  >
                    Cadastre-se
                  </button>
                </>
              )}
            </div>

            <div className="text-xs text-gray-500 text-center pt-4 border-t">
              <p className="mb-2">Use estas credenciais para testar:</p>
              <p><strong>Admin:</strong> admin@fragrance.com</p>
              <p><strong>Usuário:</strong> carlos@email.com</p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
