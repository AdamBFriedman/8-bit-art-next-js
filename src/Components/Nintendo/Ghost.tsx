import PixelArt from '@/Components/PixelArt/PixelArt';
import { ghostGrid } from '@/Data/Characters/Nintendo/ghost';

export default function Ghost() {
  return <PixelArt className="ghost" grid={ ghostGrid } />;
}
