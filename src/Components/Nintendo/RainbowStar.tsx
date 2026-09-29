import PixelArt from '@/Components/PixelArt/PixelArt';
import { rainbowStarGrid } from '@/Data/Characters/Nintendo/rainbowStar';

export default function RainbowStar() {
  return <PixelArt className="rainbowStar" grid={ rainbowStarGrid } />;
}
