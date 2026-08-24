export async function loginUser(name: string, email: string, password: string) {
    const response = await fetch("http://localhost:1000/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            email,
            password
        })
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Login failed");
    }
    return data;
}

export async function registerUser(
    name: string,
    email: string,
    password: string
) {
    const response = await fetch(
        "http://localhost:1000/auth/register",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                name,
                email,
                password,
            }),
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.message || "Registration failed"
        );
    }

    return data;
}

export async function getProducts() {
    const token = localStorage.getItem("token");

    const response = await fetch(
        "http://localhost:1000/items/products",
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Failed to fetch products");
    }

    return data;
}

export async function addProduct(name: string, price: number) {
    const token = localStorage.getItem("token");

    const response = await fetch(
        "http://localhost:1000/items/products",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                name,
                price,
            }),
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Failed to add product");
    }

    return data;
}

export async function deleteProduct(id: number) {
    const token = localStorage.getItem("token");

    const response = await fetch(
        `http://localhost:1000/items/products/${id}`,
        {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.message || "Failed to delete product"
        );
    }

    return data;
}