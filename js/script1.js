//  sum of 2 arrays
// var arr1 = [10, 83, 84, 94]
// var arr2 = [194, 092, 948, 684]
// var arr3 = []

// for(var i = 0; i < 4; i++){
//     arr3[i] = arr1[i] + arr2[i];
// }
// console.log(arr3);

// // Find Max. min. Values in array
// var min = Math.min(...arr3);
// var max = Math.max(...arr3);

// console.log(min, max);

// Find a number in array
// var check = (num) =>
// [ 204, 175, 1032, 778 ].includes(num);
// console.log(check(56));

// 2 arrays are equal or not
// let arr1 = [27, 62, 43, 56] 
// let arr2 = [27, 26, 43, 56] 

// if(arr1.length == arr2.length){
//     for(var i=0; i<arr1.length; i++){
//         if(arr1[i] === arr2[i]){
//             console.log("is equal")
//         }
//         else{
//             console.log("not equal")
//             // break;
//         }
//     }
// }
// else{
//     console.log("not equal")
// }

function equalOrNot(){
    let arr1 = [27, 62, 43, 56] 
    let arr2 = [27, 26, 43, 56]
    
    if(arr1.length == arr2.length){
        for(var i=0; i<arr1.length; i++){
            if(arr1[i] == arr2[i]){
                return true;
            }
            else{
                return false
            }
        }
    }
    else{
        return false
    }
}

console.log(equalOrNot());


