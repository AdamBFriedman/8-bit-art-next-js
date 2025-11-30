import PixelArt from '@/Components/PixelArt/PixelArt';
import { smurfGrid } from '@/Data/Characters/smurf';

export default function Smurf() {
  return <PixelArt className="smurf" grid={smurfGrid} />;
}
