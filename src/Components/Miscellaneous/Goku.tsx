import PixelArt from '@/Components/PixelArt/PixelArt';
import { gokuGrid } from '@/Data/Characters/Miscellaneous/goku';

export default function Goku() {
  return <PixelArt className="goku" grid={gokuGrid} />;
}
