import { Button } from '@/ui/components/Button';

interface ProductCardProps {
  image: string;
  brand: string;
  name: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviewCount: number;
  sizes: string[];
}

const ProductCard = ({
  image,
  brand,
  name,
  price,
  originalPrice,
  rating = 4,
  reviewCount,
  sizes,
}: ProductCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-sm ${i < rating ? 'text-star' : 'text-muted-foreground'}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="bg-card bg-card text-card-foreground overflow-hidden rounded-lg border shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <div className="bg-accent aspect-[4/5] overflow-hidden rounded-t-lg">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>

      <div className="space-y-3 p-4">
        <div>
          <p className="text-foreground text-sm font-medium tracking-wide uppercase">{brand}</p>
          <h3 className="text-foreground mt-1 line-clamp-2 text-sm">{name}</h3>
        </div>

        {renderStars(rating)}

        <div className="flex items-center space-x-2">
          <span className="text-price text-sm font-medium">{price}</span>
          {originalPrice && (
            <span className="text-muted-foreground text-xs line-through">{originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
