const hasLicense = (document.getElementById('documents'));
const age = document.getElementById('age');
const isDrunk = document.getElementById('alcohol');
const buttonResult = document.getElementById('result');
buttonResult.addEventListener('click', getResult);
function getResult () {
    const result = (hasLicense.value == 1) && (isDrunk.value == 1) && (age.value >= 18) ? 'Может' : 'Не может';
    console.log(result)
}


// && - and
// || - or
// ! - not
//