// cash out
document.getElementById('btn-cash-out')
    .addEventListener('click', function(event){
        event.preventDefault();

        const inputCashOut = document.getElementById('input-cash-out').value;
        const cashOutNumber = parseFloat(inputCashOut);
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);

        if (isNaN(cashOutNumber)) {
            alert ('Failed to cash out!');
            return;
        }

        const pinNumberInput = document.getElementById('cash-out-pin').value;
        if (pinNumberInput === '1234') {
            if (cashOutNumber > balanceNumber) {
                alert('You do not have enough money to cash out');
                return;
            }
            const newBalance = balanceNumber - cashOutNumber;

            document.getElementById('account-balance').innerText = newBalance;
        }
        else{
            alert('Fail to cash out!')
        }
    })