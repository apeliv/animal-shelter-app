import Header from "./Header";
import styled from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShelterInfo from "../routes/ShelterInfo";
import ErrorPage from "./ErrorPage";

const AppStyleContainer = styled.div`
  width: 80vw;
  height: 60vw;
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <div></div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <ShelterInfo />,
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
