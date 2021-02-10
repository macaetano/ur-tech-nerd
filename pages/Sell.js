import styled from "styled-components";

import Input from "../components/styles/Input";

const CardForm = styled.div`
  margin: auto;
  box-shadow: var(--box-shadow);
  width: 35%;
  padding: 1rem;

  h2 {
    text-align: center;
  }

  .body {
    display: grid;
    grid-gap: 8px;
  }
`;

export default function Sell() {
  return (
    <div>
      <CardForm>
        <h2>Spec Sheet &#128203;</h2>
        <div className="body">
          <Input label="Name" />
          <Input label="Price 💰" type="number" />
          <Input label="Description" textArea />
          <input type="file" accept="image/*" />
        </div>
      </CardForm>
    </div>
  );
}
