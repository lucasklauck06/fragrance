import { useSearchParams, Link, useNavigate } from "react-router";
import { perfumes } from "../data/mockData";
import { Button } from "../components/ui/button";
import {
  ArrowLeft,
  ArrowUp,
  ChevronDown,
  ChevronUp,
  Kanban,
  LayoutGrid,
  List,
  Search,
} from "lucide-react";
import { Card } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";
import { brands } from "../data/mockData";
import { Input } from "../components/ui/input";
import { useState, useMemo } from "react";
import SidebarResenhasPerfumes from "../components/SidebarResenhasPerfumes";
export default function SearchPage() {
  const [designersVisible, setDesignersVisible] = useState(true);
  const [yearVisible, setYearVisible] = useState(true);
  const [accordsVisible, setAccordsVisible] = useState(true);
  const [perfumistsVisible, setPerfumistsVisible] = useState(true);

  // Navigation & View
  const navigate = useNavigate();
  const [showList, setShowList] = useState("Kanban");

  // Filtros
  const [mainSearchQuery, setMainSearchQuery] = useState("");
  const [brandSearchQuery, setBrandSearchQuery] = useState("");
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [yearStart, setYearStart] = useState("");
  const [yearEnd, setYearEnd] = useState("");
  const [accordsQuery, setAccordsQuery] = useState("");
  const [perfumistQuery, setPerfumistQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (mainSearchQuery.trim()) {
      navigate(`/busca?q=${encodeURIComponent(mainSearchQuery)}`);
    }
  };

  const toggleGender = (gender: string, checked: boolean | string) => {
    if (checked) {
      setSelectedGenders((prev) => [...prev, gender]);
    } else {
      setSelectedGenders((prev) => prev.filter((g) => g !== gender));
    }
  };

  const toggleBrand = (brandName: string, checked: boolean | string) => {
    if (checked) {
      setSelectedBrands((prev) => [...prev, brandName]);
    } else {
      setSelectedBrands((prev) => prev.filter((b) => b !== brandName));
    }
  };

  const filteredBrands = useMemo(() => {
    return brands.filter(
      (brand) =>
        brandSearchQuery === "" ||
        brand.name.toLowerCase().includes(brandSearchQuery.toLowerCase()),
    );
  }, [brandSearchQuery]);

  const filteredPerfumes = useMemo(() => {
    return perfumes.filter((perfume) => {
      // 1. Busca Principal
      const q = mainSearchQuery.toLowerCase();
      const matchMain =
        !q ||
        perfume.name.toLowerCase().includes(q) ||
        perfume.brand.toLowerCase().includes(q) ||
        (perfume.perfumist && perfume.perfumist.toLowerCase().includes(q));

      // 2. Gênero
      const matchGender =
        selectedGenders.length === 0 ||
        selectedGenders.includes(perfume.gender.toLowerCase());

      // 3. Designers (Marcas)
      const matchBrand =
        selectedBrands.length === 0 || selectedBrands.includes(perfume.brand);

      // 4. Ano
      const y = perfume.year;
      const matchYearStart = !yearStart || y >= parseInt(yearStart);
      const matchYearEnd = !yearEnd || y <= parseInt(yearEnd);

      // 5. Acordes
      const aQ = accordsQuery.toLowerCase();
      const matchAccord =
        !aQ ||
        (perfume.topNotes &&
          perfume.topNotes.some((n) => n.toLowerCase().includes(aQ))) ||
        (perfume.heartNotes &&
          perfume.heartNotes.some((n) => n.toLowerCase().includes(aQ))) ||
        (perfume.baseNotes &&
          perfume.baseNotes.some((n) => n.toLowerCase().includes(aQ)));

      // 6. Perfumistas
      const pQ = perfumistQuery.toLowerCase();
      const matchPerfumist =
        !pQ ||
        (perfume.perfumist && perfume.perfumist.toLowerCase().includes(pQ));

      return (
        matchMain &&
        matchGender &&
        matchBrand &&
        matchYearStart &&
        matchYearEnd &&
        matchAccord &&
        matchPerfumist
      );
    });
  }, [
    mainSearchQuery,
    selectedGenders,
    selectedBrands,
    yearStart,
    yearEnd,
    accordsQuery,
    perfumistQuery,
  ]);

  return (
    <>
      <main className="relative flex-1 w-full max-w-7xl mx-auto px-4 py-8 bg-white/40  backdrop-blur-sm rounded-lg shadow-sm">
        <div className="flex gap-6">
          <div className="flex-1">
            <div className="flex flex-col gap-2">
              <Card className="p-4 shadow-lg border border-gray-300 hover:border-teal-400 transition-colors duration-200">
                <h2>Gênero</h2>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      className="border border-blue-500 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                      id="masculino"
                      value="masculino"
                      onCheckedChange={(checked) =>
                        toggleGender("masculino", checked)
                      }
                    />
                    <Label className="cursor-pointer" htmlFor="masculino">Masculino</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      className="border border-pink-500 data-[state=checked]:bg-pink-500 data-[state=checked]:border-pink-500"
                      id="feminino"
                      value="feminino"
                      onCheckedChange={(checked) =>
                        toggleGender("feminino", checked)
                      }
                    />
                    <Label className="cursor-pointer" htmlFor="feminino">Feminino</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      className="border border-teal-500 data-[state=checked]:bg-teal-500 data-[state=checked]:border-teal-500"
                      id="unissex"
                      value="unissex"
                      onCheckedChange={(checked) =>
                        toggleGender("unissex", checked)
                      }
                    />
                    <Label className="cursor-pointer" htmlFor="unissex">Unissex</Label>
                  </div>
                </div>
              </Card>
              <Card className="p-4 shadow-lg border border-gray-300 hover:border-teal-400 transition-colors duration-200">
                <div className="flex justify-between">
                  <h3>Designers</h3>
                  <button
                    className=""
                    onClick={() => setDesignersVisible(!designersVisible)}
                  >
                    {designersVisible ? (
                      <ChevronUp className="w-fit h-fit text-teal-600 transition-transform duration-200" />
                    ) : (
                      <ChevronUp className="w-fit h-fit text-gray-400 rotate-180 transition-transform duration-200 hover:text-teal-600" />
                    )}
                  </button>
                </div>
                {designersVisible && (
                  <div className="flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="flex-1 max-w-4xl border border-gray-300 rounded-md"
                    >
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 " />
                        <Input
                          type="search"
                          placeholder="filtrar marcas..."
                          value={brandSearchQuery}
                          onChange={(e) => setBrandSearchQuery(e.target.value)}
                          className="pl-10 pr-4 py-2 w-full"
                        />
                      </div>
                    </form>
                    <div className="flex flex-col gap-2">
                      {filteredBrands.map((brand) => (
                        <div
                          className="flex justify-between items-center gap-2"
                          key={brand.id}
                        >
                          <div className="flex items-center gap-2">
                            <Checkbox
                              className=" data-[state=checked]:bg-teal-500 data-[state=checked]:border-teal-500"
                              id={brand.id}
                              value={brand.id}
                              onCheckedChange={(checked) =>
                                toggleBrand(brand.name, checked)
                              }
                            />
                            <Label
                              htmlFor={brand.id}
                              className="flex justify-center text-md font-semibold cursor-pointer"
                            >
                              {brand.name}
                            </Label>
                          </div>
                          {perfumes.some(
                            (perfume) => perfume.brand === brand.name,
                          ) && (
                              <span className="text-sm text-gray-500">
                                {
                                  perfumes.filter(
                                    (perfume) => perfume.brand === brand.name,
                                  ).length
                                }
                              </span>
                            )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
              <Card className="p-4 shadow-lg border border-gray-300 hover:border-teal-400 transition-colors duration-200">
                <div className="flex justify-between">
                  <h3>Ano</h3>
                  <button
                    className=""
                    onClick={() => setYearVisible(!yearVisible)}
                  >
                    {yearVisible ? (
                      <ChevronUp className="w-fit h-fit text-teal-600 transition-transform duration-200" />
                    ) : (
                      <ChevronUp className="w-fit h-fit text-gray-400 rotate-180 transition-transform duration-200 hover:text-teal-600" />
                    )}
                  </button>
                </div>
                {yearVisible && (
                  <div className="flex gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="flex flex-col w-1/2">
                      <span className="text-sm mb-1">A partir de</span>
                      <Input
                        type="number"
                        placeholder="Ex: 2000"
                        className="w-full"
                        value={yearStart}
                        onChange={(e) => setYearStart(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col w-1/2">
                      <span className="text-sm mb-1">Até</span>
                      <Input
                        type="number"
                        placeholder="Ex: 2024"
                        className="w-full"
                        value={yearEnd}
                        onChange={(e) => setYearEnd(e.target.value)}
                      />
                    </div>
                  </div>
                )}
              </Card>
              <Card className="p-4 shadow-lg border border-gray-300 hover:border-teal-400 transition-colors duration-200">
                <div className="flex justify-between">
                  <h3>Acordes</h3>
                  <button
                    className=""
                    onClick={() => setAccordsVisible(!accordsVisible)}
                  >
                    {accordsVisible ? (
                      <ChevronUp className="w-fit h-fit text-teal-600 transition-transform duration-200" />
                    ) : (
                      <ChevronUp className="w-fit h-fit text-gray-400 rotate-180 transition-transform duration-200 hover:text-teal-600" />
                    )}
                  </button>
                </div>
                {accordsVisible && (
                  <div className="flex gap-2 animate-in fade-in slide-in-from-top-2 duration-300 mt-2">
                    <div className="flex flex-col w-full">
                      <Input
                        type="text"
                        placeholder="Filtrar por notas..."
                        className="w-full"
                        value={accordsQuery}
                        onChange={(e) => setAccordsQuery(e.target.value)}
                      />
                    </div>
                  </div>
                )}
              </Card>
              <Card className="p-4 shadow-lg border border-gray-300 hover:border-teal-400 transition-colors duration-200">
                <div className="flex justify-between">
                  <h3>Perfumistas</h3>
                  <button
                    className=""
                    onClick={() => setPerfumistsVisible(!perfumistsVisible)}
                  >
                    {perfumistsVisible ? (
                      <ChevronUp className="w-fit h-fit text-teal-600 transition-transform duration-200" />
                    ) : (
                      <ChevronUp className="w-fit h-fit text-gray-400 rotate-180 transition-transform duration-200 hover:text-teal-600" />
                    )}
                  </button>
                </div>
                {perfumistsVisible && (
                  <div className="flex gap-2 animate-in fade-in slide-in-from-top-2 duration-300 mt-2">
                    <div className="flex flex-col w-full">
                      <Input
                        type="text"
                        placeholder="Nome do perfumista..."
                        className="w-full"
                        value={perfumistQuery}
                        onChange={(e) => setPerfumistQuery(e.target.value)}
                      />
                    </div>
                  </div>
                )}
              </Card>
            </div>
          </div>
          <div className="flex-2 bg-white rounded-lg p-2">
            <div className="flex flex-col">
              <div className="relative border border-gray-300 rounded-md hover:border-teal-400 focus-within:border-teal-400 focus-within:ring-1 focus-within:ring-teal-400 transition-all duration-200">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 " />
                <Input
                  type="search"
                  placeholder="Buscar perfumes, marcas, perfumistas..."
                  value={mainSearchQuery}
                  onChange={(e) => setMainSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border-none shadow-none focus-visible:ring-0"
                />
              </div>
              <div className="flex justify-between items-center mt-4 bg-white/90 backdrop-blur-sm p-2 rounded-md shadow-sm border border-gray-300">
                <span>Resultados</span>
                <div className="gap-4">
                  <Button
                    onClick={() => setShowList("Kanban")}
                    className={`bg-transparent text-black hover:bg-gray-200 ${showList === "Kanban" ? "text-teal-500" : ""}`}
                  >
                    <LayoutGrid className="w-5 h-5" />
                  </Button>
                  <Button
                    onClick={() => setShowList("Lista")}
                    className={`bg-transparent text-black hover:bg-gray-200 ${showList === "Lista" ? "text-teal-500" : ""}`}
                  >
                    <List className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              {showList === "Lista" ? (
                <div className="flex flex-col gap-4 p-2 bg-white">
                  {filteredPerfumes.length === 0 ? (
                    <div className="text-center text-gray-500 py-8">
                      Nenhum resultado encontrado.
                    </div>
                  ) : (
                    filteredPerfumes.map((perfume) => (
                      <div
                        key={perfume.id}
                        className="border-b border-teal-500 bg-white w-full pb-4 flex gap-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200 rounded-lg p-2"
                      >
                        <img
                          src={perfume.image}
                          alt={perfume.name}
                          className="w-36 h-48 object-cover mix-blend-multiply rounded-lg"
                        />
                        <div className="flex flex-col flex-1 justify-between">
                          <div>
                            <div className="flex justify-between w-full">
                              <p>{perfume.name}</p>
                              <p>{perfume.year}</p>
                            </div>
                            <p>{perfume.brand}</p>
                          </div>
                          <div
                            className={`${perfume.gender === "Masculino" ? "text-blue-700 bg-gradient-to-r from-blue-300 to-transparent" : perfume.gender === "Feminino" ? "text-pink-700 bg-gradient-to-r from-pink-300 to-transparent" : "text-teal-700 bg-gradient-to-r from-teal-300 to-transparent"} rounded-full px-2 py-1 text-xs w-full mt-1 self-start`}
                          >
                            <p className="font-bold">{perfume.gender}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              ) : (
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPerfumes.length === 0 ? (
                    <div className="col-span-full text-center text-gray-500 py-8">
                      Nenhum resultado encontrado.
                    </div>
                  ) : (
                    filteredPerfumes.map((perfume) => (
                      <Card key={perfume.id} className="p-4 border overflow-hidden relative group border-gray-300 hover:border-teal-400 hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
                        onClick={() => navigate(`/perfume/${perfume.id}`)}>
                        <div className="w-full h-40 relative rounded-lg overflow-hidden flex items-center justify-center p-2 ">
                          <img
                            src={perfume.image}
                            alt={perfume.name}
                            className="max-w-full max-h-full object-contain rounded-lg mix-blend-multiply"
                          />
                          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000 ease-out pointer-events-none z-10"></div>
                        </div>
                        <div className="flex flex-col items-center">
                          <p className="mt-2 text-md font-bold text-teal-700">
                            {perfume.name}
                          </p>
                          <p
                            className="text-sm text-gray-600 hover:text-teal-500 cursor-pointer transition-all duration-200"
                            onClick={() => navigate(`/marca/${perfume.id}`)}
                          >
                            {perfume.brand}{" "}
                          </p>
                        </div>
                      </Card>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="flex-1">
            {/* Coluna Direita: Sidebar */}
            <SidebarResenhasPerfumes />
          </div>
        </div>
      </main>
    </>
  );
}
