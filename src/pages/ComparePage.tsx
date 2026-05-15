import { useState } from "react";
import { perfumes, type Perfume } from "../data/mockData";
import { Plus, X, Search, Check, AlertCircle } from "lucide-react";

export default function ComparePage() {
  const [selectedPerfumes, setSelectedPerfumes] = useState<Perfume[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const filteredPerfumes = perfumes.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (perfume: Perfume) => {
    if (selectedPerfumes.length < 3 && !selectedPerfumes.some(p => p.id === perfume.id)) {
      setSelectedPerfumes([...selectedPerfumes, perfume]);
    }
    setIsSearchOpen(false);
    setSearchTerm("");
  };

  const handleRemove = (id: string) => {
    setSelectedPerfumes(selectedPerfumes.filter(p => p.id !== id));
  };

  return (
    <>
    <div className="relative flex-1 w-full max-w-7xl mx-auto px-4 py-8 bg-white/40  backdrop-blur-sm rounded-lg shadow-sm">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Comparar Fragrâncias</h1>
          <p className="mt-2 text-gray-600">
            Selecione até 3 fragrâncias para comparar suas notas e características lado a lado.
          </p>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 overflow-x-auto">
        <div className="min-w-[800px] p-6">
          <div className="grid grid-cols-4 gap-6">
            
            {/* Row Header */}
            <div className="col-span-1 flex flex-col gap-8 pt-[280px] font-medium text-gray-500 text-sm">
              <div className="h-10 flex items-center border-b border-gray-100">Gênero</div>
              <div className="h-10 flex items-center border-b border-gray-100">Ano de Lançamento</div>
              <div className="h-10 flex items-center border-b border-gray-100">Preço Estimado</div>
              <div className="flex-1 border-b border-gray-100 pt-2">Notas de Topo</div>
              <div className="flex-1 border-b border-gray-100 pt-2">Notas de Coração</div>
              <div className="flex-1 border-b border-gray-100 pt-2">Notas de Fundo</div>
            </div>

            {/* Selected Perfumes Columns */}
            {[0, 1, 2].map((index) => {
              const perfume = selectedPerfumes[index];
              return (
                <div key={index} className="col-span-1 relative flex flex-col gap-8">
                  {perfume ? (
                    <>
                      <button 
                        onClick={() => handleRemove(perfume.id)}
                        className="absolute top-0 right-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center hover:bg-red-200 transition-colors z-10"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      
                      <div className="h-64 flex flex-col items-center justify-end pb-4 border-b-2 border-gray-900 text-center">
                        <img src={perfume.image} alt={perfume.name} className="h-40 object-contain drop-shadow-md mb-4" />
                        <h3 className="font-bold text-lg text-gray-900 line-clamp-1">{perfume.name}</h3>
                        <p className="text-sm text-gray-500">{perfume.brand}</p>
                      </div>

                      <div className="h-10 flex items-center justify-center border-b border-gray-100 font-semibold text-gray-800">
                        {perfume.gender}
                      </div>
                      <div className="h-10 flex items-center justify-center border-b border-gray-100 font-semibold text-gray-800">
                        {perfume.year}
                      </div>
                      <div className="h-10 flex items-center justify-center border-b border-gray-100 font-semibold text-teal-600">
                        R$ {perfume.price}
                      </div>
                      
                      <div className="flex-1 border-b border-gray-100 pt-2">
                        <div className="flex flex-wrap gap-2 justify-center">
                          {perfume.topNotes.map(note => (
                            <span key={note} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md">{note}</span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex-1 border-b border-gray-100 pt-2">
                        <div className="flex flex-wrap gap-2 justify-center">
                          {perfume.heartNotes.map(note => (
                            <span key={note} className="px-2 py-1 bg-pink-50 text-pink-700 text-xs rounded-md">{note}</span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex-1 border-b border-gray-100 pt-2">
                        <div className="flex flex-wrap gap-2 justify-center">
                          {perfume.baseNotes.map(note => (
                            <span key={note} className="px-2 py-1 bg-amber-50 text-amber-700 text-xs rounded-md">{note}</span>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="h-full border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center bg-gray-50/50 min-h-[600px]">
                      {isSearchOpen && selectedPerfumes.length === index ? (
                        <div className="w-full p-4 h-full flex flex-col">
                          <div className="relative mb-4 mt-2">
                            <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                            <input 
                              type="text" 
                              autoFocus
                              placeholder="Buscar..." 
                              value={searchTerm}
                              onChange={e => setSearchTerm(e.target.value)}
                              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                            />
                            <button onClick={() => setIsSearchOpen(false)} className="absolute right-3 top-3 text-gray-400 hover:text-gray-600">
                              <X className="w-5 h-5" />
                            </button>
                          </div>
                          
                          <div className="flex-1 overflow-y-auto pr-2 space-y-2 max-h-[400px]">
                            {filteredPerfumes.length === 0 ? (
                              <p className="text-center text-gray-500 text-sm mt-8">Nenhum perfume encontrado.</p>
                            ) : (
                              filteredPerfumes.map(p => (
                                <button 
                                  key={p.id}
                                  disabled={selectedPerfumes.some(sp => sp.id === p.id)}
                                  onClick={() => handleSelect(p)}
                                  className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-sm transition-all text-left disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                  <img src={p.image} alt={p.name} className="w-10 h-10 object-contain bg-white rounded" />
                                  <div className="flex-1">
                                    <h4 className="font-semibold text-sm text-gray-900 line-clamp-1">{p.name}</h4>
                                    <p className="text-xs text-gray-500">{p.brand}</p>
                                  </div>
                                  {selectedPerfumes.some(sp => sp.id === p.id) && <Check className="w-4 h-4 text-green-500" />}
                                </button>
                              ))
                            )}
                          </div>
                        </div>
                      ) : (
                        <button 
                          onClick={() => {
                            if (selectedPerfumes.length === index) setIsSearchOpen(true);
                          }}
                          disabled={selectedPerfumes.length !== index}
                          className="flex flex-col items-center gap-4 text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-30 disabled:cursor-not-allowed group"
                        >
                          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 group-hover:scale-105 transition-all">
                            <Plus className="w-8 h-8" />
                          </div>
                          <span className="font-medium text-sm">
                            {selectedPerfumes.length === index ? "Adicionar Perfume" : "Selecione o anterior"}
                          </span>
                        </button>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {selectedPerfumes.length === 0 && (
        <div className="mt-8 p-6 bg-blue-50 text-blue-800 rounded-xl flex gap-4 items-start">
          <AlertCircle className="w-6 h-6 shrink-0" />
          <div>
            <h4 className="font-semibold mb-1">Como usar a comparação</h4>
            <p className="text-sm opacity-90">
              A ferramenta de comparação permite colocar até 3 perfumes lado a lado. Clique no botão "+" no primeiro espaço vazio para buscar e adicionar a primeira fragrância. 
              Você poderá comparar características essenciais como gêneros recomendados, notas olfativas de todas as fases da evolução do perfume e preços.
            </p>
          </div>
        </div>
      )}
    </div>
    </>
  );
}
