import { createBrowserRouter } from "react-router";
import DefaultLayout from "./components/DefaultLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PerfumeDetailPage from "./pages/PerfumeDetailPage";
import PerfumistHomePage from "./pages/DesignersHomePage";
import PerfumistPage from "./pages/PerfumistPage";
import SearchPage from "./pages/SearchPage";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import AdminPerfumesPage from "./pages/admin/AdminPerfumesPage";
import AdminPerfumeFormPage from "./pages/admin/AdminPerfumeFormPage";
import AdminPermissionsPage from "./pages/admin/AdminPermissionsPage";
import DesignersDetailPage from "./pages/DesignersDetailPage";
import SearchDesignersPage from "./pages/SearchDesignersPage";
import SearchByNotesPage from "./pages/SearchByNotesPage";
import ComparePage from "./pages/ComparePage";
import GroupsPage from "./pages/GroupsPage";
import NotesPage from "./pages/NotesPage";
import ReviewPage from "./pages/ReviewPage";
import FilteredParfumNotes from "./pages/FilteredParfumNotes";
import ProtectedRoute from "./components/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: DefaultLayout,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/perfume/:id",
        Component: PerfumeDetailPage,
      },
      {
        path: "/perfumista/:id",
        Component: PerfumistPage,
      },
      {
        path: "/perfumistas",
        Component: PerfumistHomePage,
      },
      {
        path: "/busca",
        Component: SearchPage,
      },
      {
        path: "/perfumes",
        Component: SearchPage,
      },
      {
        path: "/busca/designers",
        Component: SearchDesignersPage,
      },
      {
        path: "/marcas",
        Component: SearchDesignersPage,
      },
      {
        path: "/marca/:id",
        Component: DesignersDetailPage,
      },
      {
        path: "/notas",
        Component: NotesPage,
      },
      {
        path: "/comparar",
        Component: ComparePage,
      },
      {
        path: "/grupos",
        Component: GroupsPage,
      },
      {
        path: "/busca-notas",
        Component: SearchByNotesPage,
      },
      {
        path: "/nota/:id",
        Component: FilteredParfumNotes,
      },
      {
        path: "/resenhas",
        Component: ReviewPage,
      },
    ],
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/admin",
    element: <ProtectedRoute adminOnly={true} />,
    children: [
      {
        path: "",
        Component: AdminDashboardPage,
      },
      {
        path: "perfumes",
        Component: AdminPerfumesPage,
      },
      {
        path: "perfumes/:id",
        Component: AdminPerfumeFormPage,
      },
      {
        path: "permissoes",
        Component: AdminPermissionsPage,
      },
    ]
  },
  {
    path: "*",
    Component: () => (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">404</h1>
          <p className="text-gray-600">Página não encontrada</p>
        </div>
      </div>
    ),
  },
]);
