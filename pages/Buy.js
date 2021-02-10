import styled from "styled-components";

import Search from "../components/styles/Search";
import items from "../datasource/items";
import formatMoney from "../utils/formatMoney";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 1rem;
  grid-gap: 1.5rem;
`;

const Item = styled.div`
  box-shadow: var(--box-shadow);
  display: flex;
  flex-direction: column;
  height: 450px;

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
      color: white;
      transform: rotate(20deg);
      top: 4px;
      right: -16px;
      padding: 4px;
    }
  }
  .item-body {
    padding: 1rem;
    flex: 1;
    p {
      margin-top: 0.5rem;
      font-size: 12px;
    }
  }

  .item-footer {
    display: flex;
    justify-content: center;
    padding-bottom: 1rem;
    transition: width 0.1s, height 0.1s;

    div {
      display: flex;
      &:first-child {
        margin-right: 8px;
      }
    }

    img {
      width: 16px;
      height: 16px;
      margin-right: 8px;
    }

    p {
      font-size: 14px;
    }

    &:hover {
      &img {
        width: 20px;
        height: 20px;
      }
      p {
        font-size: 16px;
      }
    }
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
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
          <div className="item-footer">
            <div>
              <img src="/icons/heart.svg" alt="Heart" />
              <p>Add to Favorites</p>
            </div>
            <div>
              <img src="/icons/shopping-cart.svg" alt="Cart" />
              <p>Add to Cart</p>
            </div>
          </div>
        </Item>
      ))}
    </GridContainer>
  </div>
);

export default Buy;
