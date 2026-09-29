import PixelArt from '@/Components/PixelArt/PixelArt';
import { juggernautGrid } from '@/Data/Characters/Marvel/juggernaut';

export default function Juggernaut() {
  return <PixelArt className="juggernaut" grid={ juggernautGrid } />;
}
