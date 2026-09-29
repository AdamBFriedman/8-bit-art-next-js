import PixelArt from '@/Components/PixelArt/PixelArt';
import { mushroomGrid } from '@/Data/Characters/Nintendo/mushroom';

export default function Mushroom() {
  return <PixelArt className="mushroom" grid={ mushroomGrid } />;
}
