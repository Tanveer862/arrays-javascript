 //........Map.........
 // Map ak array ka method ha jo kisi function ko call krta ha original array k her element k liye or ak new array create 
 // kr k return krta ha  original array ko change ni krta  map teezi k sath data ko nikal kr manipulate kr deta ha
 // empty elememt k liye execute ho ga or empty result return kry ga
 //.........Filter........................
 // filter ko use kia jata ha  new array bnany k liye jo function sy value pas hoti hn 
 // filter resut dtea ha kisi condition ko test krk new array create kr k deta ha specific range tk define by user 
 // filter empty function ko execute kr dy ga  or empty function return kr dy ga agr koi b logic ni lgi
 // agr  logic lgi hoe ha to filter tb tk execute ho ga jb tk function k her element ko chek ni kr leta   
 
 //........Reduce.............
 /// array main jo b value pass ki gye ha un sy ak single  value return kr k deta ha 
 // all elemt  ko execute krta ha left to right side 
 
 // ..........arrow function...............
// arrow function ko is liye use krty hn ye  function definition flexible and concise 




 let personalDetail={
     name:"tanveer",
    adress: "chak 227/wb",
    email:"tanveer@227", 
    calculate:function (){
    
        console.log("Hy I Am  Ali Raza ")
    getInfo=()=>{
        console.log("How are you",this.name)
    }
getInfo()
    }
}
personalDetail.calculate()
//.............................
function sum(x,y){
let add=x+y
console.log(add)
 let disp=()=>{
    console.log("dssd",add)
 }
 disp()
}
sum(40,50)
///  array using map 
let nums=[50,34,80,87,50]
let newArr=nums.map((value)=>{
 return value*2;
})

console.log(nums)
console.log(newArr)
///...............Array using filter
let arr=[1,2,3,4,5,6,7,8,9]
let evenArray=arr.filter((value)=>{
    return value%2===0
})
console.log(evenArray)
///............ Array using reduce 
let newArray=[30,50,21,12,23]
finalOutput=newArray.reduce((result,current)=>{
    return result+current
})
console.log(finalOutput)
//........largest Number in array 
let newarr=[30,50,21,12,23]
finalOutput=newarr.reduce((result,current)=>{
    return result>current?result:current
})
console.log(finalOutput)
//........Marks of student find student  90+marks 
let marks=[99,96,60,87,89,93,50,45]
  let NewMarks= marks.filter((values)=>{
    return values>90
})
console.log(NewMarks)
/// ...calculte sum of number  using reduce method
let myArray=[10,20,30,40,76,80,45,60]
let sumOfArray=myArray.reduce((pre,next)=>{
    return pre+next
})
console.log(sumOfArray)
//.....Multiplication of number using Reduce method
let numbers=[10,20,30,40,76,80,45,60]
let mul=numbers.reduce((pre,next)=>{
    return pre*next
})
console.log(mul)