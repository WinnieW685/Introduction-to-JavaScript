/*const age = 21;
if (age >= 18) {
  console.log("Vote");
} //wont run if the first statemnet is true
else if (age >= 21) {
  console.log("You can drink adult beverages");
} else {
  console.log("no vote");
}

const age = 18;
const citizen = true;
// == means evaluation no data types considerd
// === means evaluation of both type and if equal
if (age >= 35 && citizen === true) {
  console.log("run for pres");

if (!citizen) {
  console.log("you take test");
}

// || = or
 && = and
*/

/* function enter(hasKey, hasMagic, isBanned) {
  if ((hasKey == true || hasMagic == true) && !isBanned) {
    console.log("you're princess is in another castle");
  } else {
    console.log("cannot enter");
  }
}
enter(true, true, true); */

/*function enter(rideHeightOK, withAdult, healthHold) {
  if ((rideHeightOK == true || withAdult == true) && !healthHold) {
    console.log("You're allowed to ride the rollercoaster");
  } else {
    console.log("cannot ride");
  }
}
enter(true, true, false); */

/*function enter(doorOpen, windowOpen) {
  const alarmSilent = !(doorOpen || windowOpen);
}
// Equivalent by De Morgan: (!doorOpen && !windowOpen)
enter(true, false);*/

function middle(x, y, z) {
  if ((x >= y && x <= z) || (x <= y && x >= z)) {
    console.log("x is middle");
  } else if ((y >= x && y <= z) || (y <= x && y >= z)){
    console.log("y the middle");
  } else ((z >= x && z <= y) || (z <= x && z >= y)) {
    console.log("z is the middle")
  }
}

middle(10, 20, ); */

