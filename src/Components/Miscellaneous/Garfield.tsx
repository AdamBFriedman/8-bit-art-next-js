import PixelArt from '@/Components/PixelArt/PixelArt';
import { garfieldGrid } from '@/Data/Characters/garfield';

export default function Garfield() {
  return <PixelArt className="garfield" grid={garfieldGrid} />;
}
