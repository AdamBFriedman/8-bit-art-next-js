import PixelArt from '@/Components/PixelArt/PixelArt';
import { deadpoolGrid } from '@/Data/Characters/Marvel/deadpool';

export default function Deadpool() {
  return <PixelArt className="deadpool" grid={ deadpoolGrid } />;
}
