const play1 = document.querySelector("#play1");
const play2 = document.querySelector("#play2");
const reset = document.querySelector("#reset");
const span1 = document.querySelector("#span1");
const span2 = document.querySelector("#span2");
const mxPoint = document.querySelector("#maxPoint");
let mx = mxPoint.options[0].value;
let point1 = 0, point2 = 0;
function showScore(a, b) {
    span1.innerHTML = ``;
    span2.innerHTML = ``;
    if (a == mx || b == mx) {
        play1.disabled = true;
        play2.disabled = true;
        if (a === mx) {
            span1.classList.add("text-danger");
            span2.classList.add("text-primary");
        } else {
            span2.classList.add("text-danger");
            span1.classList.add("text-primary");
        }

    }
    span1.append(a);
    span2.append(b);
}
mxPoint.addEventListener("change", function (e) {
    mx = this.value;
})
reset.addEventListener("click", function (e) {
    point1 = 0;
    point2 = 0;
    play1.disabled = false;
    play2.disabled = false;
    span1.classList = "";
    span2.classList = "";
    span1.innerHTML = ``;
    span2.innerHTML = ``;
    e.preventDefault();
    showScore(point1, point2);
});
play1.addEventListener("click", function (e) {
    point1 += 1;
    e.preventDefault();
    showScore(point1, point2);
});
play2.addEventListener("click", function (e) {
    point2 += 1;
    e.preventDefault();
    showScore(point1, point2);
});