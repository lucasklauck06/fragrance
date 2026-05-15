import { ArrowRight, LayoutGrid, List } from "lucide-react";
import SidebarResenhasPerfumes from "../components/SidebarResenhasPerfumes";
import { useNavigate, useParams, useLocation } from "react-router";
import { useState, useMemo } from "react";
import { perfumes } from "../data/mockData";
import { Card } from "../components/ui/card";

export default function FilteredParfumNotes() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const [showList, setShowList] = useState("Kanban");

  const noteName = location.state?.noteName || decodeURIComponent(id || "");
  const groupName = location.state?.groupName || "Desconhecido";

  const filteredPerfumes = useMemo(() => {
    if (!noteName) return [];
    return perfumes.filter((perfume) => {
      const allNotes = [
        ...perfume.topNotes,
        ...perfume.heartNotes,
        ...perfume.baseNotes,
      ].map((n) => n.toLowerCase());
      return allNotes.includes(noteName.toLowerCase());
    });
  }, [noteName]);
  return (
    <>
      <main className="relative flex-1 w-full max-w-7xl mx-auto px-4 py-8 bg-white/40  backdrop-blur-sm rounded-lg shadow-sm">
        <div className="flex gap-4">
          <div className="flex-1">
            <div className="flex flex-col">
              <h1 className="flex justify-center text-2xl mb-4 font-bold text-gray-900">
                {noteName}
              </h1>
              <h3 className="flex justify-center text-gray-500">
                Grupo: {groupName}
              </h3>
            </div>
            <div className="flex justify-between items-center mb-4 mt-10">
              <span className="text-lg font-medium">
                Os perfumes mais populares com esta nota:
              </span>
              <div
                className="flex items-center gap-2 hover:cursor-pointer"
                onClick={() => navigate("/perfumes")}
              >
                <span className="text-lg font-medium">
                  Mostrar todos os perfumes
                </span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
            <div className="bg-white/40  backdrop-blur-sm rounded-lg shadow-sm">
              <div className="flex justify-between items-center px-4 py-4 border-b border-gray-300">
                <h3>Resultados</h3>
                <div className="flex gap-4">
                  <LayoutGrid
                    onClick={() => setShowList("Kanban")}
                    className={`w-4 h-4 hover:cursor-pointer ${showList === "Kanban" ? "text-teal-500" : ""}`}
                  />
                  <List
                    onClick={() => setShowList("List")}
                    className={`w-4 h-4 hover:cursor-pointer ${showList === "List" ? "text-teal-500" : ""}`}
                  />
                </div>
              </div>
              <div className="p-4">
                {showList == "Kanban" ? (
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {filteredPerfumes.length === 0 ? (
                      <div className="col-span-full text-center text-gray-500 py-8">
                        Nenhum resultado encontrado.
                      </div>
                    ) : (
                      filteredPerfumes.map((perfume) => (
                        <Card
                          onClick={() => navigate(`/perfume/${perfume.id}`)}
                          key={perfume.id}
                          className="p-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200 rounded-lg flex flex-col items-center"
                        >
                          <div className="w-full h-40 rounded-lg overflow-hidden flex items-center justify-center p-2 overflow-hidden relative group">
                            <img
                              src={perfume.image}
                              alt={perfume.name}
                              className="max-w-full max-h-full object-contain rounded-lg mix-blend-multiply"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000 ease-out pointer-events-none z-10"></div>
                          </div>
                          <div className="flex flex-col items-center text-center w-full mt-2">
                            <p className="text-md font-bold text-teal-700 leading-tight">
                              {perfume.name}
                            </p>
                            <p
                              className="text-sm text-gray-600 hover:text-teal-500 cursor-pointer transition-all duration-200 mt-1"
                              onClick={() => navigate(`/marca/${perfume.id}`)}
                            >
                              {perfume.brand}
                            </p>
                          </div>
                          <div
                            className={`${perfume.gender === "Masculino" ? "text-blue-700 bg-gradient-to-r from-blue-300 to-transparent" : perfume.gender === "Feminino" ? "text-pink-700 bg-gradient-to-r from-pink-300 to-transparent" : "text-teal-700 bg-gradient-to-r from-teal-300 to-transparent"} rounded-full px-2 py-1 text-xs w-full mt-3 flex justify-center items-center`}
                          >
                            <p className="font-bold text-center">
                              {perfume.gender}
                            </p>
                          </div>
                        </Card>
                      ))
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col gap-4 p-2 bg-white">
                    {filteredPerfumes.length === 0 ? (
                      <div className="text-center text-gray-500 py-8">
                        Nenhum resultado encontrado.
                      </div>
                    ) : (
                      filteredPerfumes.map((perfume) => (
                        <div
                          onClick={() => navigate(`/perfume/${perfume.id}`)}
                          key={perfume.id}
                          className="border-b border-teal-500 bg-white w-full pb-4 flex gap-4 relative group overflow-hidden cursor-pointer hover:bg-gray-50 transition-colors duration-300 rounded-lg p-2"
                        >
                          <div className="overflow-hidden relative group h-full">
                            <img
                              src={perfume.image}
                              alt={perfume.name}
                              className="w-36 h-48 object-cover mix-blend-multiply rounded-lg"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-[2000ms] ease-out pointer-events-none z-10 w-[200%]"></div>
                          </div>
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
                )}
              </div>
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
