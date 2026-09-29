import PixelArt from '@/Components/PixelArt/PixelArt';
import { controllerGrid } from '@/Data/Characters/Nintendo/controller';

export default function Controller() {
  return <PixelArt className="controller" grid={ controllerGrid } />;
}
