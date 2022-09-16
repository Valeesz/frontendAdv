
//sc 1
//The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.

function convertCtoF(celsius) { 
    return  celsius*(9/5) + 32;
  }
  convertCtoF(30);
  
  
  
  //2
  
  //Reverse the provided stringYou may need to turn the string into an array before you can reverse it.Your result must be a string.
  
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  reverseString("hello");
  
  
  // with cycle
  /*
  function reverseString(str) {
          var temp = "",
            i;
          for (i = str.length - 1; i >= 0; i -= 1) {
            temp += str[i];
          }
          str = temp;
          return str;
        }
        reverseString("hello");
  */
  
  //3
  //Factorialize a Number
  //Return the factorial of the provided integer. If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n. Factorials are often represented with the shorthand notation n! For example: 5! = 1 * 2 * 3 * 4 * 5 = 120 Only integers greater than or equal to zero will be supplied to the function.
  
  
  
  
  // with cycle
  function factorialize(num) {
    let n=1,i=1;
    for(i;i<=num;i+=1){
      n=n*i;
    }
    return n;
    }
   factorialize(5);
  
   //4
   //Find the Longest Word in a String Return the length of the longest word in the provided sentence.  Your response should be a number.
  
  
   //cycle
  
   function findLongestWordLength(str) {
    let n= str.split(' ');
    let temp='',i=0;
    for(i;i<n.length;i+=1){
      if(temp.length<n[i].length){
        temp=n[i];
      }
    }
     return temp.length;
  }
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
  
  //5
  // Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
  
  
  
  
  function largestOfFour(arr) {
    let i,j,max=[-100,-100,-100,-100];//dont work if >0 костыль ДОРАБОТАТЬ
    for(i=0;i<arr.length;i++){
      let t=arr[i];
      for(j=0;j<t.length;j++){
        if(t[j]>max[i]){ 
          max[i]=t[j];
        }
        
      }
      
    }
    return max;
  }
  largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);
  
  //6 
  // Confirm the Ending
  // Check if a string (first argument, str) ends with the given target string (second argument, target).
  
  
  function confirmEnding(str, target) {
    str=str.split(' ').join('');
    return (str.slice(-target.length)==target) ? true:false;
  }
  
  confirmEnding("Bastian", "n");
  
  //with cycle 
  /* 
  function confirmEnding(str, target) {
    str=str.split(' ').join('');
    let test=str.slice(-target.length);
    if(test == target) return true;
    else return false;
  }
  confirmEnding("Bastian", "n");
  */
  
  
  //7 
  /*
  Repeat a String Repeat a String
  Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
  */
  function repeatStringNumTimes(str, num) {
   let i, result='';
   if(num<0){
     return "";
   }else {
     for(i=0;i<num;i+=1){
       result +=str;
     }
   }
    return result;
  }
  
  repeatStringNumTimes("*", 3);
  
  //8
  /*
  Truncate a String
  Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
  */
  function truncateString(str, num) {
    if(str.length > num) {
      str = str.slice(0, num) +'...' 
      return str;
    }
    else return str;
    
  }
  truncateString("A-tisket a-tasket A green and yellow basket", 8);
  
  
  //9
  /* Finders Keepers
  Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined. */
  
  
  function findElement(arr, func) {
    let num = 0;
    return arr.find(func);
  }
  findElement([1, 2, 3, 4], num => num % 2 === 0);
  
  //10
  /* 
  Boo who
  Check if a value is classified as a boolean primitive. Return true or false.
  Boolean primitives are true and false.
  */
  function booWho(bool) {
    return (bool === true || bool === false)?true:false;
  }
  
  booWho(null);
  
  