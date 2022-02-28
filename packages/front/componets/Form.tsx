import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
  margin: 1rem 25%;
  width: 100%;
  background-color: #343a40;
  border-radius: 0.25rem;

  label {
    margin: 0.5rem 0.1em 0.5rem;
    font-weight: 500;
  }
  span {
    font-size: 0.8rem;
    margin: 0.3rem 0;
    color: #bb0303;
  }

  .input {
    height: calc(2.25rem + 2px);
    padding: 0.375rem 0.75rem;
    margin: 0 0 2rem ;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
  }
  .button {
    padding: 0.5rem 2rem;
    background-color: green;
  }
  .button-wrapper {
    display: flex;
    margin: 1rem 0 1rem;
    justify-content: space-between;
  }
  .file {
    border: ${(props) => props.theme.border};
  }
`;

export default Form;
