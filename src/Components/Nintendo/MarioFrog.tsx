import PixelArt from '@/Components/PixelArt/PixelArt';
import { marioFrogGrid } from '@/Data/Characters/Nintendo/marioFrog';

export default function MarioFrog() {
  return <PixelArt className="marioFrog" grid={ marioFrogGrid } />;
}
