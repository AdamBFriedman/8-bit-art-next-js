import PixelArt from '@/Components/PixelArt/PixelArt';
import { batmanGrid } from '@/Data/Characters/Miscellaneous/batman';

export default function Batman() {
  return <PixelArt className="batman" grid={batmanGrid} />;
}
