import { genieGrid } from '@/Data/Characters/Disney/genie';
import PixelArt from '../PixelArt/PixelArt';

export default function Genie() {
  return <PixelArt className="genie" grid={genieGrid} />;
}
