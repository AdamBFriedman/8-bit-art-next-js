import PixelArt from '@/Components/PixelArt/PixelArt';
import { pikachuGrid } from '@/Data/Characters/Pokemon/pikachu';

export default function Pikachu() {
  return <PixelArt className="pikachu" grid={ pikachuGrid } />;
}
