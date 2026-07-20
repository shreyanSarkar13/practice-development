
async function addItems() {
    try {
        const name = document.getElementById("name").value;
        const price = Number(document.getElementById("price").value);

        const response = await fetch("http://localhost:1000/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
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


