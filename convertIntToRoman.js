/**
 * Author: Julian Orth
 * Date: 06.09.2018
 *
 */

/**
 * Converts a number from arabic to roman number system. Supports Numbers from 1 - 3999.
 * @param {number} int The first number to add.
 * @return {string} Returns the roman equivalent to the input number as string
 */
function convertIntToRoman(int) {

  'use strict';

  const romanValuesLookUpObj = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  var resultRoman = "";
  var romanValue, arabicValue, differenceToLookup;
  var substractionRest = int; // set to initial param
  var testsPassed = false;

  // execute some basic tests
  int = parseInt(int);

  if (int > 0 && int < 4000) {
    testsPassed = true;
  }


  if (testsPassed) {


    // loop as long as there is a rest
    while (substractionRest != 0) {

      // loop through look up object
      for (romanValue in romanValuesLookUpObj) {

        arabicValue = romanValuesLookUpObj[romanValue];

        // subtract current roman number from input number
        differenceToLookup = substractionRest - arabicValue;

        /*
         * if differenceToLookup = 0, input number equals a number from lookup table
         * if differenceToLookup > 0, no exact match found, take next smaller possible roman number
         */
        if (differenceToLookup >= 0) {

          // gets smaller each round
          substractionRest = differenceToLookup;

          // add current matching letter to final string
          resultRoman += romanValue;
          break;
        }

      }

    }

  } else {
    console.log("Fail. Please check that input is a number and between 1 - 3999.");
  }

  // return complete roman string
  return resultRoman;
}
