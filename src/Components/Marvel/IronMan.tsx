import PixelArt from '@/Components/PixelArt/PixelArt';
import { ironManGrid } from '@/Data/Characters/Marvel/ironMan';

export default function IronMan() {
  return <PixelArt className="ironMan" grid={ ironManGrid } />;
}
