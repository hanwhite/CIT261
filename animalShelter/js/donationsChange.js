change();
function change() {
    
    let number = 205;
    for (i=0; i < 25; i++) {
        let dNum = document.getElementById("donationNumber");
        let randNum = Math.floor(Math.random() * 100);
        number = randNum + number;
        dNum.innerHTML = number;
    }
}
