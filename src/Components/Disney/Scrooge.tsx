import { scroogeGrid } from '@/Data/Characters/Disney/scrooge';
import PixelArt from '../PixelArt/PixelArt';

export default function Scrooge() {
  return <PixelArt className="scrooge" grid={scroogeGrid} />;
}
