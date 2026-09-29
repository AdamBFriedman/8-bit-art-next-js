import PixelArt from '@/Components/PixelArt/PixelArt';
import { triForceGrid } from '@/Data/Characters/Nintendo/triForce';

export default function TriForce() {
  return <PixelArt className="triForce" grid={ triForceGrid } />;
}
