import { AddBasketButton } from "@/components/add-basket-button";
import { store } from "@/stores";
import { fetchProduct } from "@/stores/products-store";

export default async function ProductDetailPage({ params: { id } }) {
    await store.dispatch(fetchProduct(id))
    const { product } = store.getState().products

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <AddBasketButton product={product} />
    </div>
  );
}
