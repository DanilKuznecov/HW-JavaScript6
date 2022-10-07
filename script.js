console.log('Задание - "a"');
console.log('');
console.log('');


let arr = []


for (i = 0; i < Infinity; i++) {
    let com = prompt('Введите команду')
    let newArr = com.split(' ')
    if (newArr[0] == 'add') {
        arr.push(newArr[1])
    } else if (newArr[0] == 'del') {
        for (let j = 0; j < arr.length; j++) {
            arr[j] == newArr[1] ? arr.splice([j, 1]) : ''
        }
    }else if(newArr[0] == 'stop') {
        break
    }
}

for(const key in arr) {
    console.log(arr[key]);
}
