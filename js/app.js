let userName = prompt("whats your name");
alert ("welcome " + userName);




let Numbers = Number(prompt( "Dear " + userName + " please do not enter the desired number to perform the operation"));
let Option = prompt("Dear " + userName + " Proceed with odd or even operations");

for (let i =2; i <= Numbers; i++) {
    if ( i % 2 == 0) {
        console.log(i)
    }
}

