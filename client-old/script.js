const createdTime = new Date();
console.log(createdTime.getTime());
async function getTimestamp() {
    setTimeout(() => {
        const currentTime = new Date();
        const timestamp = Math.floor((currentTime - createdTime) / 1000);
        document.getElementById("timestamp").innerHTML = `Timestamp: ${timestamp} seconds ago`;
    },5000);
}
getTimestamp();
async function addItems() {
    try {
        const name = document.getElementById("name").value;
        const price = Number(document.getElementById("price").value);

        const token = localStorage.getItem("token");

        const response = await fetch("http://localhost:1000/items/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                name: name,
                price: price
            })
        });
        const data = await response.json();
        //console.log(data);
        //const btn = document.getElementById("heading");
        //btn.innerHTML = data.title;
    }
    catch (error) {
        console.log(error);
    }
}

async function authUser() {
    const response = await fetch("http://localhost:1000/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: "Alex",
            email: "alexgmail.com",
            password: "123"
        })
    });
    const data = await response.json();
    console.log(data);
}
authUser();

async function loginUser() {
    const response = await fetch("http://localhost:1000/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: "Sophie",
            email: "sophie@gmail.com",
            password: "hello12345"
        })
    });
    const data = await response.json();
    console.log(data);
    localStorage.setItem("token", data.token);
}


async function getProducts() {
    const token = localStorage.getItem("token");
    const response = await fetch(
        "http://localhost:1000/items/products",
        {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
    );
    const data = await response.json();
    console.log(data);
}

async function start() {

    await loginUser();

    await getProducts();

}

start();

async function sendData() {
    const response = await fetch("http://localhost:1000/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: "iphone-17",
            price: 150000
        })
    });
    const data = await response.json();
}

async function updateData() {
    const response = await fetch("http://localhost:1000/products/3", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: "iphone-ultra",
            price: 200000
        })
    });
    const data = await response.json();
}


