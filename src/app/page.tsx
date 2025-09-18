import { Button } from '@/ui/components/Button';
import ProductCard from '@/ui/components/ProductCard';
import luxurybaner from '../assets/products/fashion-portrait-young-elegant-woman.jpg';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-background h-screen items-center justify-items-center overflow-hidden pt-[60px] font-sans">
      <div className="flex w-full items-center">
        <div className="absolute pl-9">
          <p>Luxury</p>
          <p>Fashion</p>
          <p>& Accessories</p>
        </div>
        <Image className="w-full" alt="luxury banner" src={luxurybaner} />
      </div>
    </div>
  );
}
