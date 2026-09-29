import PixelArt from '@/Components/PixelArt/PixelArt';
import { wallEGrid } from '@/Data/Characters/Disney/wallE';

export default function WallE() {
  return <PixelArt className="wallE" grid={wallEGrid} />;
}
