import { Button } from "@/ui/components/Button";
import Icon from "@/ui/components/icons";



export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-amber-50">
      <Icon name="backward" className="w[18px] "/>
      <p className="text-black">Luxury Fashion & accessorys</p>
      <Button></Button>
    </div>
  );
}
