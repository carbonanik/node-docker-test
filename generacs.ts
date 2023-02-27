// you can only use this function for string array 
// for any other array you have create new function
const last1 = (arr: Array<string>) => {
  return arr[arr.length - 1];
}

const l11 = last1(["1", "2", "3"])
// const l12 = last1([1, 2, 3]) // does not work


// you loose the type definition 
// can mix any type in array 
const last2 = (arr: Array<any>) => {
  return arr[arr.length - 1]
}

// you don't know what type the function returning
const l21 = last2(["1", "2", 3])


// you can use this function for any data type
// you don't loose the type information
const last3 = <T>(arr: Array<T>) => {
  return arr[arr.length - 1]
}

// the type is infer'ed form the provided array 
const l31 = last3(["1", "2", "3"])
// and also you can specify the type when calling the function
const l32 = last3<number>([1, 2, 3])


//  =============================================================


const makeArr = (x: number) => {
  return [x];
}      









//keywords
  // union 