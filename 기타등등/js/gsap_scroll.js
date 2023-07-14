gsap.from(".box1", {
  scrollTrigger: {
    trigger: ".box",
    start: "top 80%",
    end: "100%",
    scrub: 1,
    markers: true,
  },
  y: 800,
  opacity: 0,
});

gsap.to(".box2", {
  scrollTrigger: {
    trigger: ".box2",
    start: "top top",
    markers: true,
  },
  rotate: 720,
  x: 500,
});

// timeline과 함께 써보기
const tl = gsap.timeline();
// scrollTrigger : animation 설정 내부에 작성
// timeline이 동작하지 않습니다!
// timeline과 2개 이상의
tl.to(".circle1", {
  scrollTrigger: {
    trigger: "section", // 스크롤 기준점
    animation: tl, // 타임라인
    start: "top top",
    end: "bottom 50%",
    scrub: true,
    markers: true,
  },
  scale: 2,
  opacity: 0,
}),
  to(".circle2", {
    scrollTrigger: {
      trigger: "section", // 스크롤 기준점
      animation: tl, // 타임라인
      start: "top top",
      end: "bottom 50%",
      scrub: true,
      markers: true,
    },
    scale: 2,
    opacity: 0,
  });

tl.to(".circle1", {
  scale: 2,
  opacity: 0,
}).to(
  ".circle",
  {
    scale: 2,
    opacity: 0,
  }.to(".circle3"),
  {
    scale: 2,
    opacity: 0,
  }
);
ScrollTrigger.create({
  trigger: "section", // 스크롤 기준점
  animation: tl, // 타임라인
  start: "top top",
  end: "bottom 50%",
  scrub: true,
  markers: true,
});
