import PixelArt from '@/Components/PixelArt/PixelArt';
import { jerryGrid } from '@/Data/Characters/Miscellaneous/jerry';

export default function Jerry() {
  return <PixelArt className="jerry" grid={jerryGrid} />;
}
