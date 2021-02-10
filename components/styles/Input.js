import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 0.75rem;
    font-weight: 700;
    margin-bottom: 4px;
  }

  input,
  textarea {
    outline: none;
    border: 2px solid var(--black);
    width: 100%;
  }

  input {
    height: 30px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

const Input = ({ label, textArea = false, type = "text" }) => (
  <InputContainer>
    <span>{label}</span>
    {textArea ? <textarea rows="3" /> : <input type={type} />}
  </InputContainer>
);

export default Input;
