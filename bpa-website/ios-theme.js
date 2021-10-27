let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
console.log("matched");

let body = document.querySelector("body");
let content = document.getElementById("nav");

if (dark) {
	content.setAttribute("class", "navbar navbar-expand-lg navbar-dark bg-dark");
} else {
	content.setAttribute("class", "navbar navbar-expand-lg navbar-light bg-light");
}