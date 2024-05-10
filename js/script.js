// Copyright (c) 2024 Kai Nguyen All rights reserved
//
// Created by: Kai Nguyen
// Created on: May 2024
// This file contains the JS functions for index.html
"use strict"

function divisionClicked() {
  let numerator = parseInt(document.getElementById("num1-entered").value)
  const denominator = parseInt(document.getElementById("num2-entered").value)
  let counter = 0
  let remainder = 0

  while (true) {
    if (numerator < denominator) {
    remainder += numerator
    break
    } else {
      document.getElementById("answer").innerHTML += numerator + " - " + denominator + " = " + (numerator - denominator) + "<br />"
    }
    numerator -= Math.abs(denominator)
    counter++
    console.log(numerator)
  }
  console.log(numerator)
  document.getElementById("answer").innerHTML += "The answer is = " + counter + " R" + remainder
}

