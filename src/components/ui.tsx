import styled from "styled-components";

/** Centered content column */
export const Container = styled.div`
  width: 100%;
  max-width: var(--maxw);
  margin: 0 auto;
  padding: 0 clamp(20px, 5vw, 40px);
`;

/** A page section with generous vertical rhythm */
export const Section = styled.section`
  position: relative;
  padding: clamp(64px, 11vw, 128px) 0;
`;

/** Monospace technical label, e.g. "02 / CAPACIDADES" */
export const Eyebrow = styled.span<{ $tone?: "live" | "signal" }>`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ $tone }) =>
    $tone === "live" ? "var(--live)" : "var(--signal)"};

  &::before {
    content: "";
    width: 26px;
    height: 1px;
    background: currentColor;
    opacity: 0.6;
  }
`;

/** Large display heading */
export const SectionTitle = styled.h2`
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(2rem, 5.2vw, 3.1rem);
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: var(--text);
  margin: 18px 0 0;

  em {
    font-style: normal;
    color: var(--live);
  }
`;

export const Lead = styled.p`
  color: var(--muted);
  font-size: clamp(1rem, 2.2vw, 1.12rem);
  max-width: 62ch;
  margin-top: 18px;
`;
