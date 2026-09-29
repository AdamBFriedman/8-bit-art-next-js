import PixelArt from '@/Components/PixelArt/PixelArt';
import { marioGrid } from '@/Data/Characters/Nintendo/mario';

export default function Mario() {
  return <PixelArt className="mario" grid={ marioGrid } />;
}
