import PixelArt from '@/Components/PixelArt/PixelArt';
import { autobotGrid } from '@/Data/Characters/autobot';

export default function Autobot() {
  return <PixelArt className="autobot" grid={autobotGrid} />;
}
