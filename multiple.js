/* 
* Multiple Conditions
*/

const salary = 100000;
const isBCS = false;
const hasCar = true;

// if(salary >= 100000 && isBCS === true && hasCar === true){
//     console.log("Suuuuu Patro");
// }
// else{
//     console.log("Tor Kopale biya Nai")
// }

// if (salary > 200000 || isBCS === true){
// console.log("Bolo Baba Kobul");
// }
// else{
//     console.log("Vag tui mokbul")
// }

if ((salary > 200000 && hasCar === true) || isBCS === true){
console.log("Bolo Baba Kobul");
}
else{
     console.log("Vag tui mokbul")
}