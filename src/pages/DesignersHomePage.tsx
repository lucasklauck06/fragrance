import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { perfumes } from "../data/mockData";
import { Button } from "../components/ui/button";
import { Toggle } from "../components/ui/toggle";
import { Input } from "../components/ui/input";
import { perfumists } from "../data/mockData";
import { Sun, Moon, ChevronUp, SearchIcon } from "lucide-react";
import { Search, User, LogOut, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import SidebarResenhasPerfumes from "../components/SidebarResenhasPerfumes";
export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const { currentUser, logout, isAdmin } = useAuth();
  const [modalPerfumesOpen, setModalPerfumesOpen] = useState(false);
  const alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
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
    <>
      {/* Main Content */}
      <main className="relative flex-1 w-full max-w-7xl mx-auto px-4 py-8 bg-white/40  backdrop-blur-sm rounded-lg shadow-sm">
       <div className="flex gap-4">
        <div className="flex-1">
          <div className="flex flex-col">
            <h1 className="flex justify-center text-2xl mb-4">Perfumistas</h1>
          </div>
          <div className="relative">
            <Search className="w-4 h-4 text-black absolute left-3 top-1/2 -translate-y-1/2" />
            <Input
              type="search"
              placeholder="Buscar perfumistas..."
              className="pl-10 pr-4 py-2 h-12 w-full "
            />
          </div>
          <div className="flex flex-col">
            {alfabet.map((letter) => (
              <div key={letter}>
                <div className="text-black text-xl font-bold mt-4">{letter}</div>
                {perfumists.filter((perfumist) => perfumist.name.startsWith(letter)).length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-2">
                      {perfumists.filter((perfumist) => perfumist.name.startsWith(letter)).map((perfumist) => (
                      <span
                        key={perfumist.name}
                        className="text-teal-600 hover:text-teal-700 transition-colors duration-300 text-lg font-semibold flex items-center gap-2 group"
                      >
                        <div className="bg-gray-200 rounded-full w-16 h-16 overflow-hidden relative border-2 border-gray-300 group-hover:border-teal-700 transition-colors duration-300">
                          {perfumist.photo ? (
                            <img
                              src={perfumist.photo}
                              alt={perfumist.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                              👤
                            </div>
                          )}
                        </div>
                        <Link
                          to={`/perfumista/${perfumist.id}`}
                          className="truncate"
                          title={perfumist.name}
                        >
                          {perfumist.name}
                        </Link>
                      </span>
                    ))}
                </div>
                ) : (
                  <div className="flex justify-center gap-2">
                    <span className="text-gray-500">Nenhum perfumista encontrado com a letra {letter}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div>
          <SidebarResenhasPerfumes />
        </div>
       </div>
      </main>
    </>
  );
}
