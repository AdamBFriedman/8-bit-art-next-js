interface PixelArtProps {
  className: string;
  grid: string[][];
}

export default function PixelArt({ className, grid }: PixelArtProps) {
  return (
    <div className="componentWrapper">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className={`${className} wrapper`}>
          {row.map((color, colIndex) => (
            <div key={colIndex} className={color} />
          ))}
        </div>
      ))}
    </div>
  );
}
