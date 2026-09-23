import { mikeWazowskiGrid } from '@/Data/Characters/Disney/mikeWazowski';
import PixelArt from '../PixelArt/PixelArt';

export default function MikeWazowski() {
  return <PixelArt className="mikeWazowski" grid={mikeWazowskiGrid} />;
}
