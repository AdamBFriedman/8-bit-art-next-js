import PixelArt from '@/Components/PixelArt/PixelArt';
import { grumpyCatGrid } from '@/Data/Characters/grumpyCat';

export default function GrumpyCat() {
  return <PixelArt className="grumpyCat" grid={grumpyCatGrid} />;
}
