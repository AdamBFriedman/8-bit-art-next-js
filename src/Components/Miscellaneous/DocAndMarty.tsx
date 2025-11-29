import PixelArt from '@/Components/PixelArt/PixelArt';
import { docAndMartyGrid } from '@/Data/Characters/docAndMarty';

export default function DocAndMarty() {
  return <PixelArt className="docAndMarty" grid={docAndMartyGrid} />;
}
