async function buyData() {

    const network = document.getElementById("network").value;
    const variation_code = document.getElementById("variation_code").value;
    const phone = document.getElementById("phone").value;
    const amount = document.getElementById("amount").value;

    if (!network || !variation_code || !phone || !amount) {
        alert("Please fill all fields.");
        return;
    }

    const request_id = "IDTH-" + Date.now();

    try {

        const response = await fetch(
            "https://ismaildeen-telecom-backend.onrender.com/api/vtpass/buy-data",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    network,
                    variation_code,
                    phone,
                    amount,
                    request_id
                })
            }
        );

        const result = await response.json();

        // Nuna duk amsar VTpass
        alert(JSON.stringify(result, null, 2));

        if (result.code === "000") {

            document.getElementById("result").innerHTML =
                "<p style='color:green;'>Transaction Successful</p>";

        } else {

            document.getElementById("result").innerHTML =
                "<p style='color:red;'>Transaction Failed</p>";

        }

    } catch (error) {

        alert("Server Error");
        console.log(error);

    }

}