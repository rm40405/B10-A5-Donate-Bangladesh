// function show donation
function showDonation() {
    document.getElementById('donation').classList.remove('hidden');
    document.getElementById('history').classList.add('hidden');
}
function showHistory() {
    document.getElementById('donation').classList.add('hidden');
    document.getElementById('history').classList.remove('hidden');
}

function donate(id) {
    // 
    
    const acountBalance = document.getElementById('acount-balance');
    const donateAmount = document.getElementById(`donate-amount${id}`);
    const donateInput = document.getElementById(`donate-input${id}`).value;
    const donationValue = parseFloat(donateInput);

    if(isNaN(donationValue) || donationValue <= 0){
        alert('please enter a valid donation');
        return;
    }
    const balance = parseFloat(acountBalance.innerText);
    if(balance < donationValue){
        alert('insufficient funds');
        return;
    }
    
    const newBalance = balance - donationValue;
    acountBalance.innerText = newBalance.toFixed(2);
    
    const currentDonation = parseFloat(donateAmount.innerText);
    donateAmount.innerText = (currentDonation + donationValue).toFixed(2);

    // history
   const historyLog = document.getElementById('history-log');
   const log = document.createElement('div');
    log.classList.add('notification');
    log.innerText = `Donated $${donationValue.toFixed(2)} to account ${id}  , remaining amount: $${acountBalance.innerText}`;
    historyLog.appendChild(log);
    // clear the input
     input.value = '';    
    // reset donation input


}