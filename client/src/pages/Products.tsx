import { useState } from "react";
import { getProducts, deleteProduct } from "../services/api";
import { useNavigate } from "react-router-dom";

type Product = {
    id: number;
    name: string;
    price: number;
};

export default function Products() {
    const navigate = useNavigate();
    const [products, setProducts] = useState<Product[]>([]);
    const [openMenuId, setOpenMenuId] = useState<number | null>(null);
    const [loading, setLoading] = useState(false);

    const handleGetProducts = async () => {
        try {
            setLoading(true);
            const data = await getProducts();

            setProducts(data);
        } catch (error) {
            console.error(error);
        }
        finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: number) => {
        try {
            await deleteProduct(id);

            setProducts((currentProducts) =>
                currentProducts.filter((product) => product.id !== id)
            );
        } catch (error) {
            console.error(error);
            alert("Failed to delete product");
        }
    };

    return (
        <div className="products-page">
            <div className="products-header">
                <div className="products-title">
                    <h1>Products</h1>
                    <p>View and manage your products.</p>
                </div>

                <button
                    className="logout-button"
                    onClick={() => navigate("/logout")}
                >
                    Logout
                </button>
            </div>

            <div className="product-actions">
                <button
                    onClick={handleGetProducts}
                    disabled={loading}
                >
                    {loading ? "Loading..." : "Get Products"}
                </button>

                <button onClick={() => navigate("/products/add")}>
                    Add Product
                </button>
            </div>

            {products.length > 0 && (
                <div className="table-card">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Product</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td>
                                        {product.id}
                                    </td>
                                    <td>
                                        {product.name}
                                    </td>
                                    <td>
                                        ₹{Number(product.price).toLocaleString("en-IN")}
                                    </td>
                                    <td className="actions-cell">
                                        <div className="row-menu">
                                            <button
                                                className="three-dot-button"
                                                onClick={() =>
                                                    setOpenMenuId(
                                                        openMenuId === product.id
                                                            ? null
                                                            : product.id
                                                    )
                                                }
                                            >
                                                ⋮
                                            </button>

                                            {openMenuId === product.id && (
                                                <div className="row-menu-dropdown">
                                                    <button
                                                        onClick={() =>
                                                            handleDelete(product.id)
                                                        }
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
