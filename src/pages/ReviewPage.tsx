import { Search } from "lucide-react";
import BottomBrandsParfums from "../components/BottomBrandsParfums";
import { Input } from "../components/ui/input";
import { perfumes } from "../data/mockData";
import { useState } from "react";
import { reviews } from "../data/mockData";
import { useNavigate } from "react-router";

export default function ReviewPage() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const perfumesFitrado = perfumes.filter((perfume) => {
    return perfume.name.toLowerCase().includes(query.toLowerCase());
  });
  return (
    <>
      <main className="relative flex-1 w-full max-w-7xl mx-auto px-4 py-8 bg-white/40  backdrop-blur-sm rounded-lg shadow-sm">
        <div className="flex flex-col gap-4">
          <h1 className="flex justify-center">
            {query === ""
              ? "Avaliações"
              : perfumesFitrado.length === 1 ? `Avaliações do "${perfumesFitrado[0].name}"`
                : perfumesFitrado.length === 0 ? `Nenhum perfume encontrado para "${query}"`
                  : `Avaliações dos perfumes "${perfumesFitrado.map(p => p.name).join(", ")}"`
            }
          </h1>
          <div className="w-full flex items-center relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <Input
              placeholder="Buscar perfumes..."
              className="pl-10"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div>
            {query === "" ? (
              <p className="text-center text-gray-500 py-8">
                Digite algo para buscar perfumes.
              </p>
            ) : (
              <div className="flex flex-col gap-4">
                {perfumesFitrado.map((perfume) => (
                  <div
                    key={perfume.id}
                    onClick={() => navigate(`/perfume/${perfume.id}`)}
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
                ))}
                {reviews
                  .filter((review) =>
                    perfumesFitrado.some((p) => p.id === review.perfumeId),
                  )
                  .map((review) => (
                    <div
                      key={review.id}
                      className="p-4 border rounded-md shadow-sm bg-white"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">{review.userName}</span>
                        <span className="text-yellow-500">
                          {"★".repeat(review.rating)}
                        </span>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                      <span className="text-xs text-gray-400 mt-2 block">
                        {review.date}
                      </span>
                    </div>
                  ))}
                {reviews.filter((review) =>
                  perfumesFitrado.some((p) => p.id === review.perfumeId),
                ).length === 0 && (
                    <p className="text-center text-gray-500 py-4">
                      Nenhuma avaliação encontrada para este perfume.
                    </p>
                  )}
              </div>
            )}
          </div>
          <BottomBrandsParfums />
        </div>
      </main>
    </>
  );
}
