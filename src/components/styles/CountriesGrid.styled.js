import styled from '@emotion/styled'

const CountriesGrid = styled.div`
  margin-top: 30px;
  display: grid;
  grid-column: 1/-1;
  grid-template-columns: repeat(auto-fill, minmax(calc(250px - 30px), 1fr));
  gap: 30px;

  .country-card {
    background-color: var(--clr-element);
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    border-radius: 6px;
    overflow: hidden;
    max-width: 300px;

    & img {
      width: 100%;
      min-height: 180px;
      aspect-ratio: 16 / 9;
      object-fit: cover;
      /* border: 0.5px solid var(--input-light); */
    }

    & div {
      padding: 2em;

      & a,
      & a:link,
      & a:visited {
        display: inline-block;
        text-decoration: none;
        color: var(--clr-text);
      }

      & ul {
        list-style: none;
        padding: 0;
        margin: 0;
        margin-top: 20px;

        & li:not(:first-of-type) {
          margin-top: 5px;
        }

        & span {
          font-weight: var(--font-extrabold);
        }
      }
    }
  }
`

export default CountriesGrid
