import PixelArt from '@/Components/PixelArt/PixelArt';
import { rickGrid } from '@/Data/Characters/rick';

export default function Rick() {
  return <PixelArt className="rick" grid={rickGrid} />;
}
