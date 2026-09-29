import PixelArt from '@/Components/PixelArt/PixelArt';
import { gameboyGrid } from '@/Data/Characters/Nintendo/gameboy';

export default function Gameboy() {
  return <PixelArt className="gameboy" grid={ gameboyGrid } />;
}
