import PixelArt from '@/Components/PixelArt/PixelArt';
import { cupheadGrid } from '@/Data/Characters/cuphead';

export default function Cuphead() {
  return <PixelArt className="cuphead" grid={cupheadGrid} />;
}
