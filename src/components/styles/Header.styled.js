import styled from '@emotion/styled'

const HeaderStyled = styled.header`
  padding-block: 1em;
  background-color: var(--clr-element);
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

  @media (min-width: 675px) {
    padding-block: 1.5em;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    max-width: var(--max-w-xl);
    width: 90%;
    margin-inline: auto;
  }

  h1 {
    font-size: var(--text-sm);

    @media (min-width: 375px) {
      font-size: 24px;
    }
  }

  button.theme-toggle {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: 10px;
    text-transform: capitalize;
    color: var(--clr-text);
    font-weight: var(--font-semibold);
    padding: 10px;
    transition: all 250ms ease-in;
    border: 1px solid transparent;
    border-radius: 4px;

    &:hover {
      border-color: var(--clr-text);
      background-color: var(--clr-element);
    }

    & span {
      display: flex;
      align-items: center;
    }

    & svg {
      width: 20px;
      height: 20px;
    }
  }
`

export default HeaderStyled
