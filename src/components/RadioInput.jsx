import styled from "styled-components";
const Label = styled.label`
  font-size: 1.5vw;
  margin: auto 1vw;
`;

const InputAndLabel = styled.div`
  margin-left: 4vw;
  margin-bottom: 0.5vw;
`;
const RadioInput = ({ id, value, setFilter, defaultChecked, text }) => {
  return (
    <InputAndLabel>
      <input
        type="radio"
        name="animal"
        id={id}
        value={value}
        onChange={setFilter}
        defaultChecked={defaultChecked}
      />
      <Label htmlFor={id}>{text}</Label>
    </InputAndLabel>
  );
};

export default RadioInput;
