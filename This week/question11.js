// program to compare value of two dates
function compareDate(date1,date2){
const d1 = new Date();
const d2 = new Date();
const compare1 = d1 < d2;
console.log(compare1);

const compare2 = d1 > d2;
console.log(compare2);

const compare3 = d1 <= d2;
console.log(compare3);

const compare4 = d1 >= d2;
console.log(compare4);

const compare5 = d1.getTime() === d2.getTime();
console.log(compare5);

const compare6 = d1.getTime() !== d2.getTime();
console.log(compare6);
}
compareDate("4-10-2024","10-4-2024")