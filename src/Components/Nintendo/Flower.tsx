import PixelArt from '@/Components/PixelArt/PixelArt';
import { flowerGrid } from '@/Data/Characters/Nintendo/flower';

export default function Flower() {
  return <PixelArt className="flower" grid={ flowerGrid } />;
}
