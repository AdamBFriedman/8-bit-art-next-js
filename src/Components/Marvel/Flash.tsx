import PixelArt from '@/Components/PixelArt/PixelArt';
import { flashGrid } from '@/Data/Characters/Marvel/flash';

export default function Flash() {
  return <PixelArt className="flash" grid={ flashGrid } />;
}
