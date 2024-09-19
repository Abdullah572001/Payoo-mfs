// console.log('Abdullah');

// step-1
document.getElementById('btn-login').addEventListener('click', function(event){
        // step-2
        event.preventDefault();
        console.log('clicked hoyache');

        // step-3
        const phoneNumber = document.getElementById('phone-number').value;
        console.log(phoneNumber);
        
    })