//part1
const int = [10, 20, 30, 40, 50, 60];
const [firstNum, secondNum] = int;

const a = false;
const b = null;

if ((firstNum < 20 && secondNum !== 20) || !a) {
  console.log("Condition is true");
} else {
  console.log("Condition is false");
}

//part2
const obj = {
  first: 10,
  second: 20,
  third: 30,
  nestedObj: {
    fourth: 40,
    fifth: 50,
  },
};
const {
  first: forObj,
  nestedObj: { fourth },
} = obj;

fourth !== 10 || (forObj > 5 && !b)
  ? console.log("Condition is true")
  : console.log("Condition is false");

//part3
const types = {
  typeNull: null,
  typeUndefined: undefined,
  typeStr: "This is string",
  typeInt: -2312,
  typeBoolean: true,
  typeNaN: NaN,
};
// typeUndefined,typeNull,typeNaN,"",0 , false ==> always make condtion false
const { typeNull, typeUndefined, typeStr, ...rest } = types;

if (typeUndefined || (!typeStr && rest)) {
  console.log("Condition is true");
  return;
}
console.log("Condition is false");
