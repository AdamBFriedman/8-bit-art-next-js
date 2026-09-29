import PixelArt from '@/Components/PixelArt/PixelArt';
import { marioWeddingGrid } from '@/Data/Characters/Nintendo/marioWedding';

export default function MarioWedding() {
  return <PixelArt className="marioWedding" grid={ marioWeddingGrid } />;
}
