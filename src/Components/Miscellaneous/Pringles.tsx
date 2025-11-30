import PixelArt from '@/Components/PixelArt/PixelArt';
import { pringlesGrid } from '@/Data/Characters/pringles';

export default function Pringles() {
  return <PixelArt className="pringles" grid={pringlesGrid} />;
}
