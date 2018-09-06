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


  // loop through look up object
  for (romanValue in romanValuesLookUpObj) {

    arabicValue = romanValuesLookUpObj[romanValue];

    // subtract current roman number from input number
    differenceToLookup = int - arabicValue;

    /*
     * if differenceToLookup = 0, input number equals a number from lookup table
     * if differenceToLookup > 0, no exact match found, take next smaller possible roman number
     */
    if (differenceToLookup >= 0) {

      resultRoman = romanValue;
      break;
    }

  }


  return resultRoman;
}
