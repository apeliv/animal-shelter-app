import Header from "./Header";
import styled from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShelterInfo from "../routes/ShelterInfo";
import ErrorPage from "./ErrorPage";
import Root from "./Root";
import AnimalsList from "../routes/AnimalsList";

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
]);

const AnimalShelter = () => {
  return (
    <AppStyleContainer>
      <Header />
      <RouterProvider router={router} />
    </AppStyleContainer>
  );
};

export default AnimalShelter;
