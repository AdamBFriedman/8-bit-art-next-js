import PixelArt from '@/Components/PixelArt/PixelArt';
import { raphaelGrid } from '@/Data/Characters/TMNT/raphael';

export default function Raphael() {
  return <PixelArt className="raphael" grid={ raphaelGrid } />;
}
