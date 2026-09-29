import PixelArt from '@/Components/PixelArt/PixelArt';
import { leonardoGrid } from '@/Data/Characters/TMNT/leonardo';

export default function Leonardo() {
  return <PixelArt className="leonardo" grid={ leonardoGrid } />;
}
