import styled from '@emotion/styled'

const CountryDetails = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  font-size: var(--text-base);

  @media (min-width: 400px) {
    gap: 40px;
  }

  .back-btn {
    grid-column: 1/-1;

    & a,
    & span {
      display: inline-flex;
      align-items: center;
    }

    & a {
      gap: 10px;
      text-decoration: none;
      background-color: var(--clr-element);
      color: var(--clr-text);
      padding: 10px 30px;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
        0 2px 4px -2px rgb(0 0 0 / 0.1);
    }
  }

  .even-columns {
    display: grid;
    gap: 30px;
    max-width: 640px;
    margin-inline: auto;

    & img {
      align-self: stretch;
      object-fit: cover;
    }

    & h2 {
      font-size: 28px;
    }

    @media (min-width: 968px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 40px;
      max-width: 100%;

      & h2 {
        font-size: 36px;
      }
    }

    .col-2 {
      display: grid;
      gap: 20px;

      @media (min-width: 678px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
      }

      & h2 {
        grid-column: 1/-1;
      }

      & div {
        grid-column: 1/-1;
      }
    }

    & ul {
      list-style: none;
      margin: 0;
      padding: 0;

      & li {
        display: flex;
        align-items: center;
        gap: 10px;

        &:not(:first-of-type) {
          margin-top: 10px;
        }

        & p {
          font-weight: var(--font-extrabold);
        }

        & span {
          color: var(--input-light);
        }
      }
    }

    .borders-list {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
      margin-top: 20px;

      & li:not(:first-of-type) {
        margin-top: 0;
      }

      & a {
        display: inline-block;
        text-decoration: none;
        color: var(--clr-text);
        border: 1px solid var(--input-light);
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
          0 2px 4px -2px rgb(0 0 0 / 0.1);
        padding: 5px 10px;
      }
    }
  }
`

export default CountryDetails
