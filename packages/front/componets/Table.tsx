import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  background-color: #343a40;
  border-collapse: collapse;
  tr {
    height: 60px;
    border: 0 solid transparent;
  }
  tbody > tr {
    border-top: ${(props) => props.theme.border};
  }
  th {
    text-align: left;
    font-size: 1.2em;
    padding: 0.5rem 1rem;
  }
  td {
    height: 30px;
    vertical-align: middle;
    padding: 1rem 1rem;
    font-size: 1.1em;
  }
  img {
    max-height: 100%;
    max-width: 40px;
    object-fit: contain;
  }
  .img {
    filter: invert(100%) sepia(0%) saturate(7486%) hue-rotate(185deg) brightness(112%)
      contrast(100%);
    padding: 0;
  }
  .button {
    cursor: pointer;
  }
  .button:hover {
    color: #ffffffcc;
  }
  .no-button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: inherit;
    outline: inherit;
  }

  
`;

export default Table;
