import PixelArt from '@/Components/PixelArt/PixelArt';
import { bambiGrid } from '@/Data/Characters/Disney/bambi';

export default function Bambi() {
  return <PixelArt className="bambi" grid={bambiGrid} />;
}
