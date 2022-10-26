import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Register } from "../auth";
import { Hotels, Home, Packages, Users, Statistics } from "../Pages/";
import { CrudNavbar } from "../components/Crudhotels/";
import { useUiContext } from "../context/uiContext";
import { Layout } from "../layout/Layout";
import routes from "./routes";

export const Path = () => {
  const { active } = useUiContext();
  return (
    <BrowserRouter>
      {active ? (
        <Layout>
          <Routes>
            <Route exact path={routes.createHotels} element={<CrudNavbar />} />
            <Route exact path={routes.home} element={<Home />} />
            <Route exact path={routes.hotels} element={<Hotels />} />
            <Route exact path={routes.login} element={<Login />} />
            <Route exact path={routes.packages} element={<Packages />} />
            <Route exact path={routes.register} element={<Register />} />
            <Route exact path={routes.stadistics} element={<Statistics />} />
            <Route exact path={routes.users} element={<Users />} />
          </Routes>
        </Layout>
      ) : (
        <Routes>
          <Route path="*" element={<Login />} />
          <Route path={routes.register} element={<Register />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};
