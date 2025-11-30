import PixelArt from '@/Components/PixelArt/PixelArt';
import { snoopyGrid } from '@/Data/Characters/Miscellaneous/snoopy';

export default function Snoopy() {
  return <PixelArt className="snoopy" grid={snoopyGrid} />;
}
