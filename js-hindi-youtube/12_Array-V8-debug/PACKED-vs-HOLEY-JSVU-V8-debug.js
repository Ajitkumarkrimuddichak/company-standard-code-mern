//Advance Array 4 Years experience Know ?

//const myArr = [];
// % DebugPrint(myArr);

//Array ko bolate samaya technical terms :- Array ke Element /array ke andar element hote hai
//Two types of Array in JS //Har language me Optimazation hota hai
//(1) PACKED/continious Array (2)Holey Array

//(1)EX:-SMI > DOUBLE > PACKED Three types se JS me Array ko optimazitation hota hai
//(1)SMI (small integer) Best type compare to another
//(2)Packed element
//(3)Double (Ex:- float,string,function....)

const arrTwo = [1, 2, 3, 4, 5]; //PACKED_SMI_ELEMENTS

arrTwo.push(6.0); //PACKED_DOUBLE_ELEMENTS

arrTwo.push("8"); //PACKED_ELEMENTS

//(2)Ex:- HOLES_SMI > H_DOUBLE > H_PACKED
arrTwo[10] = 11; //or [1,2,3,,5]//HOLEY_ELEMENTS
console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);

// *** bound check *** //
//hasOwnProperty(arrTwo,9)
//hasOwnProperty(arrTwo.prototype,10)
//hasOwnProperty(Object.prototype,10)

//Note:- Holes are very expensive in js
