import styled from "styled-components";
import ImageInput from "../components/ImageInput";
import Button from "../components/styles/Button";

import Input from "../components/styles/Input";

const CardForm = styled.div`
  margin: auto;
  box-shadow: var(--box-shadow);
  width: 35%;
  padding: 1rem;

  h2 {
    text-align: center;
    margin-bottom: 1rem;
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
          <ImageInput />
          <Input label="Name" />
          <Input label="Price 💰" type="number" />
          <Input label="Description" textArea />
          <Button>Add Tech</Button>
        </div>
      </CardForm>
    </div>
  );
}
