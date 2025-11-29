import PixelArt from '@/Components/PixelArt/PixelArt';
import { mineCraftSteveGrid } from '@/Data/Characters/mineCraftSteve';

export default function MineCraftSteve() {
  return <PixelArt className="steve" grid={mineCraftSteveGrid} />;
}
