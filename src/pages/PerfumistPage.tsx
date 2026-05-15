import { useParams, Link, useNavigate } from "react-router";
import { perfumists, perfumes } from "../data/mockData";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { ArrowLeft, ChevronDown, MapPin, Search } from "lucide-react";


export default function PerfumistPage() {
  const { id } = useParams();
  const perfumist = perfumists.find((p) => p.id === id);
  const [searchQuery, setSearchQuery] = useState("");
  const { currentUser, logout, isAdmin } = useAuth();
  const [modalPerfumesOpen, setModalPerfumesOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/busca?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!perfumist) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Perfumista não encontrado</p>
      </div>
    );
  }

  const perfumistWorks = perfumes
    .filter((p) => p.perfumistId === id)
    .sort((a, b) => b.year - a.year);

  return (
    <>
      <main className="relative flex-1 w-full max-w-7xl mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6 -ml-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>

        {/* Header do Perfumista */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <img
                src={perfumist.photo}
                alt={perfumist.name}
                className="w-32 h-32 rounded-full object-cover ring-4 ring-purple-100"
              />
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {perfumist.name}
                </h1>
                <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>{perfumist.country}</span>
                </div>
                <p className="text-gray-700 leading-relaxed max-w-3xl">
                  {perfumist.bio}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Portfólio */}
        <Card>
          <CardHeader>
            <CardTitle>
              Portfólio de Fragrâncias ({perfumistWorks.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            {perfumistWorks.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">
                        Ano
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">
                        Foto
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">
                        Fragrância
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">
                        Marca
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">
                        Gênero
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {perfumistWorks.map((perfume) => (
                      <tr
                        key={perfume.id}
                        className="border-b hover:bg-gray-50 transition-colors"
                      >
                        <td className="py-3 px-4 text-gray-600">
                          {perfume.year}
                        </td>
                        <td className="py-3 px-4">
                          <img
                            src={perfume.image}
                            alt={perfume.name}
                            className="w-12 h-16 object-cover rounded"
                          />
                        </td>
                        <td className="py-3 px-4">
                          <Link
                            to={`/perfume/${perfume.id}`}
                            className="text-purple-600 hover:underline font-medium"
                          >
                            {perfume.name}
                          </Link>
                        </td>
                        <td className="py-3 px-4 text-gray-700 hover:text-teal-600 cursor-pointer"
                        onClick={()=> navigate(`/marca/${perfume.brandId}`)}>
                          {perfume.brand}
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={`${perfume.gender==="Masculino" ? "bg-blue-400 text-blue-800" : perfume.gender === "Feminino" ? "bg-pink-400 text-pink-800" : "bg-teal-400 text-teal-600"} px-2 py-1 rounded text-sm`}
                          >
                            {perfume.gender}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-center text-gray-500 py-8">
                Nenhuma fragrância cadastrada para este perfumista
              </p>
            )}
          </CardContent>
        </Card>
      </main>
    </>
  );
}
