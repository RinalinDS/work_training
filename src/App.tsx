import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { LoginPage } from "./components/LoginForm";
import { PrivateRoute } from "./components/ProtectedRoute";
import { AuthContextProvider } from "./hooks/useAuthContext";
import { Counter } from "./useless/Counter";

export const App: FC = () => {
  return (
    <Root>
      <AuthContextProvider>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Counter />
              </PrivateRoute>
            }
          />

          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </AuthContextProvider>
    </Root>
  );
};

const Root = styled.div`
  height: 100vh;
`;
