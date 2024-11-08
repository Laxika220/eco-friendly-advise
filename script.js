document.addEventListener('DOMContentLoaded', function() {
    const tips = [
        "Use reusable bags instead of plastic.",
        "Bring your own water bottle.",
        "Compost your food scraps.",
        "Conserve water by taking shorter showers.",
        "Unplug electronics when not in use."
    ];

    const tipList = document.getElementById('tipList');
    const tipForm = document.getElementById('tipForm');
    const newTipInput = document.getElementById('newTip');

    function displayTips() {
        tipList.innerHTML = "";
        tips.forEach(tip => {
            const listItem = document.createElement('li');
            listItem.textContent = tip;
            tipList.appendChild(listItem);
        });
    }

    tipForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const newTip = newTipInput.value.trim();
        if (newTip) {
            tips.push(newTip);
            newTipInput.value = "";
            displayTips();
        }
    });

    displayTips();
});
