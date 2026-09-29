import PixelArt from '@/Components/PixelArt/PixelArt';
import { marioRaccoonGrid } from '@/Data/Characters/Nintendo/marioRaccoon';

export default function MarioRaccoon() {
  return <PixelArt className="marioRaccoon" grid={ marioRaccoonGrid } />;
}
