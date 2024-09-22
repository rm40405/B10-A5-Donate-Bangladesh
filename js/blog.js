// function show donation
function showDonation(){
    document.getElementById('donation').classList.remove('hidden');
    document.getElementById('history').classList.add('hidden');
}
function showHistory(){
    document.getElementById('donation').classList.add('hidden');
    document.getElementById('history').classList.remove('hidden');
}