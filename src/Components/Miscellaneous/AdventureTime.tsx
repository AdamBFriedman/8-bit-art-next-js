import PixelArt from '@/Components/PixelArt/PixelArt';
import { adventureTimeGrid } from '@/Data/Characters/adventureTime';

export default function AdventureTime() {
  return (
    <PixelArt className="adventureTime" grid={adventureTimeGrid} />
  );
}
