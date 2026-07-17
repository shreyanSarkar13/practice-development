import products from "../data/products.js";

export function serverStart(req, res) {
    res.status(200).send("Server Running");
};
export function search(req, res) {
    res.json(req.query);
}
export function searchId(req, res) {
    res.json({
        "product-id": req.params.id
    });
}
export function test(req, res) {
    res.json({
        message: "Hello from backend",
        success: true
    });
}
export function api(req, res) {
    res.json({
        "id": 43,
        "title": "Fjord of the North",
        "description": "The breathtaking beauty of the Norwegian fjords is a sight to behold.Towering cliffs rise dramatically from the calm, deep waters, creating a dramatic and awe-inspiring landscape.",
        "price": 29.99,
        "image": "https://images.pexels.com/photos/3534416/pexels-photo-3534416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "rating": {
            "rate": 4.5,
            "count": 120
        }
    });
}
export function docs(req, res) {
    res.send(
        `<table>
            <tr>
                <th>ID</th>
                <th>API</th>
                <th>Purpose</th>
            </tr>
            <tr>
                <td>1</td>
                <td>/</td>
                <td>Status of server</td>
            </tr>
            <tr>
                <td>2</td>
                <td>/test</td>
                <td>response from server with a message</td>
            </tr>
            <tr>
                <td>3</td>
                <td>/api</td>
                <td>live api data sample</td>
            </tr>
        </table>`
    );
}
export function users(req, res) {
    console.log(req.body);
    res.json({
        recieved: req.body,
    })
}
export function getProducts(req, res) {
    res.json(products);
}
export function getProductsId(req, res) {
    const id = Number(req.params.id);
    const product = products.find((p) => id === p.id)
    if (!product) {
        res.status(404).json({
            message: "Product not found"
        });
    }
    res.status(200).json(product);
}
export function addProducts(req, res) {
    const { name, price } = req.body;

    if (!name || !price) {
        return res.status(404).json({
            message: "Product not found"
        });
    }
    const newId = products.length + 1;

    const newProduct = {
        id: newId,
        name,
        price
    }
    products.push(newProduct);
    res.status(200).json({
        mesaage: "New product created",
        product: newProduct
    });
}
export function updateProduct(req, res) {
    const id = Number(req.params.id);
    const index = products.findIndex((p) => p.id === id)

    if (index === -1) {
        return res.status(404).json({
            message: "Product does not exist"
        });
    }
    const { name, price } = req.body;
    products[index] = {
        id,
        name,
        price
    }
    res.status(200).json({
        message: "Product updated",
        product: products[index]
    })
}
export function deleteProduct(req, res) {
    const id = Number(req.params.id);
    const product = products.find((p) => p.id === id)

    if (!product) {
        return res.status(404).json({
            message: "Product does not exist"
        });
    }

    products = products.filter((p) => p.id !== id)
    res.json({
        message: "Product deleted",
    })
}