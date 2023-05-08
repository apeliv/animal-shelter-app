import Header from "./Header";
import styled from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShelterInfo from "../routes/ShelterInfo";
import ErrorPage from "./ErrorPage";
import Root from "./Root";
import AnimalsList from "../routes/AnimalsList";
import UserContext from "../assets/userContext";
import { useState } from "react";
import InputAnimal from "../routes/InputAnimal";
import Donations from "../routes/Donations";

const AppStyleContainer = styled.div`
  width: 80vw;
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <ShelterInfo />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/list",
    element: <AnimalsList />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/form",
    element: <InputAnimal />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/donations",
    element: <Donations />,
    errorElement: <ErrorPage />,
  },
]);

const AnimalShelter = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <AppStyleContainer>
      <Header isAdmin={isAdmin} setIsAdmin={() => setIsAdmin(!isAdmin)} />
      <UserContext.Provider value={isAdmin}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </AppStyleContainer>
  );
};

export default AnimalShelter;
