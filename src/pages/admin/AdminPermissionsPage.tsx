import { useState } from 'react';
import { users as initialUsers } from '../../data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { toast } from 'sonner';
import AdminLayout from '../../components/AdminLayout';
import { Shield, User } from 'lucide-react';

export default function AdminPermissionsPage() {
  const [users, setUsers] = useState(initialUsers);

  const handleRoleChange = (userId: string, newRole: 'USER' | 'ADMIN') => {
    const user = users.find(u => u.id === userId);
    if (!user) return;

    setUsers(users.map(u => u.id === userId ? { ...u, role: newRole } : u));

    toast.success(`Permissões de ${user.name} atualizadas.`, {
      className: 'bg-green-50 border-green-200',
    });
  };

  return (
    <AdminLayout>
      <Card>
        <CardHeader>
          <CardTitle>Controle de Permissões / Perfis de Acesso</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">ID</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Nome</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">E-mail</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Data de Cadastro</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Nível de Acesso</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 text-gray-600">{user.id}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-purple-700 font-semibold text-sm">
                            {user.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <span className="font-medium">{user.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-gray-700">{user.email}</td>
                    <td className="py-3 px-4 text-gray-600">{user.createdAt}</td>
                    <td className="py-3 px-4">
                      <Select
                        value={user.role}
                        onValueChange={(value) => handleRoleChange(user.id, value as 'USER' | 'ADMIN')}
                      >
                        <SelectTrigger className="w-40">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="USER">
                            <div className="flex items-center gap-2">
                              <User className="w-4 h-4 text-blue-600" />
                              <span>USER</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="ADMIN">
                            <div className="flex items-center gap-2">
                              <Shield className="w-4 h-4 text-purple-600" />
                              <span>ADMIN</span>
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">ℹ️ Informações sobre Permissões</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li><strong>USER:</strong> Pode visualizar perfumes, deixar resenhas e explorar o catálogo</li>
              <li><strong>ADMIN:</strong> Acesso total ao painel administrativo, incluindo CRUDs e gestão de usuários</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}
