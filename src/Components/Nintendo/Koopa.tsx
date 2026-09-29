import PixelArt from '@/Components/PixelArt/PixelArt';
import { koopaGrid } from '@/Data/Characters/Nintendo/koopa';

export default function Koopa() {
  return <PixelArt className="koopa" grid={ koopaGrid } />;
}
