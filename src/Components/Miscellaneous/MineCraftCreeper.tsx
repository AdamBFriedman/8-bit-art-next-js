import PixelArt from '@/Components/PixelArt/PixelArt';
import { mineCraftCreeperGrid } from '@/Data/Characters/Miscellaneous/mineCraftCreeper';

export default function MineCraftCreeper() {
  return <PixelArt className="creeper" grid={mineCraftCreeperGrid} />;
}
