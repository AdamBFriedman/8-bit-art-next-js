'use client';

import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: inline-block;
`;

const Tooltip = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: all 0.2s ease-in-out;
  z-index: 1000;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  letter-spacing: 0.5px;

  /* Cool arrow pointing down */
  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid #764ba2;
  }

  ${Container}:hover & {
    opacity: 1;
    transform: translateX(-50%) translateY(-5px);
  }
`;

interface PixelArtProps {
  className: string;
  grid: string[][];
}

function formatCharacterName(className: string): string {
  return className
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase())
    .trim();
}

export default function PixelArt({ className, grid }: PixelArtProps) {
  const displayName = formatCharacterName(className);

  return (
    <Container>
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className={`${className} wrapper`}>
          {row.map((color, colIndex) => (
            <div key={colIndex} className={color} />
          ))}
        </div>
      ))}
      <Tooltip>{displayName}</Tooltip>
    </Container>
  );
}
