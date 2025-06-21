const amountToConvertation = document.getElementById('amountToConvertation');
const originalCurrency = document.getElementById('originalCurrency');
const desiredConvertation = document.getElementById('desiredConvertation');
const buttonConvertation = document.getElementById('result');
const result = document.getElementById('textResult');
buttonConvertation.addEventListener('click', () => convertation(amountToConvertation.value, originalCurrency.value, desiredConvertation.value));
function convertation(money, originalCurrency, desiredConvertation) {
    switch (originalCurrency) {
        case '1':
            function convertationOutRubles(money, desiredConvertation) {
                const rublesToDollar = 0.012738;
                const rublesToEuro = 0.011197;
                switch (desiredConvertation) {
                    case '1':
                        result.innerHTML = (money * rublesToDollar).toFixed(2) + ' $';
                        break;
                    case '2':
                        result.innerHTML = (money * rublesToEuro).toFixed(2) + ' €';
                        break;
                    case '3':
                        result.innerHTML = money + ' ₽';
                        break;
                    default:
                        result.innerHTML = 'Может, лучше доллары или евро?';
                }
            }
            convertationOutRubles(money, desiredConvertation)
            break;
        case '2':
            function convertationOutEuro(money, desiredConvertation) {
                const euroToDollar = 1.14;
                const euroToRubles = 89;
                switch (desiredConvertation) {
                    case '1':
                        result.innerHTML = (money * euroToDollar).toFixed(2) + ' $';
                        break;
                    case '2':
                        result.innerHTML = money + ' €';
                        break;
                    case '3':
                        result.innerHTML = (money * euroToRubles).toFixed(2) + ' ₽';
                        break;
                    default:
                        result.innerHTML = 'Вы не нуждаетесь в этой информации.';
                }
            }
            convertationOutEuro(money, desiredConvertation)
            break;
        case '3':
            function convertationOutDollars(money, desiredConvertation) {
                const dollarToEuro = 0.88;
                const dollarToRubles = 79;
                switch (desiredConvertation) {
                    case '1':
                        result.innerHTML = money + ' $';
                        break;
                    case '2':
                        result.innerHTML = (money * dollarToEuro).toFixed(2) + ' €';
                        break;
                    case '3':
                        result.innerHTML = (money * dollarToRubles).toFixed(2) + ' ₽';
                        break;
                    default:
                        console.log('Вам не нужна конвертация в эту валюту.')
                }
            }
            convertationOutDollars(money, desiredConvertation)
            break;
        default:
            result.innerHTML = 'Я другие валюты просто для красоты поставила, извините👉👈';
    }
}