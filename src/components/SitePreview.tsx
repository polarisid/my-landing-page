import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const BASE_W = 1280;

type Props = {
  /** URL loaded in the live iframe (use the embeddable variant) */
  url: string;
  /** hostname shown in the fake browser bar */
  host: string;
};

/**
 * Live preview of a website inside a browser-chrome frame. The page renders
 * at desktop width and is scaled to fit the card; on card hover it pans down
 * (see `.card:hover .shot` in Projects) to simulate scrolling through the site.
 */
export default function SitePreview({ url, host }: Props) {
  const vpRef = useRef<HTMLDivElement | null>(null);
  const [k, setK] = useState(0.42);

  useEffect(() => {
    const el = vpRef.current;
    if (!el) return;
    const update = () => setK(el.clientWidth / BASE_W);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <Wrap>
      <div className="chrome">
        <span className="dots">
          <i />
          <i />
          <i />
        </span>
        <span className="bar">{host}</span>
        <span className="live">
          <b />
          ao vivo
        </span>
      </div>

      <div className="viewport" ref={vpRef}>
        <div className="shot" style={{ ["--k" as string]: `${k}` }}>
          <iframe
            src={url}
            title={host}
            loading="lazy"
            scrolling="no"
            aria-hidden="true"
            tabIndex={-1}
            sandbox="allow-scripts allow-same-origin allow-popups"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="sheen" />
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  border: 1px solid var(--line);
  border-radius: 12px;
  overflow: hidden;
  background: var(--panel-2);

  .chrome {
    display: flex;
    align-items: center;
    gap: 10px;
    height: 30px;
    padding: 0 12px;
    background: var(--panel);
    border-bottom: 1px solid var(--line);
  }
  .dots {
    display: inline-flex;
    gap: 5px;
  }
  .dots i {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--line-bright);
  }
  .dots i:first-child {
    background: #ff5f57;
  }
  .dots i:nth-child(2) {
    background: #febc2e;
  }
  .dots i:nth-child(3) {
    background: #28c840;
  }
  .bar {
    flex: 1;
    text-align: center;
    font-family: var(--font-mono);
    font-size: 0.68rem;
    color: var(--muted);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .live {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-family: var(--font-mono);
    font-size: 0.6rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--signal);
  }
  .live b {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--signal);
    box-shadow: 0 0 7px var(--signal);
  }

  .viewport {
    position: relative;
    height: 196px;
    overflow: hidden;
  }
  .shot {
    position: absolute;
    top: 0;
    left: 0;
    width: ${BASE_W}px;
    transform-origin: top left;
    transform: scale(var(--k, 0.42));
    transition: transform 6.5s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: transform;
  }
  .shot iframe {
    display: block;
    width: ${BASE_W}px;
    height: 2400px;
    border: 0;
    pointer-events: none;
    background: #fff;
  }
  .sheen {
    position: absolute;
    inset: 0;
    pointer-events: none;
    box-shadow: inset 0 -40px 40px -30px rgba(0, 0, 0, 0.5);
  }
`;
