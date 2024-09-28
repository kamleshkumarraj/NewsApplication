import App from "./App.jsx";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.page.jsx";
import "./index.css";
import Login from "./components/authentication/Login.jsx";
import "react-toastify/dist/ReactToastify.css";
import Register from "./components/authentication/Register.jsx";
import ForgotPassword from "./components/authentication/ForgotPassword.jsx";
import ResetPassword from "./components/authentication/ResetPassword.jsx";
import WritePage from "./components/write/page.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import CategoryNews from "./pages/category/CategoryPage.jsx";
import Details from "./pages/DetailsPage/DetailsPage.jsx";
import Admin from "./admin/Admin.jsx";
import OverviewPage from "./admin/pages/OverviewPage.jsx";
import AnalyticsPage from "./admin/pages/AnalyticsPage.jsx";
import OrdersPage from "./admin/pages/OrdersPage.jsx";
import ProductsPage from "./admin/pages/ProductsPage.jsx";
import SalesPage from "./admin/pages/SalesPage.jsx";
import SettingsPage from "./admin/pages/SettingsPage.jsx";
import UsersPage from "./admin/pages/UsersPage.jsx";
import SearchNews from "./components/news/SearchNews.jsx";

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:category",
        element: <CategoryNews />,
      },
      {
        path: "/:category/:single-page",
        element: <Details />,
      },
      {
        path : '/search/:query',
        element : <SearchNews />
      },
      {
        path: "/login",
        element: (
          <GoogleOAuthProvider
            clientId={`${GOOGLE_CLIENT_ID}`}
          >
            <Login />
          </GoogleOAuthProvider>
        ),
      },
      {
        path: "/signin",
        element: <Register />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/api/v1/auth/reset-password/:tocken",
        element: <ResetPassword />,
      },
      {
        path: "/write",
        element: <WritePage />,
      },
    ],
  },
  {
    path: "/admin/dashbord",
    element: <Admin />,
    children: [
      {
        path: "/admin/dashbord/overview",
        element: <OverviewPage />,
      },
      {
        path: "/admin/dashbord/analytics",
        element: <AnalyticsPage />,
      },
      {
        path: "/admin/dashbord/orders",
        element: <OrdersPage />,
      },
      {
        path: "/admin/dashbord/products",
        element: <ProductsPage />,
      },
      {
        path: "/admin/dashbord/sales",
        element: <SalesPage />,
      },
      {
        path: "/admin/dashbord/settings",
        element: <SettingsPage />,
      },
      {
        path: "/admin/dashbord/users",
        element: <UsersPage />,
      },
    ],
  },
]);
