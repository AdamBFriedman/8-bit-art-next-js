import PixelArt from '@/Components/PixelArt/PixelArt';
import { r2d2Grid } from '@/Data/Characters/StarWars/r2d2';

export default function R2D2() {
  return <PixelArt className="r2d2" grid={ r2d2Grid } />;
}
