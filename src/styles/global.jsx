import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  :focus-visible {
    outline: 2px solid var(--signal);
    outline-offset: 3px;
    border-radius: 4px;
  }

  /* Scroll-reveal — driven by IntersectionObserver (see Reveal component) */
  [data-reveal] {
    opacity: 0;
    transform: translateY(26px);
    transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
      transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
    will-change: opacity, transform;
  }
  [data-reveal].is-visible {
    opacity: 1;
    transform: none;
  }

  @media (prefers-reduced-motion: reduce) {
    [data-reveal] {
      opacity: 1;
      transform: none;
    }
  }
`;

export default Global;
