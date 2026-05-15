import { Button } from "../components/ui/button";
import { brands } from "../data/mockData";
import { useParams, Link, useNavigate } from "react-router";
import { useState } from "react";
import { Kanban, LayoutGrid, List, Mars, Star, Venus } from "lucide-react";
import { perfumes } from "../data/mockData";
import SidebarResenhasPerfumes from "../components/SidebarResenhasPerfumes";
export default function BrandDetailPage() {
  const { id } = useParams();
  const brand = brands.find((b) => b.id === id);
  const [optionSelected, setOptionSelected] = useState("Novo");
  const [showPerfumesList, setShowPerfumesList] = useState("Lista");
  const [searchTerm, setSearchTerm] = useState("");

  const perfumesFiltrados = perfumes
    .filter((p) => p.brand === brand?.name)
    .filter((p) => {
      if (optionSelected === "Masculino") return p.gender === "Masculino";
      if (optionSelected === "Feminino") return p.gender === "Feminino";
      return true;
    })
    .filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => (optionSelected === "Novo" ? b.year - a.year : 0));

  return (
    <>
      <main className="relative bg-white shadow-md rounded-lg w-full max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-2">
          <div className="flex-2">
            <h1 className="text-3xl font-bold justify-center flex text-gray-800">
              {brand?.name}
            </h1>
            <div className="flex gap-4 mt-4">
              <img
                src={brand?.image}
                alt={brand?.name}
                className="w-full rounded-md object-cover max-h-96"
              />
              <p>{brand?.description}</p>
            </div>
            <div className="flex gap-10 mt-4 border-b border-gray-300">
              <p
                className={`flex gap-2 items-center border-b p-2 ${optionSelected === "Novo" ? "border-teal-600 bg-transparent hover:bg-transparent text-teal-600" : "border-transparent bg-transparent hover:bg-transparent text-gray-500"}`}
                onClick={() => setOptionSelected("Novo")}
              >
                <Star className="w-5 h-5" />
                Novo
              </p>
              <p
                className={`flex gap-2 items-center border-b p-2 ${optionSelected === "Masculino" ? "border-teal-600 bg-transparent hover:bg-transparent text-teal-600" : "border-transparent bg-transparent hover:bg-transparent text-gray-500"}`}
                onClick={() => setOptionSelected("Masculino")}
              >
                <Mars className="w-5 h-5" />
                Masculino
              </p>
              <p
                className={`flex gap-2 items-center border-b p-2 ${optionSelected === "Feminino" ? "border-teal-600 bg-transparent hover:bg-transparent text-teal-600" : "border-transparent bg-transparent hover:bg-transparent text-gray-500"}`}
                onClick={() => setOptionSelected("Feminino")}
              >
                <Venus className="w-5 h-5" />
                Feminino
              </p>
            </div>
            <div className="flex gap-6 items-center mt-6">
              <span>Resultados</span>
              <input
                placeholder="pesquise aqui seu perfume"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              />
              <Button
                className={`bg-transparent border border-white text-black hover:border-teal-600 hover:bg-transparent transition-colors duration-200 ${showPerfumesList === "Kanban" ? "text-teal-600" : ""}`}
                onClick={() => setShowPerfumesList("Kanban")}
              >
                <LayoutGrid className="w-5 h-5" />
              </Button>
              <Button
                className={`bg-transparent border border-white text-black hover:border-teal-600 hover:bg-transparent transition-colors duration-200 ${showPerfumesList === "Lista" ? "text-teal-600" : ""}`}
                onClick={() => setShowPerfumesList("Lista")}
              >
                <List className="w-5 h-5" />
              </Button>
            </div>
            {/* Aqui você pode mapear os perfumes relacionados à marca */}
            {showPerfumesList === "Kanban" ? (
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {perfumesFiltrados.length > 0 ? (
                  perfumesFiltrados.map((perfume) => (
                    <div
                      key={perfume.id}
                      className="flex gap-4 mt-4 items-center"
                    >
                      <img
                        src={perfume.image}
                        alt={perfume.name}
                        className="w-16 h-16 rounded-md object-cover"
                      />
                      <div>
                        <h3 className="font-bold text-gray-800">
                          {perfume.name}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {perfume.description}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full py-10 text-center text-gray-500">
                    Nenhum perfume encontrado para esta categoria ou pesquisa.
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col gap-4 p-2 mt-4 bg-white">
                {perfumesFiltrados.length > 0 ? (
                  perfumesFiltrados.map((perfume) => (
                    <div
                      key={perfume.id}
                      className="border-b border-teal-500 bg-white w-full pb-4 flex gap-4"
                    >
                      <img
                        src={perfume.image}
                        alt={perfume.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="flex flex-col flex-1">
                        <div className="flex justify-between w-full">
                          <p>{perfume.name}</p>
                          <p>{perfume.year}</p>
                        </div>
                        <p>{perfume.brand}</p>
                        <div
                          className={`${perfume.gender === "Masculino" ? "text-blue-700 bg-gradient-to-r from-blue-300 to-transparent" : perfume.gender === "Feminino" ? "text-pink-700 bg-gradient-to-r from-pink-300 to-transparent" : "text-teal-700 bg-gradient-to-r from-teal-300 to-transparent"} rounded-full px-2 py-1 text-xs w-full mt-1 self-start`}
                        >
                          <p className="font-bold">{perfume.gender}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="py-10 text-center text-gray-500">
                    Nenhum perfume encontrado para esta categoria ou pesquisa.
                  </div>
                )}
              </div>
            )}
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
