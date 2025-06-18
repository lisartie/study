let arr = [8, 10, 13, 3];
let arr2 = [7, 12, 3, 18, 5, 16];

let arrTime = [];

for (let i = 0; i <= arr.length - 1; i++) {
    for (let x = 0; x <= arr2.length - 1; x++) {
        if (arr[i] > arr2[x]) {
            arr2.push(arr[i]);
        } else if (arr[i] < arr2[x]) {
            console.log(`элемент ${arr[x]}, индекс ${x}`);
            console.log(arr2)
            arrTime = arr2.splice(x + 1);
            console.log(arrTime)
            
 
        } else {
            //console.log(`${arr[i]} равно ${arr2[x]}`)
        }
    }
}

