import PixelArt from '@/Components/PixelArt/PixelArt';
import { megaManGrid } from '@/Data/Characters/Nintendo/megaMan';

export default function MegaMan() {
  return <PixelArt className="megaMan" grid={ megaManGrid } />;
}
