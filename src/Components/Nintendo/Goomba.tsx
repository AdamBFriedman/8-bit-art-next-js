import PixelArt from '@/Components/PixelArt/PixelArt';
import { goombaGrid } from '@/Data/Characters/Nintendo/goomba';

export default function Goomba() {
  return <PixelArt className="goomba" grid={ goombaGrid } />;
}
