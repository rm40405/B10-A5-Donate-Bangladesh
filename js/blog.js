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
    
    if(donationValue===''){
        alert('Donate Amount cannot be empty')
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
   log.style.fontSize = '30px';
   log.style.color = 'black';
    log.style.margin = '20px 60px 20px 60px';
    log.style.backgroundColor = 'rgba(255, 250, 255,255)';
    log.style.padding = '20px';
    log.style.border = '1px solid black';
    log.style.borderRadius = '10px';
    log.classList.add('notification');
    const dateTime = new Date().toLocaleString();
    log.innerHTML = `<div>
    <p>Donated $${donationValue.toFixed(2)} to account ${id}  , remaining amount: $${acountBalance.innerText}
    </p> <br/>
    <p>Donation date and time: ${dateTime}</p>
    </div>`;
    historyLog.appendChild(log);
    // clear the input
     input.value = '';    
    // reset donation input
   


}