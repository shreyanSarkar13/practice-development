import { useState } from "react";
import { addProduct } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const handleAddProduct = async () => {
        try {
            const data = await addProduct(name, Number(price));

            console.log(data);

            setName("");
            setPrice("");

            navigate("/products");

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="add-product-page">

            <h1>Add Product</h1>

            <p>Add a new product to your inventory.</p>


            <div className="add-product-form">

                <input
                    type="text"
                    placeholder="Product name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />


                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />


                <div className="form-actions">

                    <button
                        onClick={() => navigate("/products")}
                    >
                        Cancel
                    </button>

                    <button onClick={handleAddProduct}>
                        Add Product
                    </button>

                </div>

            </div>

        </div>
    );
}