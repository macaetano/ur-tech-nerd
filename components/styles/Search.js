import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  width: fit-content;
  height: 48px;
  margin-left: auto;

  input {
    border: 0;
    flex: 1;
    padding: 1rem;
  }

  button {
    border: 0;
    padding-left: 8px;
    background: var(--red);
    color: white;
    text-transform: uppercase;
  }
`;

const Search = () => (
  <SearchContainer>
    <input type="text" placeholder="Search..." />
  </SearchContainer>
);

export default Search;
