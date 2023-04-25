import Header from "./Header";
import styled from "styled-components";

const AppStyleContainer = styled.div`
  width: 80vw;
  height: 60vw;
`;

const AnimalShelter = () => {
  return (
    <AppStyleContainer>
      <Header />
    </AppStyleContainer>
  );
};

export default AnimalShelter;
