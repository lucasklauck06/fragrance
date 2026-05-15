import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { perfumes as initialPerfumes } from '../../data/mockData';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Pencil, Trash2, Plus } from 'lucide-react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '../../components/ui/alert-dialog';
import { toast } from 'sonner';
import AdminLayout from '../../components/AdminLayout';

export default function AdminPerfumesPage() {
  const [perfumes, setPerfumes] = useState(initialPerfumes);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (!deleteId) return;

    const perfume = perfumes.find(p => p.id === deleteId);
    setPerfumes(perfumes.filter(p => p.id !== deleteId));
    setDeleteId(null);
    toast.success(`Perfume "${perfume?.name}" excluído com sucesso!`, {
      className: 'bg-green-50 border-green-200',
    });
  };

  const perfumeToDelete = perfumes.find(p => p.id === deleteId);

  return (
    <AdminLayout>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Gerenciar Perfumes</CardTitle>
            <Button onClick={() => navigate('/admin/perfumes/novo')} className="gap-2 bg-green-600 hover:bg-green-700">
              <Plus className="w-4 h-4" />
              Novo Cadastro
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">ID</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Nome</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Marca</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Perfumista</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Preço</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">Ações</th>
                </tr>
              </thead>
              <tbody>
                {perfumes.map((perfume) => (
                  <tr key={perfume.id} className="border-b hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 text-gray-600">{perfume.id}</td>
                    <td className="py-3 px-4 font-medium">{perfume.name}</td>
                    <td className="py-3 px-4 text-gray-700">{perfume.brand}</td>
                    <td className="py-3 px-4 text-gray-700">{perfume.perfumist}</td>
                    <td className="py-3 px-4 text-gray-700">R$ {perfume.price.toFixed(2)}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => navigate(`/admin/perfumes/${perfume.id}`)}
                          className="gap-1"
                        >
                          <Pencil className="w-3 h-3" />
                          Editar
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setDeleteId(perfume.id)}
                          className="gap-1 text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="w-3 h-3" />
                          Excluir
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Modal de Confirmação */}
      <AlertDialog open={deleteId !== null} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar Exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir o item <strong>"{perfumeToDelete?.name}"</strong>?
              <br />
              <span className="text-red-600 font-medium">Esta ação é irreversível.</span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-red-600 hover:bg-red-700">
              Confirmar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </AdminLayout>
  );
}
