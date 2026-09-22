import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  :focus-visible {
    outline: 2px solid var(--signal);
    outline-offset: 3px;
    border-radius: 4px;
  }

  /* amber accent for cycling/highlighted words in headings */
  .hl-amber {
    color: var(--live);
  }

  /* Scroll reveal — CSS driven (see Reveal component). Modern blur-in. */
  [data-reveal] {
    opacity: 0;
    transform: translateY(24px);
    filter: blur(6px);
    transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
      transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
      filter 0.7s cubic-bezier(0.22, 1, 0.36, 1);
    will-change: opacity, transform, filter;
  }
  [data-reveal].is-visible {
    opacity: 1;
    transform: none;
    filter: none;
  }

  @media (prefers-reduced-motion: reduce) {
    [data-reveal] {
      opacity: 1;
      transform: none;
      filter: none;
      transition: none;
    }
  }
`;

export default Global;
