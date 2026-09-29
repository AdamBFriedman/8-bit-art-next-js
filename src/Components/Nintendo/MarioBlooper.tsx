import PixelArt from '@/Components/PixelArt/PixelArt';
import { marioBlooperGrid } from '@/Data/Characters/Nintendo/marioBlooper';

export default function MarioBlooper() {
  return <PixelArt className="marioBlooper" grid={ marioBlooperGrid } />;
}
