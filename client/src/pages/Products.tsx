import { getProducts } from "../services/api";

export default function Products() {

    const handleGetProducts = async () => {
        try {
            const data = await getProducts();

            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Products</h1>

            <button onClick={handleGetProducts}>
                Get Products
            </button>
        </div>
    );
}
