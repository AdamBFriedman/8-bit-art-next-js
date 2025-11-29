import PixelArt from '@/Components/PixelArt/PixelArt';
import { pacmanGrid } from '@/Data/Characters/pacman';

export default function Pacman() {
  return <PixelArt className="pacmanGhost" grid={pacmanGrid} />;
}
