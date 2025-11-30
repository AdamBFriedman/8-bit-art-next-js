import PixelArt from '@/Components/PixelArt/PixelArt';
import { punisherGrid } from '@/Data/Characters/Miscellaneous/punisher';

export default function Punisher() {
  return <PixelArt className="punisher" grid={punisherGrid} />;
}
