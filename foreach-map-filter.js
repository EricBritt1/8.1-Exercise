// I accidentally did this assignment incorrectly. I was used to following the examples in colts videos trying to create a function without using foreach, map or filter. Totally forgot the whole purpose of this assignment. Nonetheless all test passed. I have a deeper understanding of how the methods work because of the way I approached this assignment.

/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/

const testArr = [2,3,4,5]

function doubleValues(arr){
    const doubleValuesArr = [];
    arr.forEach( function (double) {
        doubleValuesArr.push(double*2)
    });
    return doubleValuesArr
};


/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
    const onlyEvenArr = [];
    arr.forEach(arr => {
        if(arr % 2 === 0) {
            onlyEvenArr.push(arr)
        }
    });
    return onlyEvenArr
};



/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){
    const firstAndlastArr = [];

   arr.forEach(arr => {
        firstAndlastArr.push(arr[0] + arr[arr.length-1]);
   });
   return firstAndlastArr
};



/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/

function addKeyAndValue(arr,key,value){
    arr.forEach(arr=> {
     arr[key] = value;
    });
    return arr
};






/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str){
   const vowels = 'aeiouAEIOU'
   const vowelObject = {};
for(let i = 0; i < vowels.length; i++) {
    if (str.includes(vowels[i])) {
        let totalVowelCount = 0;
       let theVowel = vowels[i];
       for (let t = 0; t < str.length; t++) {
        if(str[t] === vowels[i]) {
           totalVowelCount++
        }
        vowelObject[theVowel] = totalVowelCount;
       }
    }
}
return vowelObject
};



/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap(arr) {
const doubleValuesWithMapArr = []
for (let i = 0; i < arr.length; i++) {
    doubleValuesWithMapArr.push(arr[i] * 2)
}
return doubleValuesWithMapArr
};


/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr){
    const valTimesIndexArr = [];
    for(let i = 0; i < arr.length; i++) {
        valTimesIndexArr.push(arr[i] * i)
    }
    return valTimesIndexArr
};


/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/


function extractKey(arr, key){
    const extractKeyArr = [];
    
    for(let i = 0; i < arr.length; i++) {
        extractKeyArr.push(arr[i][key])
    };
    return extractKeyArr
};




/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/


function extractFullName(arr){
    const extractFullNameArr = [];
    for(let i = 0; i < arr.length; i++) {
        extractFullNameArr.push(`${arr[i]['first']} ${arr[i]['last']}`)
    }
return extractFullNameArr
};




/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {
    const filterByValueArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i][key]) {
            filterByValueArr.push(arr[i])
        }
    }
    return filterByValueArr
};





/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {
for(let i = 0; i < arr.length; i++) {
    if (arr[i] === searchValue) {
        return arr[i]
    }
}
};



/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/



function findInObj(arr, key, searchValue) {
    for(let i = 0; i < arr.length; i++) {
       if(arr[i][key] === searchValue) {
        return arr[i]
       }
    }
};



/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
let vowels = 'aeiouAEIOU'
let string = '';
for(let i = 0; i < str.length; i++) {
    if(!vowels.includes(str[i])) {
        string += str[i]
    }
}
return string.toLowerCase()
};


/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {
    const doubleOddArr = [];
    for(let i = 0; i < arr.length; i++) {
        if((arr[i] % 2) === 1) {
            doubleOddArr.push(arr[i]*2)
        }
    }
    return doubleOddArr
};

