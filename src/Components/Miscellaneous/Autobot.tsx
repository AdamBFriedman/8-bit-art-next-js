import PixelArt from '@/Components/PixelArt/PixelArt';
import { autobotGrid } from '@/Data/Characters/Miscellaneous/autobot';

export default function Autobot() {
  return <PixelArt className="autobot" grid={autobotGrid} />;
}
