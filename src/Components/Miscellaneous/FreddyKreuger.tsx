import PixelArt from '@/Components/PixelArt/PixelArt';
import { freddyKreugerGrid } from '@/Data/Characters/freddyKreuger';

export default function FreddyKreuger() {
  return <PixelArt className="freddy" grid={freddyKreugerGrid} />;
}
