import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { AuthContextProvider } from "./hooks/useAuthContext";
import { Homepage } from "./pages/Homepage";
import { PageNotFound } from "./pages/PageNotFound";
import { Pricing } from "./pages/Pricing";
import { Product } from "./pages/Product";
import { LoginPage } from "./useless/LoginPage";

export const App: FC = () => {
  return (
    <Root>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </AuthContextProvider>
    </Root>
  );
};

const Root = styled.div`
  height: 100vh;
`;
