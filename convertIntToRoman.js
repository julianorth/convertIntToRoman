/**
 * Author: Julian Orth
 * Date: 06.09.2018
 *
 */

/**
 * Converts a number from arabic to roman number system
 * @param {number} int The first number to add.
 * @return {string} Returns the roman equivalent to the input number as string
 */
function convertIntToRoman(int) {

  'use strict';

  const romanValuesLookUpObj = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
  };

  var resultRoman = "";
  var romanValue, arabicValue, differenceToLookup;
  var substractionRest = int; // set to initial param


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

  // return complete roman string
  return resultRoman;
}
