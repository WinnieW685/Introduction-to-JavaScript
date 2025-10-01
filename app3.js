/* const sentence =
  "The red cat sat on the mat. Why are you so sad cat? Don't ask that.";

function lang(sentence) {
  let t = 0;
  let s = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === "S" || sentence[1] === "s") {
      s = s + 1;
    } else if (sentence[i] === "T" || sentence[1] === "t") {
      t++;
    }
  }
  if (t > s) {
    console.log("English");
  } else {
    console.log("Parle Vu Francaise");
  }
}
lang(sentence);
 */
function occupied(y, t) {
  let occupied = 0;
  for (let i = 0; i < y.length; i++) {
    console.log(y[i], t[i]);
    if (y[i] === "c" && t[i] === "c") {
      occupied++;
    }
  }
  console.log(occupied);
}
occupied("cc..c", ".cc..");
