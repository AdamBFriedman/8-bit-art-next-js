import PixelArt from '@/Components/PixelArt/PixelArt';
import { gokuGrid } from '@/Data/Characters/goku';

export default function Goku() {
  return <PixelArt className="goku" grid={gokuGrid} />;
}
