import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { perfumes, brands, perfumists } from '../../data/mockData';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { toast } from 'sonner';
import AdminLayout from '../../components/AdminLayout';

export default function AdminPerfumeFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = id !== 'novo';
  const perfume = isEdit ? perfumes.find(p => p.id === id) : null;

  const [formData, setFormData] = useState({
    name: perfume?.name || '',
    brandId: perfume?.brandId || '',
    perfumistId: perfume?.perfumistId || '',
    gender: perfume?.gender || 'Masculino',
    price: perfume?.price || 0,
    year: perfume?.year || new Date().getFullYear(),
    image: perfume?.image || '',
    topNotes: perfume?.topNotes.join(', ') || '',
    heartNotes: perfume?.heartNotes.join(', ') || '',
    baseNotes: perfume?.baseNotes.join(', ') || '',
    description: perfume?.description || '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: string, value: string | number) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório';
    if (!formData.brandId) newErrors.brandId = 'Marca é obrigatória';
    if (!formData.perfumistId) newErrors.perfumistId = 'Perfumista é obrigatório';
    if (formData.price < 0) newErrors.price = 'Preço não pode ser negativo';
    if (!formData.description.trim()) newErrors.description = 'Descrição é obrigatória';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      toast.error('Corrija os erros no formulário');
      return;
    }

    const brand = brands.find(b => b.id === formData.brandId);
    const perfumist = perfumists.find(p => p.id === formData.perfumistId);

    const perfumeData = {
      id: isEdit ? id : String(perfumes.length + 1),
      name: formData.name,
      brand: brand?.name || '',
      brandId: formData.brandId,
      perfumist: perfumist?.name || '',
      perfumistId: formData.perfumistId,
      gender: formData.gender as 'Masculino' | 'Feminino' | 'Unissex',
      price: Number(formData.price),
      year: Number(formData.year),
      image: formData.image || 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=600&fit=crop',
      topNotes: formData.topNotes.split(',').map(n => n.trim()).filter(Boolean),
      heartNotes: formData.heartNotes.split(',').map(n => n.trim()).filter(Boolean),
      baseNotes: formData.baseNotes.split(',').map(n => n.trim()).filter(Boolean),
      description: formData.description,
    };

    if (isEdit) {
      const index = perfumes.findIndex(p => p.id === id);
      perfumes[index] = perfumeData;
    } else {
      perfumes.push(perfumeData);
    }

    toast.success('Registro salvo com sucesso!', {
      className: 'bg-green-50 border-green-200',
    });

    navigate('/admin/perfumes');
  };

  return (
    <AdminLayout>
      <Card>
        <CardHeader>
          <CardTitle>{isEdit ? 'Editar Perfume' : 'Novo Perfume'}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome do Perfume *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  placeholder="Ex: Sauvage Elixir"
                />
                {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="brand">Marca *</Label>
                <Select value={formData.brandId} onValueChange={(v) => handleChange('brandId', v)}>
                  <SelectTrigger id="brand">
                    <SelectValue placeholder="Selecione uma marca" />
                  </SelectTrigger>
                  <SelectContent>
                    {brands.map(brand => (
                      <SelectItem key={brand.id} value={brand.id}>
                        {brand.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.brandId && <p className="text-sm text-red-600">{errors.brandId}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="perfumist">Perfumista *</Label>
                <Select value={formData.perfumistId} onValueChange={(v) => handleChange('perfumistId', v)}>
                  <SelectTrigger id="perfumist">
                    <SelectValue placeholder="Selecione um perfumista" />
                  </SelectTrigger>
                  <SelectContent>
                    {perfumists.map(perfumist => (
                      <SelectItem key={perfumist.id} value={perfumist.id}>
                        {perfumist.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.perfumistId && <p className="text-sm text-red-600">{errors.perfumistId}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="gender">Gênero *</Label>
                <Select value={formData.gender} onValueChange={(v) => handleChange('gender', v)}>
                  <SelectTrigger id="gender">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Masculino">Masculino</SelectItem>
                    <SelectItem value="Feminino">Feminino</SelectItem>
                    <SelectItem value="Unissex">Unissex</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">Preço (R$) *</Label>
                <Input
                  id="price"
                  type="number"
                  min="0"
                  step="0.01"
                  value={formData.price}
                  onChange={(e) => handleChange('price', Number(e.target.value))}
                />
                {errors.price && <p className="text-sm text-red-600">{errors.price}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="year">Ano de Lançamento</Label>
                <Input
                  id="year"
                  type="number"
                  min="1900"
                  max={new Date().getFullYear() + 5}
                  value={formData.year}
                  onChange={(e) => handleChange('year', Number(e.target.value))}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="image">URL da Imagem</Label>
              <Input
                id="image"
                value={formData.image}
                onChange={(e) => handleChange('image', e.target.value)}
                placeholder="https://exemplo.com/imagem.jpg"
              />
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Pirâmide Olfativa</h3>
              <p className="text-sm text-gray-600">Separe as notas por vírgula (ex: Bergamota, Lavanda, Cedro)</p>

              <div className="space-y-2">
                <Label htmlFor="topNotes">Notas de Topo</Label>
                <Input
                  id="topNotes"
                  value={formData.topNotes}
                  onChange={(e) => handleChange('topNotes', e.target.value)}
                  placeholder="Ex: Bergamota, Limão, Hortelã"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="heartNotes">Notas de Coração</Label>
                <Input
                  id="heartNotes"
                  value={formData.heartNotes}
                  onChange={(e) => handleChange('heartNotes', e.target.value)}
                  placeholder="Ex: Lavanda, Gerânio, Rosa"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="baseNotes">Notas de Base</Label>
                <Input
                  id="baseNotes"
                  value={formData.baseNotes}
                  onChange={(e) => handleChange('baseNotes', e.target.value)}
                  placeholder="Ex: Cedro, Âmbar, Almíscar"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descrição *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
                rows={4}
                placeholder="Descreva o perfume, suas características e ocasiões de uso..."
              />
              {errors.description && <p className="text-sm text-red-600">{errors.description}</p>}
            </div>

            <div className="flex gap-4">
              <Button type="submit" className="bg-green-600 hover:bg-green-700">
                Salvar
              </Button>
              <Button type="button" variant="outline" onClick={() => navigate('/admin/perfumes')}>
                Voltar / Cancelar
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}
