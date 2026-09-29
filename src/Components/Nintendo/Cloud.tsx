import PixelArt from '@/Components/PixelArt/PixelArt';
import { cloudGrid } from '@/Data/Characters/Nintendo/cloud';

export default function Cloud() {
  return <PixelArt className="cloud" grid={ cloudGrid } />;
}
