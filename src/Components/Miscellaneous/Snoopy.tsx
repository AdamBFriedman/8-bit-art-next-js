import PixelArt from '@/Components/PixelArt/PixelArt';
import { snoopyGrid } from '@/Data/Characters/Snoopy';

export default function Snoopy() {
  return <PixelArt className="snoopy" grid={snoopyGrid} />;
}
