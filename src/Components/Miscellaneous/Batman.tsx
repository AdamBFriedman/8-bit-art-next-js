import PixelArt from '@/Components/PixelArt/PixelArt';
import { batmanGrid } from '@/Data/Characters/batman';

export default function Batman() {
  return <PixelArt className="batman" grid={batmanGrid} />;
}
