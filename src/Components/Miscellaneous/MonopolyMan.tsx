import PixelArt from '@/Components/PixelArt/PixelArt';
import { monopolyManGrid } from '@/Data/Characters/monopolyMan';

export default function MonopolyMan() {
  return <PixelArt className="monopoly" grid={monopolyManGrid} />;
}
