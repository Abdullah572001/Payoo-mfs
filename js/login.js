// console.log('Abdullah');

// step-1
document.getElementById('btn-login').addEventListener('click', function(event){
        // step-2
        event.preventDefault();

        // step-3
        const phoneNumber = document.getElementById('phone-number').value;
        const pinnumber = document.getElementById('pin-number').value;

        // console.log(phoneNumber, pinnumber);

        // step-4
        if (phoneNumber === 'Bondhon' && pinnumber === '1234') {
            console.log('You are logged in');
            // step-5
            window.location.href = './home.html';
        }
        else{
            alert('wrong phone number or pin')
        }
    })