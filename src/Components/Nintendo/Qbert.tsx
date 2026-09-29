import PixelArt from '@/Components/PixelArt/PixelArt';
import { qbertGrid } from '@/Data/Characters/Nintendo/qbert';

export default function Qbert() {
  return <PixelArt className="qbert" grid={ qbertGrid } />;
}
