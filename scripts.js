function calculateTip(event) {
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let serviceQualit = document.getElementById('serviceQualit').value;
    let numofpeople = document.getElementById('people').value;

    if(bill == '' | serviceQualit == 0){
        alert("Por favor, preencha os valores")
        return; 
    }

    if(numofpeople == "" | numofpeople <= 1) {
        numofpeople = 1;
        document.getElementById('each').style.display = "none"
    } else {
        document.getElementById('each').style.display = "block"
    }

    let total = (bill * serviceQualit) / numofpeople;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block"
}

document.getElementById('totalTip').style.display = "none"
document.getElementById('each').style.display = "none"

document.getElementById('tipsForm').addEventListener('submit',calculateTip);
