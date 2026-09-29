import PixelArt from '@/Components/PixelArt/PixelArt';
import { togepiGrid } from '@/Data/Characters/Pokemon/togepi';

export default function Togepi() {
  return <PixelArt className="togepi" grid={ togepiGrid } />;
}
