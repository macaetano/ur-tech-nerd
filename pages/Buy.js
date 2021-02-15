import styled from "styled-components";

import Search from "../components/styles/Search";
import Button from "../components/styles/Button";
import items from "../datasource/items";
import formatMoney from "../utils/formatMoney";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  margin: 1rem;
  grid-gap: 1.5rem;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: var(--box-shadow);

  .item-header {
    position: relative;
    img {
      width: 100%;
      height: 300px;
    }
    h4 {
      position: absolute;
      box-shadow: var(--box-shadow);
      background-color: var(--red);
      color: var(--white);
      transform: rotate(20deg);
      top: 4px;
      right: -16px;
      padding: 4px;
    }
  }

  .item-body {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .item-content {
    padding: 1rem;
    flex: 1;
    p {
      margin-top: 0.5rem;
      font-size: 12px;
    }
  }

  button {
    margin: 1rem;
  }
`;

const Buy = () => (
  <div>
    <Search />
    <GridContainer>
      {items.map((item, index) => (
        <Item key={index}>
          <div className="item-header">
            <img src={item.photo_url} alt={item.name} />
            <h4>{formatMoney(item.price)}</h4>
          </div>
          <div className="item-body">
            <div className="item-content">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
            <Button>Add to cart!</Button>
          </div>
        </Item>
      ))}
    </GridContainer>
  </div>
);

export default Buy;
