import PixelArt from '@/Components/PixelArt/PixelArt';
import { eminemGrid } from '@/Data/Characters/eminem';

export default function Eminem() {
  return <PixelArt className="eminem" grid={eminemGrid} />;
}
