console.log(window);
console.log($(window));

console.log(document);
console.log($(document));

// mouse event
// click
// on은 addEventListener와 같은 의미

$(".p-msg").on("click", function () {
  $(".p-msg").css("color", "blue");
  // $(this).css("color", "blue"); this는 자기 자신을 의미
});

$(".p-msg").click(function () {
  $(".p-msg").css("color", "red");
});

$(".num").click(function () {
  $(".num").css("color", "yellow");
  $(this).css("color", "tomato");
});

// JS
const nums = document.querySelectorAll(".num");
// nums=[one, two, three, four]
for (let i = 0; i < nums.length; i++) {
  nums[i].addEventListener("click", () => {
    console.log(nums[i]);
    nums[i].style.color = "tomato";
  });
}

// mouseover
$(".numbers").on("mouseover", () => {
  $(".numbers").css("background-color", "skyblue");
  $(".numbers").append("<div>mouseover로 추가된 자식</div>");
});

$(".numbers").mouseover(() => {
  $(".numbers").css("background-color", "pink");
  $(".numbers").append("<div>mousevoer로 추가된 자식</div>");
});

// hover(): 마우스를 올렸을 떄와 떼었을 떄 정의
// js에서는 없는 동작
$(".div-hover").hover(
  function () {
    $(this).addClass("hover");
  },
  function () {
    $(this).removeClass("hover");
  }
);

// scroll
window.addEventListener("scroll", () => {
  console.log("scroll");
});

$(window).scroll(() => {
  console.log("scroll");
});

/* key event */
// keydown: 키보드가 눌렸을 때!
$(".input-key").keydown(function (e) {
  console.log(e.code);
  if (e.code === "ArrowUp") {
    console.log("up");
  }
});

$("#form").submit(function (e) {
  e.preventDefault(); // 이벤트 막기
  const todo = $("#todo").val();
  console.log(todo);
  $(".todos").append(`<li>${todo}</li>`); // ul에 li를 만들고 추가

  $("#todo").val(""); // input 초기화
});
