import PixelArt from '@/Components/PixelArt/PixelArt';
import { freddyKreugerGrid } from '@/Data/Characters/Miscellaneous/freddyKreuger';

export default function FreddyKreuger() {
  return <PixelArt className="freddy" grid={freddyKreugerGrid} />;
}
