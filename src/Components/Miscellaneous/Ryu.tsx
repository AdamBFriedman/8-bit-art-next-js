import PixelArt from '@/Components/PixelArt/PixelArt';
import { ryuGrid } from '@/Data/Characters/Miscellaneous/ryu';

export default function Ryu() {
  return <PixelArt className="ryu" grid={ryuGrid} />;
}
