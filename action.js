const xucXac = ['bau', 'cua', 'tom', 'ca', 'ga', 'nai'];
var players = [];

(function () {
    let i = 1;
    do {
    var response = prompt('Nhập tên người chơi, ấn Cancel để vào game','Người chơi ' + i);
    players.push(response);
    console.log(players[2]);
    i++;
    } while (response !== null);
})()

    ; function Roll() {
        document.getElementById('result').innerHTML = xucXac[Math.floor(Math.random() * (xucXac.length))];
        document.getElementById('result2').innerHTML = xucXac[Math.floor(Math.random() * (xucXac.length))];
        document.getElementById('result3').innerHTML = xucXac[Math.floor(Math.random() * (xucXac.length))];
    }

// check if user response or not 
// {
//     var response = prompt("Enter a response", "No response entered");
//     if (response) {
//         console.log("run the code");
//     } else {
//         console.log("Bye");
//     }
// }