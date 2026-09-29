import PixelArt from '@/Components/PixelArt/PixelArt';
import { michelangeloGrid } from '@/Data/Characters/TMNT/michelangelo';

export default function Michelangelo() {
  return <PixelArt className="michelangelo" grid={ michelangeloGrid } />;
}
