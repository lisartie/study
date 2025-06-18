
function crypto (password) {
    let arr = password.split('');
    let arr1 = arr[1];
    let arr2 = arr[3];
    let arr3 = arr[7];
    arr[1] = 'r^kb_r'
    arr[3] = 'lj-v'
    arr[7] = '='
    arr.reverse()
    let arr4 = arr[0];
    arr.shift()
    console.log(`res crypto:  ${arr.join('')}`)
    arr.unshift(arr4)
    arr.reverse()
    arr[1] = arr1;
    arr[3] = arr2;
    arr[7] = arr3;
    arr = arr.join('')
    
    console.log(`промежуток:  ${arr}`)
    console.log(`res uncrypto: ${arr}`)
    check (password, arr)
}

function check (password, crypto) {
    if (password === crypto) {
        console.log('Шифрование успешно соответствует паролю');
    } else {
        console.log('Треш какой-то вышел, надо переделать');
    }
}

crypto('password')