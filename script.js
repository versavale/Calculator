$(document).ready(function() {
  //Grab the value of clicked button and display in log (entry = digits before operator incl dot, first = integer before operating, operator = operator)

  var entry = "";
  var first = "";
  var second = "";
  var operator = "";
  var res = 0;

  $("button").click(function() {
    var num = $(this).val();
    if (num !== "*" && num !== "/" && num !== "+" && num !== "-") {
      entry = entry.concat(num);
    } else if (num === ".") {
      entry = entry.concat(/./g);
    } else if (first.length === 0) {
      first = entry;
      entry = "";
    } else if (first.length !== 0) {
      first = first;
      second = entry;
      entry = "";
    } else if (first.length !== 0 && second.length !== 0) {
      first = res;
      second = entry;
      entry = "";
      res = 0;
    }

    if (num === "ac") {
      entry = "";
      first = "";
      second = "";
      operator = "";
      res = 0;
    }

    //operators get stored
    if (num === "+") {
      if (first.length === 0) {
        console.log(error);
      } else if (res !== 0) {
        operator = "+";
        first = res;
        second = "";
    } else {
        operator = "+";
      }
    }

    if (num === "/") {
      if (first.length === 0) {
        console.log(error);
      } else if (res !== 0) {
        operator = "/";
        first = res;
        second = "";
      } else {
        operator = "/";
      }
    }
    if (num === "*") {
      if (first.length === 0) {
        console.log(error);
      } else if (res !== 0) {
        operator = "*";
        first = res;
        second = "";
      } else {
        operator = "*";
      }
    }
    if (num === "-") {
      if (first.length === 0) {
        console.log(error);
      } else if (res !== 0) {
        operator = "-";
        first = res;
        second = "";
      } else {
        operator = "-";
      }
    }

    if (num === "=") {
      second = entry.slice(0, -1);
      entry = "";
    }

    // This is how you define res according to the used operator.
    //DO NOT MODIFY
   if (operator === "+") {
   res = parseFloat(first) + parseFloat(second);

    }
    if (operator === "-") {
      res = parseFloat(first) - parseFloat(second);
   //    res = res.toFixed(2);
    }
    if (operator === "*") {
      res = parseFloat(first) * parseFloat(second);
  //     res= res.toFixed(2);
    }
    if (operator === "/") {
      res = parseFloat(first) / parseFloat(second);
   //   res= res.toFixed(2);
    }

    // console.log tries
    console.log("entry: " + entry);
    console.log("first: " + first);
    console.log("second: " + second);
    console.log("operator: " + operator);
    console.log("res: " + res);

    //log print, result print and AC button
    var disp = $("#log");
    var show = $("#result");
    if (entry.length !== 0 && first.length === 0) {
      disp.text(entry);
      show.text(entry);
    }
    if (entry.length !== 0 && first.length !== 0){
      show.text(entry);
    }
    if (operator.length !== 0 && second.length === 0) {
      disp.text(first + operator);
      show.text(operator);
    }
    if (operator.length !== 0 && entry.length !== 0 && first.length !== 0) {
      disp.text(first + operator + entry);
      show.text(entry);
    }
    if (first.length !== 0 && entry.length === 0 && second.length !== 0) {
      disp.text(first + operator + second + "=");
      res = res.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
      show.text(res);
    }


    if (num === "ac") {
      disp.text("0");
      show.text("0");
    }

    //end of button **DO NOT WRITE BELOW**
  });

  //end of all funct **DO NOT WRITE BELOW**
});
