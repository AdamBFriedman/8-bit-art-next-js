import PixelArt from '@/Components/PixelArt/PixelArt';
import { pokeBallGrid } from '@/Data/Characters/Pokemon/pokeBall';

export default function PokeBall() {
  return <PixelArt className="pokeBall" grid={ pokeBallGrid } />;
}
