import { useSearchParams, Link, useNavigate } from "react-router";
import { perfumes } from "../data/mockData";
import { Button } from "../components/ui/button";
import { ArrowLeft, Kanban, LayoutGrid, List, Search } from "lucide-react";
import { Card } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";
import { brands } from "../data/mockData";
import { Input } from "../components/ui/input";
import { useMemo, useState } from "react";
import BottomBrandsParfums from "../components/BottomBrandsParfums";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import SidebarResenhasPerfumes from "../components/SidebarResenhasPerfumes";
export default function SearchDesignersPage() {
  const alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("todos");
  const filteredBrandsByLetter = useMemo(() => {
    return brands.filter((brand) => brand.name.startsWith(selectedLetter));
  }, [selectedLetter]);
  const filteredBrandsByLetterAndCountry = useMemo(() => {
    if (selectedCountry === "todos") {
      return filteredBrandsByLetter;
    }
    return filteredBrandsByLetter.filter(
      (brand) => brand.country === selectedCountry,
    );
  }, [filteredBrandsByLetter, selectedCountry]);
  const filteredBrandsByLetterAndCountryAndQuery = useMemo(() => {
    if (query !== "") {
      return filteredBrandsByLetterAndCountry.filter((brand) =>
        brand.name.toLowerCase().includes(query.toLowerCase()),
      );
    }
    return filteredBrandsByLetterAndCountry;
  }, [filteredBrandsByLetterAndCountry, query]);

  return (
    <>
      <main className="relative flex-1 w-full max-w-7xl mx-auto px-4 py-8 bg-white/40 backdrop-blur-sm rounded-lg shadow-sm">
        <div className="flex gap-6">
          <div className="flex-2">
            <div className="flex flex-wrap gap-1 mb-6 justify-center">
              {alfabet.map((letter) => (
                <Button
                  key={letter}
                  className={`w-10 h-10 p-0 text-lg bg-transparent hover:bg-transparent font-bold ${selectedLetter === letter ? "text-teal-400" : "text-gray-800 hover:text-teal-400"}`}
                  onClick={() => setSelectedLetter(selectedLetter === letter ? "" : letter)}
                >
                  {letter}
                </Button>
              ))}
            </div>
            <div className="flex justify-between items-center gap-4 mb-6">
              <div className="w-full flex items-center relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <Input
                  placeholder="Buscar designers..."
                  className="pl-10"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Ver Designers do País" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem key="todos" value="todos">
                      Todos os Países
                    </SelectItem>
                  {Array.from(
                    new Set(brands.map((brand) => brand.country)),
                  ).map((country) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBrandsByLetterAndCountryAndQuery.length === 0 ? (
                <p className="text-center col-span-full">Nenhum designer encontrado</p>
              ) : (
                filteredBrandsByLetterAndCountryAndQuery.map((brand) => (
                  <Card
                    key={brand.id}
                    className="border border-gray-200 hover:border-teal-400 transition-all duration-300 p-2 rounded-lg cursor-pointer"
                    onClick={() => navigate(`/marca/${brand.id}`)}
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={brand.image}
                        alt={brand.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div>
                        <p className="font-bold text-gray-800">{brand.name}</p>
                        <p className="text-sm text-gray-600">{brand.country}</p>
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </div>
          </div>
          <div className="flex-1">
            {/* Coluna Direita: Sidebar */}
            <SidebarResenhasPerfumes />
          </div>
        </div>
        <BottomBrandsParfums />
      </main>
    </>
  );
}
