import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router";
import SidebarResenhasPerfumes from "../components/SidebarResenhasPerfumes";
import { Input } from "../components/ui/input";

const BASE_FAMILIES = [
  { id: 'citrus', name: 'Cítricos', icon: '🍋', color: '#eab308', bgColor: '#fef08a', description: 'Frescos e energizantes', notes: ['Bergamota', 'Limão', 'Toranja', 'Mandarina', 'Tangerina', 'Laranja', 'Grapefruit', 'Cidra', 'Limão Siciliano', 'Bérga'] },
  { id: 'fruits', name: 'Frutas', icon: '🍒', color: '#ef4444', bgColor: '#fecaca', description: 'Doces e suculentas', notes: ['Maçã', 'Pera', 'Frutas Vermelhas', 'Côco', 'Maçã Verde'] },
  { id: 'flowers', name: 'Flores', icon: '🌸', color: '#ec4899', bgColor: '#fbcfe8', description: 'Delicadas e românticas', notes: ['Rosa', 'Jasmim', 'Lavanda', 'Lírio', 'Flor de Laranjeira', 'Orquídea', 'Peônia', 'Tuberosa', 'Ylang-ylang', 'Gerânio', 'Gardênia', 'Acórdão de Flores', 'Madressilva'] },
  { id: 'woods', name: 'Madeiras', icon: '🪵', color: '#8b5cf6', bgColor: '#ddd6fe', description: 'Secas e elegantes', notes: ['Cedro', 'Sândalo', 'Vetiver', 'Patchouli', 'Madeira de Agar', 'Oud', 'Palisandro', 'Madeira de Cedro'] },
  { id: 'spices', name: 'Especiarias', icon: '🌶️', color: '#f97316', bgColor: '#ffedd5', description: 'Picantes e exóticas', notes: ['Canela', 'Cardamomo', 'Noz-moscada', 'Pimenta', 'Gengibre', 'Cravo', 'Anis', 'Pimenta-rosa', 'Alecrim', 'Sálvia', 'Especiarias'] },
  { id: 'resins', name: 'Resinas & Doces', icon: '🍯', color: '#d97706', bgColor: '#fde68a', description: 'Quentes e envolventes', notes: ['Âmbar', 'Baunilha', 'Incenso', 'Fava Tonka', 'Tonka', 'Baunilha Tahitiana', 'Café', 'Amêndoa', 'Sangue de Dragão'] },
  { id: 'earthy', name: 'Terrosos & Verdes', icon: '🌿', color: '#22c55e', bgColor: '#bbf7d0', description: 'Frescos e naturais', notes: ['Musgo', 'Musgo de Carvalho', 'Hortelã', 'Eucalipto', 'Cipreste'] },
  { id: 'musk', name: 'Almíscares', icon: '🐾', color: '#64748b', bgColor: '#e2e8f0', description: 'Sensuais e pele', notes: ['Almíscar', 'Couro', 'Âmbar Cinzento', 'Lã', 'Cashmere'] },
  { id: 'aquatic', name: 'Aquáticos', icon: '💧', color: '#06b6d4', bgColor: '#cffafe', description: 'Marinhos e salgados', notes: ['Aquático', 'Sal Marinho'] },
];

export default function NotesPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredFamilies = useMemo(() => {
        if (!searchQuery.trim()) return BASE_FAMILIES;
        
        const lowerQuery = searchQuery.toLowerCase();
        
        return BASE_FAMILIES.map(family => {
            const matchesFamily = family.name.toLowerCase().includes(lowerQuery);
            if (matchesFamily) return family;
            
            const matchingNotes = family.notes.filter(n => n.toLowerCase().includes(lowerQuery));
            if (matchingNotes.length > 0) {
                return { ...family, notes: matchingNotes };
            }
            return null;
        }).filter(Boolean) as typeof BASE_FAMILIES;
    }, [searchQuery]);

    return (
        <main className="relative flex-1 w-full max-w-7xl mx-auto px-4 py-8 bg-white/40 backdrop-blur-sm rounded-lg shadow-sm">
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Main Content Area */}
                <div className="flex-1 min-w-0">
                    <div className="flex flex-col mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-6 flex justify-center">Notas Olfativas</h1>
                        
                        <div className="relative max-w-md mx-auto w-full">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                                type="search"
                                placeholder="Buscar notas ou grupos (ex: Rosa, Cítricos)..."
                                className="pl-12 pr-4 py-3 h-12 w-full text-base rounded-full shadow-sm border-gray-200 focus:border-teal-500 focus:ring-teal-500 bg-white transition-shadow focus:shadow-md"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Family Navigation Anchors (Only show if no search) */}
                    {!searchQuery && (
                        <div className="mb-10 pb-4 border-b border-gray-200 overflow-x-auto hide-scrollbar">
                            <div className="flex gap-2 min-w-max px-2">
                                {BASE_FAMILIES.map(family => (
                                    <a 
                                        key={`nav-${family.id}`} 
                                        href={`#family-${family.id}`}
                                        className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-sm"
                                        style={{ backgroundColor: family.bgColor, color: family.color }}
                                    >
                                        <span className="text-lg">{family.icon}</span>
                                        {family.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Notes by Family */}
                    <div className="space-y-12">
                        {filteredFamilies.length > 0 ? (
                            filteredFamilies.map(family => (
                                <section key={family.id} id={`family-${family.id}`} className="scroll-mt-28">
                                    <div className="flex items-center gap-3 mb-1">
                                        <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-tight flex items-center gap-2">
                                            <span className="text-3xl" style={{ color: family.color }}>{family.icon}</span>
                                            {family.name}
                                        </h2>
                                    </div>
                                    <p className="text-gray-500 mb-6 ml-11">{family.description}</p>
                                    
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                                        {family.notes.map(note => (
                                            <Link 
                                                to={`/nota/${encodeURIComponent(note)}`} 
                                                state={{ noteName: note, groupName: family.name }}
                                                key={note}
                                                className="group flex flex-col items-center p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all hover:border-teal-300 cursor-pointer text-center h-full"
                                            >
                                                <div 
                                                    className="w-20 h-20 rounded-full mb-3 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform duration-300"
                                                    style={{ backgroundColor: family.bgColor, color: family.color }}
                                                >
                                                    {family.icon}
                                                </div>
                                                <span className="text-sm font-semibold text-gray-800 leading-tight group-hover:text-teal-600 transition-colors">
                                                    {note}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </section>
                            ))
                        ) : (
                            <div className="text-center py-24 bg-white/60 rounded-3xl border border-dashed border-gray-300">
                                <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 mb-1">Nenhuma nota encontrada</h3>
                                <p className="text-gray-500">Tente buscar por um termo diferente.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Sidebar Area */}
                <div className="w-full lg:w-80 flex-shrink-0">
                    <SidebarResenhasPerfumes />
                </div>
            </div>
        </main>
    );
}