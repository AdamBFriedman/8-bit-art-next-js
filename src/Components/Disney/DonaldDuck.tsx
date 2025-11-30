import PixelArt from '@/Components/PixelArt/PixelArt';
import { donaldDuckGrid } from '@/Data/Characters/Disney/donaldDuck';

export default function DonaldDuck() {
  return <PixelArt className="donaldDuck" grid={donaldDuckGrid} />;
}
