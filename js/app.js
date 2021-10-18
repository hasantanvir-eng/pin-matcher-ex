console.log('I am connected with html file');
function generatePin(){
    // console.log('pin genrator clicked');
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    // console.log(pin);
    // console.log(pinString);
    document.getElementById('display-pin').value = pinString;
    if(pinString.length == 4){
        document.getElementById('display-pin').value = pinString;
    }
    else{
        generatePin();
    }
}

document.getElementById('key-pad').addEventListener('click', function(event){
    // console.log('key clicked');
    // console.log(event.target);
    // console.log(event.target.innerText);
    let number = event.target.innerText;
    const calcDisplay = document.getElementById('display-key');
    if(isNaN(number)){
        if(number == 'C'){
            calcDisplay.value = '';
        }
    }
    else{
        const previousNumber = calcDisplay.value;
        const newNumber = previousNumber + number;
        calcDisplay.value = newNumber;
    } 
});

function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const number = document.getElementById('display-key').value;
    if(pin == number){
        // console.log('password matched, hurray');
        document.getElementById('pin-fail').style.display = 'none';
        document.getElementById('pin-success').style.display = 'block';
    }
    else{
        // console.log('opps');
        document.getElementById('pin-success').style.display = 'none';
        document.getElementById('pin-fail').style.display = 'block';
    }
}

