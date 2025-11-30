import PixelArt from '@/Components/PixelArt/PixelArt';
import { waldoGrid } from '@/Data/Characters/waldo';

export default function Waldo() {
  return <PixelArt className="waldo" grid={waldoGrid} />;
}
