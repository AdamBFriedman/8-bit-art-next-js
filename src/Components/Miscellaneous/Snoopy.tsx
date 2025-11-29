import PixelArt from '@/Components/PixelArt/PixelArt';
import { snoopyGrid } from '@/Data/Characters/snoopy';

export default function Snoopy() {
  return <PixelArt className="snoopy" grid={snoopyGrid} />;
}
