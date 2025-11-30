import PixelArt from '@/Components/PixelArt/PixelArt';
import { powerpuffGirlsGrid } from '@/Data/Characters/Miscellaneous/powerpuffGirls';

export default function PowerpuffGirls() {
  return <PixelArt className="powerpuff" grid={powerpuffGirlsGrid} />;
}
