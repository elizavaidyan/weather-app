// setTimeout(() => { //Asynchronous callback func is called within setTimeOut() func
//     console.log("Two secs time out!")
// }, 2000);

// const names = [ 'Angel', 'Mary', 'Ann'];

// const shortNames = names.filter((name) => { //Synchronous callback func
//     return name.length <= 4;
// })

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data  = {
//             latitude: 0,
//             longitude: 0
//         }
//         callback(data);

//     }, 2000);

// }

// geocode ('Philadelphia' , (data) => {
//     console.log(data);
// })

const add = (num1, num2, callback) => {
    setTimeout(() => {
        callback(num1 + num2);
    }, 2000);

}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})
