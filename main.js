//! JQuery equivalent of document.createElement
const div = $("<div>Hello World</div>");

//! JQuery equivalent of document.querySelector
const body = $("body");

//! JQuery equivalent of .appendChild()
body.append(div);

//! JQuery equivalent of .addEventlistener()
div.on("click", () => alert("Hello World"));
