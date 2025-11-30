import PixelArt from '@/Components/PixelArt/PixelArt';
import { flounderGrid } from '@/Data/Characters/Disney/flounder';

export default function Flounder() {
  return <PixelArt className="flounder" grid={flounderGrid} />;
}
