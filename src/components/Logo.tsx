import styled from "styled-components";

type Props = {
  className?: string;
  /** small mono descriptor under the wordmark */
  tagline?: string;
};

/**
 * DACARI logotype.
 * Mark = the Direct Current symbol (⎓): DC for "Daniel Carvalho", and the
 * electrical symbol for direct current — a solid bar (amber = energia) over a
 * dashed bar (teal = sinal/dados). Wordmark set in Chakra Petch, the brand's
 * own technical typeface, with a terminal node accent.
 */
export default function Logo({ className, tagline }: Props) {
  return (
    <Root className={className} aria-label="DACARI">
      <span className="mark" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <rect x="4.5" y="8.4" width="15" height="2.6" rx="1.3" fill="var(--live)" />
          <rect x="4.5" y="13.1" width="3.5" height="2.6" rx="1.3" fill="var(--signal)" />
          <rect x="10.25" y="13.1" width="3.5" height="2.6" rx="1.3" fill="var(--signal)" />
          <rect x="16" y="13.1" width="3.5" height="2.6" rx="1.3" fill="var(--signal)" />
        </svg>
      </span>
      <span className="word">
        <span className="name">
          DACARI<b aria-hidden="true" />
        </span>
        {tagline && <em>{tagline}</em>}
      </span>
    </Root>
  );
}

const Root = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 12px;

  .mark {
    display: grid;
    place-items: center;
    width: 38px;
    height: 38px;
    border-radius: 11px;
    background: linear-gradient(158deg, var(--panel-2), var(--panel));
    border: 1px solid var(--line-bright);
    box-shadow: inset 0 0 0 1px rgba(255, 176, 32, 0.06),
      0 0 18px rgba(255, 176, 32, 0.1);
    flex-shrink: 0;
    transition: box-shadow 0.25s ease, transform 0.2s ease;
  }
  .mark svg {
    width: 24px;
    height: 24px;
    filter: drop-shadow(0 0 4px rgba(255, 176, 32, 0.3));
  }

  &:hover .mark {
    transform: translateY(-1px);
    box-shadow: inset 0 0 0 1px rgba(255, 176, 32, 0.14),
      0 0 24px rgba(255, 176, 32, 0.2);
  }

  .word {
    display: flex;
    flex-direction: column;
    line-height: 1;
    text-align: left;
  }
  .name {
    display: inline-flex;
    align-items: flex-end;
    font-family: var(--font-brand);
    font-weight: 600;
    font-size: 1.12rem;
    letter-spacing: 0.16em;
    color: var(--text);
  }
  /* terminal node — echoes the mark's bars */
  .name b {
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 1.5px;
    background: var(--live);
    margin-left: 3px;
    margin-bottom: 1px;
    box-shadow: 0 0 6px rgba(255, 176, 32, 0.55);
  }
  .word em {
    font-style: normal;
    font-family: var(--font-mono);
    font-weight: 400;
    font-size: 0.58rem;
    letter-spacing: 0.26em;
    text-transform: uppercase;
    color: var(--faint);
    margin-top: 6px;
  }
`;
