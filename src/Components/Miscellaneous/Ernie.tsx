import PixelArt from '@/Components/PixelArt/PixelArt';
import { ernieGrid } from '@/Data/Characters/Miscellaneous/ernie';

export default function Ernie() {
  return <PixelArt className="ernie" grid={ernieGrid} />;
}
