import PixelArt from '@/Components/PixelArt/PixelArt';
import { thorGrid } from '@/Data/Characters/Marvel/thor';

export default function Thor() {
  return <PixelArt className="thor" grid={thorGrid} />;
}
