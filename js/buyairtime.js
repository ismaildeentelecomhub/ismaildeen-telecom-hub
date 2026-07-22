async function buyAirtime() {

    const network = document.getElementById("network").value;
    const phone = document.getElementById("phone").value.trim();
    const amount = document.getElementById("amount").value;

    if (!network || !phone || !amount) {
        alert("Please fill all fields.");
        return;
    }

    try {

        const response = await fetch(
            "https://ismaildeen-telecom-backend.onrender.com/api/vtpass/buy-airtime",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    network,
                    phone,
                    amount,
                    request_id: "IDTH-" + Date.now()
                })
            }
        );

        const result = await response.json();

        alert(JSON.stringify(result, null, 2));

    } catch (error) {

        console.log(error);
        alert("Server Error");

    }

}

window.buyAirtime = buyAirtime;