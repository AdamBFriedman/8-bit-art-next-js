import PixelArt from '@/Components/PixelArt/PixelArt';
import { captainAmericaGrid } from '@/Data/Characters/Marvel/captainAmerica';

export default function CaptainAmerica() {
  return <PixelArt className="captainAmerica" grid={ captainAmericaGrid } />;
}
