import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  width: fit-content;
  min-width: 330px;
  height: 48px;
  margin-left: auto;

  input {
    border: 0;
    border-radius: 20px 0 0 20px;
    flex: 1;
    padding: 1rem;
  }

  button {
    border: 0;
    padding-left: 8px;
    border-radius: 0 20px 20px 0;
    background: var(--red);
    color: white;
    text-transform: uppercase;
  }
`;

const Search = () => (
  <SearchContainer>
    <input type="text" />
    <button>Search</button>
  </SearchContainer>
);

export default Search;
