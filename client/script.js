
async function show() {
    try {
        const response = await fetch("http://localhost:1000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: "Shreyan",
                email: "ss@gmail.com"
            })
        });
        const data = await response.json();
        console.log(data);
        //const btn = document.getElementById("heading");
        //btn.innerHTML = data.title;
    }
    catch (error) {
        console.log(error);
    }
}
