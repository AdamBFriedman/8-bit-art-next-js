import PixelArt from '@/Components/PixelArt/PixelArt';
import { brianGriffinGrid } from '@/Data/Characters/brianGriffin';

export default function BrianGriffin() {
  return (
    <PixelArt className="brianGriffin" grid={brianGriffinGrid} />
  );
}
