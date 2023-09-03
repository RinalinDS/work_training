import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./hooks/useAuthContext";
import { AppLayout } from "./pages/AppLayout";
import { Homepage } from "./pages/Homepage";
import { Login } from "./pages/Login";
import { PageNotFound } from "./pages/PageNotFound";
import { Pricing } from "./pages/Pricing";
import { Product } from "./pages/Product";

export const App: FC = () => {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/app" element={<AppLayout />} />

        <Route path="*" element={<PageNotFound />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthContextProvider>
  );
};
