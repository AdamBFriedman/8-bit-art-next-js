import PixelArt from '@/Components/PixelArt/PixelArt';
import { ucfGrid } from '@/Data/Characters/ucf';

export default function UCF() {
  return <PixelArt className="ucf" grid={ucfGrid} />;
}
