import PixelArt from '@/Components/PixelArt/PixelArt';
import { ludwigVonGrid } from '@/Data/Characters/Nintendo/ludwigVon';

export default function LudwigVon() {
  return <PixelArt className="ludwigVon" grid={ ludwigVonGrid } />;
}
