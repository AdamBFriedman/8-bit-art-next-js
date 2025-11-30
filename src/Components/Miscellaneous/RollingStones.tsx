import PixelArt from '@/Components/PixelArt/PixelArt';
import { rollingStonesGrid } from '@/Data/Characters/rollingStones';

export default function RollingStones() {
  return (
    <PixelArt className="rollingStones" grid={rollingStonesGrid} />
  );
}
