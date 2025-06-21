const positionLatitudePosition = Number(prompt('Широта места, где вы сейчас'));
const positionLongitudePosition = Number(prompt('Долгота места, где вы сейчас'));
const positionLatitudeAddress = Number(prompt('Широта места, куда вам надо'));
const positionLongitudeAddress = Number(prompt('Долгота места, куда вам надо'));
const a = positionLatitudePosition + positionLongitudePosition;
const b = positionLatitudePosition + positionLatitudeAddress;
const distance = Math.sqrt((a + b) ** 2);
console.log(distance)

//Здравствуйте, не дошла до того, как правильно посчитать стороны, поэтому сделала вот так...