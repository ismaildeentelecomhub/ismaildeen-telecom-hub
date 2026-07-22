async function loadPlans() {

    const network = document.getElementById("network").value;
    const planSelect = document.getElementById("variation_code");

    planSelect.innerHTML = '<option value="">Loading...</option>';

    try {

        const response = await fetch(
            `https://ismaildeen-telecom-backend.onrender.com/api/vtpass/data-plans/${network}`
        );

        const result = await response.json();

        planSelect.innerHTML = '<option value="">Select Plan</option>';

        if (result.content && result.content.variations) {

            result.content.variations.forEach(plan => {

                planSelect.innerHTML += `
                    <option value="${plan.variation_code}">
                        ${plan.name}
                    </option>
                `;

            });

        }

    } catch (error) {

        planSelect.innerHTML = '<option value="">Unable to load plans</option>';
        console.log(error);

    }

}