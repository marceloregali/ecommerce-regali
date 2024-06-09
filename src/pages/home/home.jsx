import { ProductCard } from "../../components/productCard/ProductCard";

export const Home = () => {
  return (
    <div>
      <ProductCard
        title="tarjeta1"
        description="esta es la primer tarjeta"
        price={100}
      />
      <ProductCard
        title="tarjeta2"
        description="esta es la segjnda tarjeta"
        price={200}
      />
    </div>
  );
};
