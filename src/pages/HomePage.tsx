import { Link, useNavigate } from "react-router";
import { perfumes } from "../data/mockData";
import { Button } from "../components/ui/button";
import BottomBrandsParfums from "../components/BottomBrandsParfums";
import { Toggle } from "../components/ui/toggle";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";
import { type News } from "../data/mockData";
import { news } from "../data/mockData";
import { Sun, Moon, ChevronUp, SearchIcon, Car } from "lucide-react";
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
  const navigate = useNavigate();

  const newReleases = perfumes.filter((p) => p.year >= 2020).slice(0, 5);

  return (
    <>
      <main className="relative flex-1 w-full max-w-7xl mx-auto px-4 py-8 bg-white/40  backdrop-blur-sm rounded-lg shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Coluna Esquerda: Notícias/Artigos */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Card Artigo 1 */}
            <Card className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row relative group cursor-pointer">
              <div className="md:w-[45%] relative aspect-square md:aspect-auto bg-gray-100 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800"
                  alt="Roja Parfums"
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                />

                {/* Efeito de Brilho (Shine Effect) da imagem do Frangrantica */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000 ease-out pointer-events-none z-10"></div>

                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider z-20">
                  Avaliação de Fragrâncias
                </div>
              </div>
              <div className="p-8 md:w-[55%] flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                  Roja Haute Luxe de Roja Dove: Um Neo Chypré Clássico
                </h2>
                <p className="text-gray-500 mb-8 text-sm">
                  Qual é o cheiro de um perfume de £2.500,00?!
                </p>
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
                      alt="Rouu Abd El-Latif"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      Rouu Abd El-Latif
                    </p>
                    <p className="text-xs text-gray-400">4 hours ago</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Card Artigo 2 */}
            <Card className="bg-red-950 rounded-xl shadow-sm overflow-hidden h-[320px] relative group cursor-pointer border border-gray-100/20">
              <img
                src="https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80&w=1200"
                alt="Splash"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                <div className="bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider w-fit mb-3">
                  Novidades
                </div>
                <h2 className="text-2xl font-bold text-white mb-2 leading-tight">
                  Novos Lançamentos Incríveis
                </h2>
              </div>
            </Card>

            <div className="flex grid-cols-2 gap-6">
              {/* Card Artigo 3 */}
              {news.slice(0, 1).map((newsItem) => (
                <Card
                  key={newsItem.id}
                  className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 cursor-pointer group overflow-hidden"
                >
                  <img
                    src={newsItem.image}
                    alt={newsItem.title}
                    className="w-full h-fit object-cover rounded-xl transition-all duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000 ease-out pointer-events-none z-10"></div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {newsItem.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {newsItem.subtitle}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {newsItem.content.substring(0, 250)}...
                    </p>
                  </div>
                </Card>
              ))}
              {/* Card Artigo 4 */}
              {news.slice(2, 3).map((newsItem) => (
                <Card
                  key={newsItem.id}
                  className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 cursor-pointer group overflow-hidden"
                >
                  <img
                    src={newsItem.image}
                    alt={newsItem.title}
                    className="w-full h-fit object-cover rounded-xl transition-all duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000 ease-out pointer-events-none z-10"></div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {newsItem.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {newsItem.subtitle}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {newsItem.content.substring(0, 250)}...
                    </p>
                  </div>
                </Card>
              ))}
            </div>
            <div className="flex w-fit h-fit gap-6">
              {news.slice(1, 2).map((newsItem) => (
                <Card
                  key={newsItem.id}
                  className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 cursor-pointer group overflow-hidden"
                >
                  <img
                    src={newsItem.image}
                    alt={newsItem.title}
                    className="w-full h-fit object-cover rounded-lg transition-all duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000 ease-out pointer-events-none z-10"></div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {newsItem.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {newsItem.subtitle}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {newsItem.content.substring(0, 250)}...
                    </p>
                  </div>
                </Card>
              ))}
            </div>
            {/* Novos Perfumes */}
            <Card className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 border-l-4 border-teal-600 pl-3">
                Novos Perfumes
              </h2>
              <div className="flex gap-4 overflow-x-auto scroll-smooth pb-2">
                {perfumes
                  .sort((a, b) => b.year - a.year)
                  .map((perfume) => (
                    <div key={perfume.id} className="flex-shrink-0">
                      <Card
                        className="bg-gray-50 rounded-lg overflow-hidden p-2 hover:shadow-lg transition-all duration-300 cursor-pointer w-32"
                        onClick={() => navigate(`/perfume/${perfume.id}`)}
                      >
                        <img
                          src={perfume.image}
                          alt={perfume.name}
                          className="w-full h-40 object-cover rounded-md mb-2 hover:scale-105 transition-transform duration-300"
                        />
                        <p className="text-sm font-bold text-gray-900 truncate">
                          {perfume.name}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {perfume.brand}
                        </p>
                        <p className="text-xs text-teal-600 font-semibold mt-1">
                          R$ {perfume.price}
                        </p>
                      </Card>
                    </div>
                  ))}
              </div>
            </Card>
          </div>

          {/* Coluna Direita: Sidebar */}
          <SidebarResenhasPerfumes />
        </div>
        <BottomBrandsParfums />
      </main>
    </>
  );
}
