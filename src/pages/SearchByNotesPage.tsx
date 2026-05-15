import { useState, useMemo } from "react";
import { Link } from "react-router";
import { Search, X, ChevronRight, Beaker } from "lucide-react";
import { Input } from "../components/ui/input";
import { perfumes } from "../data/mockData";

type NoteFamily = {
  id: string;
  name: string;
  icon: string;
  color: string;
  bgColor: string;
  description: string;
  notes: string[];
};

const genderColor: Record<string, string> = {
  Masculino: "text-blue-700 bg-blue-100",
  Feminino: "text-pink-700 bg-pink-100",
  Unissex: "text-teal-700 bg-teal-100",
};

const BASE_FAMILIES: NoteFamily[] = [
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

export default function SearchByNotesPage() {
  const [selectedNotes, setSelectedNotes] = useState<string[]>([]);
  const [activeFamily, setActiveFamily] = useState<string | null>(null);
  const [noteQuery, setNoteQuery] = useState("");

  const noteFamilies = useMemo(() => {
    const families = [...BASE_FAMILIES];
    const assignedNotes = new Set(families.flatMap(f => f.notes));
    const allExistingNotes = new Set<string>();
    
    perfumes.forEach(p => {
      [...p.topNotes, ...p.heartNotes, ...p.baseNotes].forEach(n => allExistingNotes.add(n));
    });

    const unassigned = Array.from(allExistingNotes).filter(n => !assignedNotes.has(n));
    
    if (unassigned.length > 0) {
      families.push({
        id: 'other',
        name: 'Outros',
        icon: '✨',
        color: '#71717a',
        bgColor: '#e4e4e7',
        description: 'Notas diversas e aromáticos sintéticos',
        notes: unassigned.sort()
      });
    }

    return families;
  }, []);

  const currentFamily = useMemo(
    () => noteFamilies.find((f) => f.id === activeFamily),
    [noteFamilies, activeFamily]
  );

  const filteredNotes = useMemo(() => {
    if (!currentFamily) return [];
    if (!noteQuery.trim()) return currentFamily.notes;
    return currentFamily.notes.filter((n) =>
      n.toLowerCase().includes(noteQuery.toLowerCase())
    );
  }, [currentFamily, noteQuery]);

  const toggleNote = (note: string) => {
    setSelectedNotes((prev) =>
      prev.includes(note) ? prev.filter((n) => n !== note) : [...prev, note]
    );
  };

  const clearNotes = () => {
    setSelectedNotes([]);
  };

  const matchingPerfumes = useMemo(() => {
    if (selectedNotes.length === 0) return [];
    
    return perfumes.filter((perfume) => {
      const allNotes = [
        ...perfume.topNotes,
        ...perfume.heartNotes,
        ...perfume.baseNotes,
      ].map(n => n.toLowerCase());

      return selectedNotes.every((selected) =>
        allNotes.includes(selected.toLowerCase())
      );
    });
  }, [selectedNotes]);

  return (
    <main className="relative w-full max-w-7xl mx-auto px-4 py-8 bg-white/40 backdrop-blur-sm rounded-lg shadow-sm min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-6">

        {/* Selected notes pill bar */}
        {selectedNotes.length > 0 && (
          <div className="bg-white border border-teal-200 rounded-xl p-4 mb-5 flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-gray-700 mr-1">Notas selecionadas:</span>
            {selectedNotes.map(n => (
              <button
                key={n}
                onClick={() => toggleNote(n)}
                className="flex items-center gap-1 bg-teal-100 text-teal-800 text-xs px-3 py-1.5 rounded-full hover:bg-teal-200 transition-colors font-medium"
              >
                {n} <X className="w-3 h-3" />
              </button>
            ))}
            <button
              onClick={clearNotes}
              className="text-xs text-red-500 hover:text-red-700 ml-auto underline"
            >
              Limpar tudo
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Family & Notes selector */}
          <div className="lg:col-span-2 space-y-4">
            {/* Family pills */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <h2 className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">
                Famílias Olfativas
              </h2>
              <div className="flex flex-wrap gap-2">
                {noteFamilies.map(family => (
                  <button
                    key={family.id}
                    onClick={() => setActiveFamily(activeFamily === family.id ? null : family.id)}
                    style={{
                      backgroundColor: activeFamily === family.id ? family.color : family.bgColor,
                      color: activeFamily === family.id ? '#fff' : family.color,
                      borderColor: family.color,
                    }}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold border transition-all hover:opacity-90"
                  >
                    <span>{family.icon}</span>
                    <span>{family.name}</span>
                    <span className="text-xs opacity-75">({family.notes.length})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Notes grid for selected family */}
            {currentFamily ? (
              <div className="bg-white rounded-xl border border-gray-200 p-4">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <span style={{ color: currentFamily.color }}>{currentFamily.icon}</span>
                    Notas {currentFamily.name}
                  </h2>
                  <button
                    onClick={() => setActiveFamily(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-gray-500 mb-3">{currentFamily.description}</p>

                {/* Search inside notes */}
                <div className="relative mb-3">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-3.5 h-3.5" />
                  <Input
                    value={noteQuery}
                    onChange={e => setNoteQuery(e.target.value)}
                    placeholder={`Buscar em ${currentFamily.name.toLowerCase()}...`}
                    className="pl-8 h-8 text-xs"
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {filteredNotes.map(note => {
                    const isSelected = selectedNotes.includes(note);
                    return (
                      <button
                        key={note}
                        onClick={() => toggleNote(note)}
                        style={isSelected ? {
                          backgroundColor: currentFamily.color,
                          color: '#fff',
                          borderColor: currentFamily.color,
                        } : {
                          backgroundColor: currentFamily.bgColor,
                          color: currentFamily.color,
                          borderColor: `${currentFamily.color}40`,
                        }}
                        className="px-3 py-1.5 rounded-full text-xs font-medium border transition-all hover:opacity-80"
                      >
                        {note}
                        {isSelected && <span className="ml-1">✓</span>}
                      </button>
                    );
                  })}
                  {filteredNotes.length === 0 && (
                    <p className="text-sm text-gray-400 py-4">Nenhuma nota encontrada</p>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl border border-dashed border-gray-300 p-8 text-center">
                <Beaker className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500 font-medium">Selecione uma família olfativa acima</p>
                <p className="text-gray-400 text-sm mt-1">para ver e escolher suas notas</p>
              </div>
            )}
          </div>

          {/* Right: Matching perfumes */}
          <div>
            <div className="bg-white rounded-xl border border-gray-200 p-4 sticky top-24">
              <h2 className="text-sm font-bold text-gray-700 mb-1 flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-teal-600" />
                Perfumes Encontrados
              </h2>
              {selectedNotes.length === 0 ? (
                <div className="py-8 text-center">
                  <p className="text-sm text-gray-400">Selecione notas para ver perfumes compatíveis</p>
                </div>
              ) : matchingPerfumes.length === 0 ? (
                <div className="py-8 text-center">
                  <p className="text-sm text-gray-500 font-medium">Nenhum perfume encontrado</p>
                  <p className="text-xs text-gray-400 mt-1">com essas notas</p>
                </div>
              ) : (
                <div className="space-y-3 mt-3">
                  <p className="text-xs text-gray-500">
                    <span className="font-bold text-teal-600">{matchingPerfumes.length}</span> perfume{matchingPerfumes.length !== 1 ? 's' : ''} encontrado{matchingPerfumes.length !== 1 ? 's' : ''}
                  </p>
                  {matchingPerfumes.map(p => {
                    const allNotes = [...p.topNotes, ...p.heartNotes, ...p.baseNotes];
                    const matchCount = selectedNotes.filter(n =>
                      allNotes.some(pn => pn.toLowerCase().includes(n.toLowerCase()))
                    ).length;
                    return (
                      <Link
                        key={p.id}
                        to={`/perfume/${p.id}`}
                        className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-teal-50 group transition-colors border border-transparent hover:border-teal-200"
                      >
                        <div className="w-12 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                          <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-gray-900 group-hover:text-teal-600 line-clamp-1">
                            {p.name}
                          </h4>
                          <p className="text-xs text-gray-500">{p.brand}</p>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium mt-1 inline-block ${genderColor[p.gender]}`}>
                            {p.gender}
                          </span>
                          <p className="text-xs text-teal-600 mt-1 font-medium">
                            {matchCount} nota{matchCount !== 1 ? 's' : ''} em comum
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Full note reference table */}
        <div className="mt-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Referência Completa de Notas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {noteFamilies.map(family => (
              <div
                key={family.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  (family.id === activeFamily ? setActiveFamily(null) : setActiveFamily(family.id));
                }}
              >
                <div
                  className="px-4 py-3 flex items-center gap-2"
                  style={{ backgroundColor: family.bgColor }}
                >
                  <span className="text-xl">{family.icon}</span>
                  <span className="font-bold text-sm" style={{ color: family.color }}>{family.name}</span>
                  <span className="ml-auto text-xs font-medium" style={{ color: family.color }}>
                    {family.notes.length} notas
                  </span>
                </div>
                <div className="p-3 flex flex-wrap gap-1.5">
                  {family.notes.slice(0, 8).map(note => (
                    <button
                      key={note}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveFamily(family.id);
                        toggleNote(note);
                      }}
                      className="text-xs px-2 py-1 rounded-full border transition-all hover:opacity-80"
                      style={{
                        backgroundColor: selectedNotes.includes(note) ? family.color : family.bgColor,
                        color: selectedNotes.includes(note) ? '#fff' : family.color,
                        borderColor: `${family.color}60`,
                      }}
                    >
                      {note}
                    </button>
                  ))}
                  {family.notes.length > 8 && (
                    <button
                      onClick={() => setActiveFamily(family.id)}
                      className="text-xs px-2 py-1 rounded-full text-gray-500 hover:text-gray-700"
                    >
                      +{family.notes.length - 8} mais
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
