import PixelArt from '@/Components/PixelArt/PixelArt';
import { monopolyManGrid } from '@/Data/Characters/Miscellaneous/monopolyMan';

export default function MonopolyMan() {
  return <PixelArt className="monopoly" grid={monopolyManGrid} />;
}
