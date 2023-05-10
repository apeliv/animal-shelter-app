import styled from "styled-components";
import logo from "/public/shelter_logo.png";

const RootPageContent = styled.div`
  height: fit-content;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 47%;
  height: fit-content;
`;

const Root = () => {
  return (
    <RootPageContent>
      <Logo src={logo} alt="Logo picture" />
      <h1>Provide a hand for a paw.</h1>
    </RootPageContent>
  );
};

export default Root;
