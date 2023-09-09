import { FC, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./hooks/useAuthContext";
import { AppLayout } from "./pages/AppLayout";
import { Homepage } from "./pages/Homepage";
import { Login } from "./pages/Login";
import { PageNotFound } from "./pages/PageNotFound";
import { Pricing } from "./pages/Pricing";
import { Product } from "./pages/Product";
import { CityList, CityType } from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City/City";
const Base_URL = "http://localhost:9000";

export const App: FC = () => {
  const [cities, setCities] = useState<CityType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${Base_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        console.warn("Error while fetching");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/app" element={<AppLayout />}>
          <Route
            index
            element={<CityList cities={cities} isLoading={isLoading} />}
          />

          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route path="cities/:id" element={<City />} />
          <Route
            path="countries"
            element={<CountryList cities={cities} isLoading={isLoading} />}
          />
          <Route path="form" element={<div>form</div>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthContextProvider>
  );
};
