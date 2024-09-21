// cash out
document.getElementById('btn-cash-out')
    .addEventListener('click', function(event){
        event.preventDefault();

        const inputCashOut = document.getElementById('input-cash-out').value;
        const cashOutNumber = parseFloat(inputCashOut);
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);

        const pinNumberInput = document.getElementById('cash-out-pin').value;
        if (pinNumberInput === '1234') {
            const newBalance = balanceNumber - cashOutNumber;

            document.getElementById('account-balance').innerText = newBalance;
        }
        else{
            alert('Fail to cash out!')
        }
    })