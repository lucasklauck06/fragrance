import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
import {
  Search as SearchIcon,
  User,
  LogOut,
  ChevronDown,
  Search,
  Angry,
  Frown,
  Meh,
  Smile,
  Laugh,
  Snowflake,
  Leaf,
  Umbrella,
  TreePalm,
  Trees,
  Sun,
  MoonStar,
  Clock,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Button } from "../components/ui/button";
import { useAuth } from "../contexts/AuthContext";
import { perfumes, reviews as initialReviews, type Review } from "../data/mockData";
import { Textarea } from "../components/ui/textarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Star, User as UserIcon, DollarSign, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { Input } from "../components/ui/input";

export default function PerfumeDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser, logout, isAdmin } = useAuth();
  const perfume = perfumes.find((p) => p.id === id);
  const [searchQuery, setSearchQuery] = useState("");
  const [modalPerfumesOpen, setModalPerfumesOpen] = useState(false);
  const [rastroVote, setRastroVote] = useState<number | null>(null);
  const [longevidadeVote, setLongevidadeVote] = useState<number | null>(null);

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

  const [reviews, setReviews] = useState(
    initialReviews.filter((r) => r.perfumeId === id),
  );
  const [newReview, setNewReview] = useState({ rating: 0, comment: "" });

  if (!perfume) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Perfume não encontrado</p>
      </div>
    );
  }

  const handleSubmitReview = () => {
    if (!currentUser) {
      toast.error("Você precisa estar logado para deixar uma resenha");
      navigate("/login");
      return;
    }

    if (newReview.rating === 0) {
      toast.error("Selecione uma nota de 1 a 5 estrelas");
      return;
    }

    if (newReview.comment.length < 10) {
      toast.error("Escreva pelo menos 10 caracteres no comentário");
      return;
    }

    const review: Review = {
      id: String(reviews.length + 1),
      perfumeId: perfume.id,
      userId: currentUser.id,
      userName: currentUser.name,
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toISOString().split("T")[0],
    };

    setReviews([review, ...reviews]);
    setNewReview({ rating: 0, comment: "" });
    toast.success("Resenha enviada com sucesso!");
  };

  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
      : 0;

  return (
    <>
      <main className="relative max-w-7xl mx-auto px-4 py-8">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Esquerda: Foto e Informações Básicas */}
          <div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-4 backdrop-blur-sm relative group cursor-pointer">
              <img
                src={perfume.image}
                alt={perfume.name}
                className="w-full aspect-[2/3] object-cover  transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000 ease-out pointer-events-none z-10"></div>
            </div>
          </div>

          {/* Direita: Detalhes */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {perfume.name}
              </h1>
              <span
                onClick={() => navigate(`/marca/${perfume.brandId}`)}
                className="text-lg text-teal-500 cursor-pointer"
              >
                {perfume.brand}
              </span>
              <span className="text-gray-500 mx-2">•</span>
              <span
                onClick={() => navigate(`/perfumista/${perfume.perfumistId}`)}
                className="text-lg text-teal-500 cursor-pointer"
              >
                {perfume.perfumist}
              </span>
              <p className="text-gray-600 mt-2">Lançamento: {perfume.year}</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Pirâmide Olfativa</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-sm text-gray-500 mb-2">
                    Notas de Topo
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {perfume.topNotes.map((note, i) => (
                      <span
                        key={i}
                        className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-sm text-gray-500 mb-2">
                    Notas de Coração
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {perfume.heartNotes.map((note, i) => (
                      <span
                        key={i}
                        className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-sm text-gray-500 mb-2">
                    Notas de Base
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {perfume.baseNotes.map((note, i) => (
                      <span
                        key={i}
                        className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <p className="text-gray-700 leading-relaxed">
                  {perfume.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {/* avaliação e quando usar */}
          {/* avaliacoes */}
          <div className="flex items-center gap-4 mb-5">
            <div className="h-1 flex-1 ml-auto bg-gradient-to-b from-zinc-200 to-zinc-400 dark:from-zinc-500 dark:to-zinc-700 rounded-full"></div>
            <span className="font-semibold">Avaliações dos usuários</span>
            <div className="h-1 flex-1 ml-auto bg-gradient-to-b from-zinc-200 to-zinc-400 dark:from-zinc-500 dark:to-zinc-700 rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4 flex justify-around items-center">
                <div className="flex flex-col items-center gap-2">
                  <Laugh className="w-8 h-8 text-black" />
                  <p className="text-xs font-medium">Amo</p>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-12 h-2 rounded-full bg-gray-300">
                      <div
                        className="h-full rounded-full bg-green-500"
                        style={{ width: "49%" }}
                      ></div>
                    </div>
                    <p className="text-sm font-semibold text-green-600">1.6k</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Smile className="w-8 h-8 text-black" />
                  <p className="text-xs font-medium">Gosto</p>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-12 h-2 rounded-full bg-gray-300">
                      <div
                        className="h-full rounded-full bg-purple-500"
                        style={{ width: "30%" }}
                      ></div>
                    </div>
                    <p className="text-sm font-semibold text-purple-600">983</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Meh className="w-8 h-8 text-black" />
                  <p className="text-xs font-medium">OK</p>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-12 h-2 rounded-full bg-gray-300">
                      <div
                        className="h-full rounded-full bg-yellow-500"
                        style={{ width: "13%" }}
                      ></div>
                    </div>
                    <p className="text-sm font-semibold text-yellow-600">409</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Frown className="w-8 h-8 text-black" />
                  <p className="text-xs font-medium">Não Gosto</p>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-12 h-2 rounded-full bg-gray-300">
                      <div
                        className="h-full rounded-full bg-blue-400"
                        style={{ width: "5%" }}
                      ></div>
                    </div>
                    <p className="text-sm font-semibold text-blue-600">176</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Angry className="w-8 h-8 text-black" />
                  <p className="text-xs font-medium">Odeio</p>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-12 h-2 rounded-full bg-gray-300">
                      <div
                        className="h-full rounded-full bg-red-500"
                        style={{ width: "2%" }}
                      ></div>
                    </div>
                    <p className="text-sm font-semibold text-red-600">76</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex justify-around items-center">
                <div className="flex flex-col items-center gap-2">
                  <Snowflake className="w-8 h-8 text-black" />
                  <p className="text-xs font-medium">Inverno</p>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-12 h-2 rounded-full bg-gray-300">
                      <div
                        className="h-full rounded-full bg-blue-400"
                        style={{ width: "2%" }}
                      ></div>
                    </div>
                    <p className="text-sm font-semibold text-blue-400">76</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Leaf className="w-8 h-8 text-black" />
                  <p className="text-xs font-medium">Primavera</p>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-12 h-2 rounded-full bg-gray-300">
                      <div
                        className="h-full rounded-full bg-green-500"
                        style={{ width: "2%" }}
                      ></div>
                    </div>
                    <p className="text-sm font-semibold text-green-600">76</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <TreePalm className="w-8 h-8 text-black" />
                  <p className="text-xs font-medium">Verão</p>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-12 h-2 rounded-full bg-gray-300">
                      <div
                        className="h-full rounded-full bg-red-500"
                        style={{ width: "2%" }}
                      ></div>
                    </div>
                    <p className="text-sm font-semibold text-red-600">76</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Trees className="w-8 h-8 text-black" />
                  <p className="text-xs font-medium">Outono</p>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-12 h-2 rounded-full bg-gray-300">
                      <div
                        className="h-full rounded-full bg-amber-500"
                        style={{ width: "2%" }}
                      ></div>
                    </div>
                    <p className="text-sm font-semibold text-amber-600">76</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Sun className="w-8 h-8 text-black" />
                  <p className="text-xs font-medium">Dia</p>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-12 h-2 rounded-full bg-gray-300">
                      <div
                        className="h-full rounded-full bg-orange-500"
                        style={{ width: "2%" }}
                      ></div>
                    </div>
                    <p className="text-sm font-semibold text-orange-600">76</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <MoonStar className="w-8 h-8 text-black" />
                  <p className="text-xs font-medium">Noite</p>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-12 h-2 rounded-full bg-gray-300">
                      <div
                        className="h-full rounded-full bg-blue-300"
                        style={{ width: "2%" }}
                      ></div>
                    </div>
                    <p className="text-sm font-semibold text-blue-300">76</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Desempenho */}
          <div className="flex items-center gap-4 mb-5">
            <div className="h-1 flex-1 ml-auto bg-gradient-to-b from-zinc-200 to-zinc-400 dark:from-zinc-500 dark:to-zinc-700 rounded-full"></div>
            <span className="font-semibold">Desempenho</span>
            <div className="h-1 flex-1 ml-auto bg-gradient-to-b from-zinc-200 to-zinc-400 dark:from-zinc-500 dark:to-zinc-700 rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-6 flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col items-center mt-4">
                    <Clock className="w-8 h-8 text-black self-center" />
                    <h3 className="text-lg font-semibold text-center">
                      Longevidade
                    </h3>
                  </div>

                  {/* Slider funcional */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <UserIcon className="w-6 h-6 text-gray-400" />
                      <span className="text-sm font-medium">
                        {longevidadeVote === null
                          ? "Sem Voto"
                          : [
                              "Sem Voto",
                              "Muito Fraco",
                              "Fraco",
                              "Moderado",
                              "Longa duração",
                              "Eterno",
                            ][longevidadeVote]}
                      </span>
                    </div>

                    <div className="relative w-full h-8 flex items-center group cursor-pointer">
                      {/* Track base */}
                      <div className="absolute w-full h-2 rounded-full bg-gray-200"></div>

                      {/* Active track (se houver voto) */}
                      {longevidadeVote !== null && (
                        <div
                          className="absolute h-2 rounded-full bg-teal-500 transition-all duration-300"
                          style={{ width: `${(longevidadeVote / 5) * 100}%` }}
                        ></div>
                      )}

                      {/* As 6 bolinhas de marcação */}
                      {[0, 1, 2, 3, 4, 5].map((step, index) => (
                        <button
                          key={step}
                          onClick={() => setLongevidadeVote(step)}
                          className="absolute transform -translate-x-1/2 focus:outline-none"
                          style={{ left: `${(index / 5) * 100}%` }}
                          title={
                            [
                              "Sem Voto",
                              "Muito Fraco",
                              "Fraco",
                              "Moderado",
                              "Longa duração",
                              "Eterno",
                            ][index]
                          }
                        >
                          <div
                            className={`rounded-full transition-all duration-300 shadow-sm border-2 border-white
                              ${longevidadeVote === step ? "w-6 h-6 bg-green-500 border-[3px] border-teal-500 z-10" : "w-3 h-3 bg-teal-300"}
                              ${longevidadeVote !== null && step <= longevidadeVote && longevidadeVote !== step ? "bg-teal-500" : ""}
                            `}
                          ></div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Items Rastro */}
                <div className="flex flex-col gap-4">
                  {/* Íntimo */}
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-medium min-w-fit">
                      Muito Fraco
                    </span>
                    <div className="flex-1">
                      <div className="w-full h-2 rounded-full bg-gray-300">
                        <div
                          className="h-full rounded-full bg-blue-400"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-blue-400 min-w-fit">
                      1.4k
                    </span>
                  </div>

                  {/* Moderada */}
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-medium min-w-fit">Fraco</span>
                    <div className="flex-1">
                      <div className="w-full h-2 rounded-full bg-gray-300">
                        <div
                          className="h-full rounded-full bg-teal-500"
                          style={{ width: "45%" }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-teal-600 min-w-fit">
                      2.3k
                    </span>
                  </div>

                  {/* Forte */}
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-medium min-w-fit">
                      Moderado
                    </span>
                    <div className="flex-1">
                      <div className="w-full h-2 rounded-full bg-gray-300">
                        <div
                          className="h-full rounded-full bg-teal-600"
                          style={{ width: "10%" }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-teal-700 min-w-fit">
                      463
                    </span>
                  </div>

                  {/* Enorme */}
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-medium min-w-fit">
                      Longa Duração
                    </span>
                    <div className="flex-1">
                      <div className="w-full h-2 rounded-full bg-gray-300">
                        <div
                          className="h-full rounded-full bg-teal-500"
                          style={{ width: "5%" }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-teal-600 min-w-fit">
                      200
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-medium min-w-fit">
                      Eterno
                    </span>
                    <div className="flex-1">
                      <div className="w-full h-2 rounded-full bg-gray-300">
                        <div
                          className="h-full rounded-full bg-teal-500"
                          style={{ width: "5%" }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-teal-600 min-w-fit">
                      200
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Rasto */}
            <Card>
              <CardContent className="p-6 flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col items-center mt-4">
                    <UserIcon className="w-8 h-8 text-black self-center" />
                    <h3 className="text-lg font-semibold text-center">
                      Rastro
                    </h3>
                  </div>

                  {/* Slider funcional */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <UserIcon className="w-6 h-6 text-gray-400" />
                      <span className="text-sm font-medium">
                        {rastroVote === null
                          ? "Sem Voto"
                          : [
                              "Sem Voto",
                              "Íntimo",
                              "Moderado",
                              "Forte",
                              "Enorme",
                            ][rastroVote]}
                      </span>
                    </div>

                    <div className="relative w-full h-8 flex items-center group cursor-pointer">
                      {/* Track base */}
                      <div className="absolute w-full h-2 rounded-full bg-gray-200"></div>

                      {/* Active track (se houver voto) */}
                      {rastroVote !== null && (
                        <div
                          className="absolute h-2 rounded-full bg-teal-500 transition-all duration-300"
                          style={{ width: `${(rastroVote / 4) * 100}%` }}
                        ></div>
                      )}

                      {/* As 5 bolinhas de marcação */}
                      {[0, 1, 2, 3, 4].map((step, index) => (
                        <button
                          key={step}
                          onClick={() => setRastroVote(step)}
                          className="absolute transform -translate-x-1/2 focus:outline-none"
                          style={{ left: `${(index / 4) * 100}%` }}
                          title={
                            [
                              "Sem Voto",
                              "Íntimo",
                              "Moderada",
                              "Forte",
                              "Enorme",
                            ][index]
                          }
                        >
                          <div
                            className={`rounded-full transition-all duration-300 shadow-sm border-2 border-white
                              ${rastroVote === step ? "w-6 h-6 bg-green-500 border-[3px] border-teal-500 z-10" : "w-3 h-3 bg-teal-300"}
                              ${rastroVote !== null && step <= rastroVote && rastroVote !== step ? "bg-teal-500" : ""}
                            `}
                          ></div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Items Rastro */}
                <div className="flex flex-col gap-4">
                  {/* Íntimo */}
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-medium w-20 sm:w-24 lg:w-28 shrink-0">
                      Íntimo
                    </span>
                    <span className="text-sm font-semibold text-blue-400 w-9 sm:w-11 shrink-0 text-right">
                      1.4k
                    </span>
                    <div className="flex-1 gap-2">
                      <div className="flex-1">
                        <div className="w-full h-2 rounded-full bg-gray-300">
                          <div
                            className="h-full rounded-full bg-blue-400"
                            style={{ width: "25%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Moderada */}
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-medium w-20 sm:w-24 lg:w-28 shrink-0">
                      Moderada
                    </span>
                    <span className="text-sm font-semibold text-teal-600 w-9 sm:w-11 shrink-0 text-right">
                      2.3k
                    </span>
                    <div className="flex-1">
                      <div className="w-full h-2 rounded-full bg-gray-300">
                        <div
                          className="h-full rounded-full bg-teal-500"
                          style={{ width: "45%" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Forte */}
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-medium w-20 sm:w-24 lg:w-28 shrink-0">
                      Forte
                    </span>
                    <span className="text-sm font-semibold text-teal-700 w-9 sm:w-11 shrink-0 text-right">
                      463
                    </span>
                    <div className="flex-1">
                      <div className="w-full h-2 rounded-full bg-gray-300">
                        <div
                          className="h-full rounded-full bg-teal-600"
                          style={{ width: "10%" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Enorme */}
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-medium w-20 sm:w-24 lg:w-28 shrink-0">
                      Enorme
                    </span>
                    <span className="text-sm font-semibold text-teal-600 w-9 sm:w-11 shrink-0 text-right">
                      200
                    </span>
                    <div className="flex-1">
                      <div className="w-full h-2 rounded-full bg-gray-300">
                        <div
                          className="h-full rounded-full bg-teal-500"
                          style={{ width: "5%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex items-center gap-4 mb-5">
            {/* {genero e valor estimado} */}
            <div className="h-1 flex-1 ml-auto bg-gradient-to-b from-zinc-200 to-zinc-400 dark:from-zinc-500 dark:to-zinc-700 rounded-full"></div>
            <span className="font-semibold">Demografia e Valor</span>
            <div className="h-1 flex-1 ml-auto bg-gradient-to-b from-zinc-200 to-zinc-400 dark:from-zinc-500 dark:to-zinc-700 rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <UserIcon
                  className={`w-8 h-8 ${perfume.gender === "Masculino" ? "text-blue-600" : "text-pink-600"}`}
                />
                <div>
                  <p className="text-xs text-gray-500">Gênero</p>
                  <p
                    className={`font-semibold ${perfume.gender === "Masculino" ? "text-blue-600" : "text-pink-600"}`}
                  >
                    {perfume.gender}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <DollarSign className="w-8 h-8 text-green-600" />
                <div>
                  <p className="text-xs text-gray-500">Valor Estimado</p>
                  <p className="font-semibold">R$ {perfume.price}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex flex-col mt-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 bg-gradient-to-b from-zinc-200 to-zinc-400 dark:from-zinc-500 dark:to-zinc-700 rounded-full"></div>
            <p>Designer {perfume.brand}</p>
          </div>
          <div className="flex gap-4 overflow-x-auto scroll-smooth pb-2">
            {perfumes.filter(
              (p) => p.brand === perfume.brand && p.id !== perfume.id,
            ).length > 0 ? (
              perfumes
                .filter((p) => p.brand === perfume.brand && p.id !== perfume.id)
                .map((p) => (
                  <div key={p.id} className="flex-shrink-0">
                    <div
                      className="bg-gray-50 rounded-lg overflow-hidden p-2 hover:shadow-lg transition-all duration-300 cursor-pointer w-32"
                      onClick={() => navigate(`/perfume/${p.id}`)}
                    >
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-40 object-cover rounded-md mb-2 hover:scale-105 transition-transform duration-300"
                      />
                      <p className="text-sm font-bold text-gray-900 truncate">
                        {p.name}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {p.brand}
                      </p>
                      <p className="text-xs text-teal-600 font-semibold mt-1">
                        R$ {p.price}
                      </p>
                    </div>
                  </div>
                ))
            ) : (
              <div className="rounded-full px-4 py-2 bg-gray-50">
                <p className="text-gray-500 text-sm">
                  Não há outros perfumes desta marca disponíveis.
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <div className="flex items-center gap-3 mb-4 mt-8">
            <div className="w-1 h-6 bg-gradient-to-b from-zinc-200 to-zinc-400 dark:from-zinc-500 dark:to-zinc-700 rounded-full"></div>
            <p>Coleção {perfume.collection}</p>
          </div>
          <div className="flex gap-4 overflow-x-auto scroll-smooth pb-2">
            {perfumes.filter(
              (p) => p.collection === perfume.collection && p.id !== perfume.id,
            ).length > 0 ? (
              perfumes
                .filter(
                  (p) =>
                    p.collection === perfume.collection && p.id !== perfume.id,
                )
                .map((p) => (
                  <div key={p.id} className="flex-shrink-0">
                    <div
                      className="bg-gray-50 rounded-lg overflow-hidden p-2 hover:shadow-lg transition-all duration-300 cursor-pointer w-32"
                      onClick={() => navigate(`/perfume/${p.id}`)}
                    >
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-40 object-cover rounded-md mb-2 hover:scale-105 transition-transform duration-300"
                      />
                      <p className="text-sm font-bold text-gray-900 truncate">
                        {p.name}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {p.brand}
                      </p>
                      <p className="text-xs text-teal-600 font-semibold mt-1">
                        R$ {p.price}
                      </p>
                    </div>
                  </div>
                ))
            ) : (
              <div className="rounded-full px-4 py-2 bg-gray-50">
                <p className="text-gray-500 text-sm">
                  Não há outros perfumes desta coleção disponíveis.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Seção Comunidade */}
        <Card className="mt-4">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Comunidade ({reviews.length} resenhas)</CardTitle>
              {reviews.length > 0 && (
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-5 h-5 ${
                          star <= averageRating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-semibold">
                    {averageRating.toFixed(1)}
                  </span>
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Formulário de Resenha */}
            {currentUser ? (
              <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                <h3 className="font-semibold">Deixe sua resenha</h3>

                <div>
                  <p className="text-sm text-gray-600 mb-2">Sua nota:</p>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() =>
                          setNewReview({ ...newReview, rating: star })
                        }
                        className="focus:outline-none"
                      >
                        <Star
                          className={`w-8 h-8 cursor-pointer transition-colors ${
                            star <= newReview.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300 hover:text-yellow-400"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <Textarea
                    placeholder="Conte sua experiência com este perfume (mínimo 10 caracteres)..."
                    value={newReview.comment}
                    onChange={(e) =>
                      setNewReview({ ...newReview, comment: e.target.value })
                    }
                    rows={4}
                  />
                </div>

                <Button
                  onClick={handleSubmitReview}
                  disabled={
                    newReview.rating === 0 || newReview.comment.length < 10
                  }
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  Enviar Resenha
                </Button>
              </div>
            ) : (
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-gray-600 mb-3">
                  Faça login para deixar sua resenha
                </p>
                <Button onClick={() => navigate("/login")}>Fazer Login</Button>
              </div>
            )}

            {/* Lista de Resenhas */}
            <div className="space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="border-t pt-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-semibold">{review.userName}</p>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            star <= review.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </>
  );
}
