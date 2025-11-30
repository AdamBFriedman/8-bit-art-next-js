import PixelArt from '@/Components/PixelArt/PixelArt';
import { bertGrid } from '@/Data/Characters/Miscellaneous/bert';

export default function Bert() {
  return <PixelArt className="bert" grid={bertGrid} />;
}
