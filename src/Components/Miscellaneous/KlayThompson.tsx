import PixelArt from '@/Components/PixelArt/PixelArt';
import { klayThompsonGrid } from '@/Data/Characters/klayThompson';

export default function KlayThompson() {
  return <PixelArt className="klay" grid={klayThompsonGrid} />;
}
