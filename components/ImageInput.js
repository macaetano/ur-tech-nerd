import React, { useRef, useState } from "react";
import styled from "styled-components";

import Button from "./styles/Button";

const ImageContainer = styled.div`
  height: 300px;
  position: relative;

  img {
    height: 100%;
    width: 100%;
  }

  .overlay {
    position: absolute;
    background: rgb(255, 255, 255);
    opacity: 0;
    top: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      text-align: center;
    }

    &:hover {
      opacity: 0.5;
    }
  }
`;

const ImageInput = () => {
  const [file, setFile] = useState(null);
  const ref = useRef(null);

  const onChange = (event) => {
    const file = URL.createObjectURL(event.target.files[0]);
    if (file) setFile(file);
  };

  const openSelection = () => ref?.current?.click();

  return (
    <React.Fragment>
      <input
        ref={ref}
        style={{ display: "none" }}
        type="file"
        accept="image/*"
        onChange={onChange}
      />
      {file ? (
        <ImageContainer>
          <img src={file} alt="Uploaded image" />
          <div className="overlay" onClick={openSelection}>
            <span>Change Photo</span>
          </div>
        </ImageContainer>
      ) : (
        <Button style={{ width: "30%" }} onClick={openSelection}>
          Add a Image
        </Button>
      )}
    </React.Fragment>
  );
};

export default ImageInput;
