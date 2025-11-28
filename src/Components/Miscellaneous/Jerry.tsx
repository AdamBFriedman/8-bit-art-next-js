import PixelArt from '@/Components/PixelArt/PixelArt';
import { jerryGrid } from '@/Data/Characters/jerry';

export default function Jerry() {
  return <PixelArt className="jerry" grid={jerryGrid} />;
}
