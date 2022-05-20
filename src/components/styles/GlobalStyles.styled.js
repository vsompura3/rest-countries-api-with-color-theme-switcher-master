import { css } from '@emotion/react'

const GlobalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');

  :root {
    --ff-sans: 'Nunito sans', sans-serif;
    --text-sm: 14px;
    --text-base: 16px;
    --font-light: 300;
    --font-semibold: 600;
    --font-extrabold: 800;
    --max-w-xl: 1200px;
    --input-light: #717371;
  }

  html {
    --clr-bg: #f8f9f9;
    --clr-text: #0e1113;
    --clr-element: #ffffff;
  }

  html.dark {
    --clr-bg: #17222b;
    --clr-text: #ffffff;
    --clr-element: #1e2c37;
  }

  /* @media (prefers-color-scheme: light) {
    :root {
      --clr-bg: 0 0% 98;
      --clr-text: 200 15% 8;
      --clr-element: 0 0% 100;
    }
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --clr-bg: 207 26% 17;
      --clr-text: 0 0% 100;
      --clr-element: 209 23% 22;
    }
  } */

  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    font-family: var(--ff-sans);
    font-size: var(--text-sm, 1rem);
    font-weight: var(--font-light);
    background-color: var(--clr-bg);
    color: var(--clr-text);
  }

  /* Set minimum line-height for heading elements */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.15;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Content thats not visible but read by screen-readers */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* Generic Button Style */
  button {
    cursor: pointer;
    display: block;
    background: none;
    border: none;
  }

  a {
    transition: transform 250ms ease-in;
  }

  a:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0 0 0 0.75);
  }
`

export default GlobalStyles
