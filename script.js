let ques = document.querySelectorAll(".ques");
let answer = document.querySelectorAll(".answer");
let times = document.querySelectorAll(".fa-times");
let down = document.querySelectorAll(".fa-chevron-down");

for (let i = 0; i < ques.length; i++) {
	ques[i].addEventListener("click", function () {
		times[i].classList.toggle("active");
		down[i].classList.toggle("active");
		answer[i].classList.toggle("active");
		ques[i].classList.toggle("active");
	});
}
