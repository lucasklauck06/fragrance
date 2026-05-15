import { useState } from "react";
import { Link, useNavigate, Outlet } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Search as SearchIcon,
  User,
  LogOut,
  ChevronDown,
  Search,
  Tag,
  ArrowLeftRight,
  FlaskConical,
  Users,
} from "lucide-react";
import bgImage from "../assets/images/lovely-easter-white-lily-blooms-2jfhx5wifsoflo3j.jpg";

export default function DefaultLayout() {
  const [searchQuery, setSearchQuery] = useState("");
  const { currentUser, logout, isAdmin } = useAuth();
  const [modalPerfumesOpen, setModalPerfumesOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
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

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay branco semitransparente em todo o fundo */}
      <div className="absolute inset-0 bg-white/60 pointer-events-none"></div>

      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">FH</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                FragranceHub
              </span>
            </Link>
            <div className="flex">
              <div
                className="group/dropdown relative"
                onMouseEnter={() => setModalPerfumesOpen(true)}
                onMouseLeave={() => setModalPerfumesOpen(false)}
              >
                <Button className="hidden md:flex bg-transparent hover:bg-transparent text-gray-700 gap-2">
                  Perfumes
                  {modalPerfumesOpen === true ? (
                    <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                  ) : modalPerfumesOpen === false ? (
                    <ChevronDown className="w-4 h-4 rotate-180 transition-transform duration-200" />
                  ) : null}
                </Button>
                <div className="absolute top-full z-10 w-screen max-w-md overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  {modalPerfumesOpen && (
                    <div className="relative rounded-md shadow-2xl ring-1 ring-zinc-900/[0.08] dark:ring-zinc-700/50 bg-white/95 dark:bg-zinc-800/95 backdrop-blur-xl overflow-hidden">
                      <div className="flex flex-col py-8 px-10 gap-10 ">
                        <button
                          onClick={() => {
                            setModalPerfumesOpen(false);
                            navigate("/busca");
                          }}
                          className="flex items-center gap-4 hover:text-teal-600 transition-colors duration-200"
                        >
                          <Search className="w-6 h-6 inline-block mr-1" />
                          Ver todos os perfumes
                        </button>
                        <button
                          onClick={() => {
                            setModalPerfumesOpen(false);
                            navigate("/busca/designers");
                          }}
                          className="flex items-center gap-4 hover:text-teal-600 transition-colors duration-200 "
                        >
                          <Tag className="w-6 h-6 inline-block mr-1" />
                          Designers
                        </button>
                        <button
                          onClick={() => {
                            setModalPerfumesOpen(false);
                            navigate("/comparar");
                          }}
                          className="flex items-center gap-4 hover:text-teal-600 transition-colors duration-200 "
                        >
                          <ArrowLeftRight className="w-6 h-6 inline-block mr-1" />
                          <span className="font-semibold text-md">
                            Comparar Fragrâncias
                          </span>
                        </button>
                        <button
                          className="flex items-center gap-4 hover:text-teal-600 transition-colors duration-200 "
                          onClick={() => {
                            setModalPerfumesOpen(false);
                            navigate("/busca-notas");
                          }}
                        >
                          <FlaskConical className="w-6 h-6 inline-block mr-1" />
                          Buscar por Notas
                        </button>
                        <button
                          onClick={() => {
                            setModalPerfumesOpen(false);
                            navigate("/grupos");
                          }}
                          className="flex items-center gap-4 hover:text-teal-600 transition-colors duration-200"
                        >
                          <Users className="w-6 h-6 inline-block mr-1" />
                          <span className="font-semibold text-md">
                            Grupo de Perfumes
                          </span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <Button
                onClick={() => navigate("/notas")}
                className="hidden md:flex bg-transparent hover:bg-transparent text-gray-700 "
              >
                Notas
              </Button>

              <Button
                onClick={() => navigate("/perfumistas")}
                className="hidden md:flex bg-transparent hover:bg-transparent text-gray-700 "
              >
                Perfumistas
              </Button>
              <Button
                onClick={() => navigate("/resenhas")}
                className="hidden md:flex bg-transparent hover:bg-transparent text-gray-700 "
              >
                Resenhas
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <Tabs defaultValue="Sun">
                <TabsList className="bg-transparent border-b-2 border-gray-200">
                  <TabsTrigger
                    value="Sun"
                    className="text-gray-700 hover:text-gray-900"
                  >
                    ☀️
                  </TabsTrigger>
                  <TabsTrigger
                    value="Moon"
                    className="text-gray-700 hover:text-gray-900"
                  >
                    🌙
                  </TabsTrigger>
                </TabsList>
              </Tabs>
              <Button className="rounded-full bg-gray-200 text-black hover:bg-gray-200">
                <SearchIcon className="w-5 h-5" />
              </Button>
              {currentUser ? (
                <div className="relative">
                  <Button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    variant="outline"
                    className="gap-2 cursor-pointer relative z-50"
                  >
                    <User className="w-4 h-4" />
                    {currentUser.name}
                  </Button>

                  {isUserMenuOpen && (
                    <>
                      {/* Fundo invisível para fechar ao clicar fora */}
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsUserMenuOpen(false)}
                      ></div>

                      {/* Menu */}
                      <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-gray-200 shadow-xl rounded-lg z-50 flex flex-col py-1 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                        <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
                          <p className="text-sm font-bold text-gray-900 truncate">
                            {currentUser.name}
                          </p>
                          <p className="text-xs text-gray-500 truncate">
                            {currentUser.email}
                          </p>
                        </div>

                        {isAdmin() && (
                          <div className="border-b border-gray-100">
                            <button
                              onClick={() => {
                                setIsUserMenuOpen(false);
                                navigate("/admin");
                              }}
                              className="w-full text-left px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                            >
                              Painel Admin
                            </button>
                          </div>
                        )}

                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
                        >
                          <LogOut className="w-4 h-4 mr-2" />
                          Sair
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <Button onClick={() => navigate("/login")}>Login</Button>
              )}
            </div>
          </div>
          <form
            onSubmit={handleSearch}
            className="flex-1 max-w-4xl mt-4 border border-gray-300 rounded-md"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 " />
              <Input
                type="search"
                placeholder="Buscar perfumes, marcas, perfumistas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full"
              />
            </div>
          </form>
        </div>
      </header>

      {/* Aqui vão as páginas que usam esse layout (Outlet do react-router) */}
      <div className="relative z-10 flex-1 flex flex-col">
        <Outlet />
      </div>
    </div>
  );
}
