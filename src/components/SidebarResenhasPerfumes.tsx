import { perfumes, perfumists, brands, reviews } from "../data/mockData";
import { useNavigate } from "react-router";
import { Card } from "./ui/card";

export default function SidebarResenhasPerfumes() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-6">
            {/* Enciclopédia de Perfumes */}
            <Card className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-6">
              <p className="text-lg font-bold text-gray-800 mb-1">
                Enciclopédia de Perfumes
              </p>
              <div className="h-0.5 w-full bg-gray-200 rounded-full mb-5">
                <div className="h-full w-12 bg-gray-800 rounded-full"></div>
              </div>
              <div className="flex flex-col gap-4 text-sm text-gray-600">
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <p
                    onClick={() => navigate("/perfumes")}
                    className="hover:text-teal-600 cursor-pointer"
                  >
                    Perfumes
                  </p>
                  <p className="font-bold text-gray-900">{perfumes.length}</p>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <p
                    onClick={() => navigate("/perfumistas")}
                    className="hover:text-teal-600 cursor-pointer"
                  >
                    Perfumistas
                  </p>
                  <p className="font-bold text-gray-900">{perfumists.length}</p>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <p 
                  onClick={() => navigate("/resenhas")}
                  className="hover:text-teal-600 cursor-pointer">Resenhas</p>
                  <p className="font-bold text-gray-900">{reviews.length}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p
                    onClick={() => navigate("/marcas")}
                    className="hover:text-teal-600 cursor-pointer"
                  >
                    Marcas
                  </p>
                  <p className="font-bold text-gray-900">{brands.length}</p>
                </div>
              </div>
            </Card>

            {/* Resenhas Mais Recentes */}
            <Card className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-6">
              <p className="text-lg font-bold text-gray-800 mb-1">
                Resenhas Mais Recentes
              </p>
              <div className="h-0.5 w-full bg-gray-200 rounded-full mb-5">
                <div className="h-full w-12 bg-gray-800 rounded-full"></div>
              </div>

              <div className="flex flex-col gap-4">
                {/* Mock Item 1 */}
                <div className="flex items-center gap-4 group cursor-pointer border-b border-gray-100 pb-4">
                  <div className="w-14 h-14 bg-gray-50 rounded-lg overflow-hidden shrink-0 flex items-center justify-center p-1">
                    <img
                      src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=150"
                      alt="We Pink"
                      className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-teal-700 truncate">
                      We Pink
                    </p>
                    <p className="text-xs text-teal-600/80 truncate">Liberté</p>
                    <div className="flex items-center justify-end gap-1 mt-1">
                      <span className="text-[10px] text-gray-400">
                        por vilasc
                      </span>
                      <div className="w-3 h-3 rounded-full bg-gray-200 overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=50"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mock Item 2 */}
                <div className="flex items-center gap-4 group cursor-pointer border-b border-gray-100 pb-4">
                  <div className="w-14 h-14 bg-gray-50 rounded-lg overflow-hidden shrink-0 flex items-center justify-center p-1">
                    <img
                      src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=150"
                      alt="Dior"
                      className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-teal-700 truncate">
                      Dior
                    </p>
                    <p className="text-xs text-teal-600/80 truncate">
                      Sauvage Eau de Parfum
                    </p>
                    <div className="flex items-center justify-end gap-1 mt-1">
                      <span className="text-[10px] text-gray-400">
                        por Julio3387
                      </span>
                      <div className="w-3 h-3 rounded-full bg-gray-200 overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=50"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mock Item 3 */}
                <div className="flex items-center gap-4 group cursor-pointer border-b border-gray-100 pb-4">
                  <div className="w-14 h-14 bg-gray-50 rounded-lg overflow-hidden shrink-0 flex items-center justify-center p-1">
                    <img
                      src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=150"
                      alt="Natura"
                      className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-teal-700 truncate">
                      Natura
                    </p>
                    <p className="text-xs text-teal-600/80 truncate">
                      Frescor Madeira em Flor
                    </p>
                    <div className="flex items-center justify-end gap-1 mt-1">
                      <span className="text-[10px] text-gray-400">
                        por Angel Boy
                      </span>
                      <div className="w-3 h-3 rounded-full bg-gray-200 overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=50"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mock Item 4 */}
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-14 h-14 bg-gray-50 rounded-lg overflow-hidden shrink-0 flex items-center justify-center p-1">
                    <img
                      src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=150"
                      alt="Phebo"
                      className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-teal-700 truncate">
                      Phebo
                    </p>
                    <p className="text-xs text-teal-600/80 truncate">
                      Limão Siciliano
                    </p>
                    <div className="flex items-center justify-end gap-1 mt-1">
                      <span className="text-[10px] text-gray-400">
                        por lucasklauck
                      </span>
                      <div className="w-3 h-3 rounded-full bg-gray-200 overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=50"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
    )
}