import styled from '@emotion/styled'

const FormStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 640px) {
    flex-direction: row;
    padding-block: 1em;

    & input {
      min-width: 350px;
    }
  }

  & input {
    width: 80%;
    border-radius: 4px;
    border: none;
    padding: 10px 20px;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    color: var(--clr-text);
    background-color: var(--clr-element);
    &::placeholder {
      color: var(--clr-text);
    }
  }

  & select {
    padding: 10px;
    border-radius: 4px;
    background-color: var(--clr-element);
    color: var(--clr-text);
    border-color: var(--clr-bg);
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }
`

export default FormStyled
