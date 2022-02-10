/* var nom = prompt ("Bonjour, quel est ton nom ?");
// document.write ("Bonjour " + nom); 
var text = "<h2>Coucou " + nom + " !</h2>";
const Mybody = document.body.innerHTML += text; 

var birth = prompt ("Quelle est ton année de naissance ?");
var year = 2022 - birth;

var old = "<h3>Vous avez " + year + " ans :)</h3>";
const My = document.body.innerHTML += old; */

function askName(){
    var nom = prompt ("Bonjour, quel est ton nom ?");       
    var text = "<h2>👋 Coucou " + nom + " !</h2>";
    const Mybody = document.body.innerHTML += text; 
}
askName();



var date = new Date()

/* function askBirthYear(){
    var yearBirth = prompt ("Quelle est ta date de naissance ?");
    var msBirth = (yearBirth - 1970) * 365 * 24 * 60 * 60 * 1000;
    var msAge = date - msBirth;
    var yearAge = msAge / 1000 / 60 /60 /24 /365;
    var old = "<h3>Vous avez " + yearAge + " ans :)</h3>";
    const My = document.body.innerHTML += old;
}
askBirthYear(); */

function askBirth(){
    var birthDayString = prompt ("Quelle est ta date de naissance ?", "2022/02/10");     
    var birthDayDate = Date.parse(birthDayString);
    var msAge = date - birthDayDate;
    var yearAge = msAge / 1000 / 60 /60 /24 /365;
    var old = "<h3>Vous avez " + yearAge + " ans :)</h3>";
    const My = document.body.innerHTML += old;
}
askBirth();