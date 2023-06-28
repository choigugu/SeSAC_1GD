let str1 = 123;
let str2 = 123;

console.log(
  typeof Number(str1) + " isn't " + typeof String(str2) + " data type "
);

console.log(
  "typeof를 Array이나 null에 사용하면, " +
    typeof null +
    " 결과를 얻을 수 있습니다. "
);

let mathScore = prompt("mathScore");
let engScore = prompt("engScore");
mathScore = Number(mathScore);
engScore = Number(engScore);
avgScore = (mathScore + engScore) / 2;
console.log("평균점수 = " + avgScore + "점");
