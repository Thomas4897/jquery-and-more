//! JQuery equivalent of document.createElement
const div = $("<div>Hello World</div>");

//! JQuery equivalent of document.querySelector
const body = $("body");

//! JQuery equivalent of .appendChild()
body.append(div);

//! JQuery equivalent of .addEventlistener()
div.on("click", () => alert("Hello World"));

//? ================================================================

//! JQuery equivalent of document.createElement
const divCanvas = $("<div> <canvas id='myChart'></canvas> </div>");

body.append(divCanvas);

const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
	labels: labels,
	datasets: [
		{
			label: "My First dataset",
			backgroundColor: "rgb(255, 99, 132)",
			borderColor: "rgb(255, 99, 132)",
			data: [0, 10, 5, 2, 20, 30, 45],
		},
	],
};

const config = {
	type: "line",
	data: data,
	options: {},
};

const myChart = new Chart($("#myChart"), config);

//? ================================================================

const divCanvas2 = $("<div> <canvas id='myChart2'></canvas> </div>");

body.append(divCanvas2);

const data2 = {
	labels: ["Red", "Blue", "Yellow"],
	datasets: [
		{
			label: "My First Dataset",
			data: [300, 50, 100],
			backgroundColor: [
				"rgb(255, 99, 132)",
				"rgb(54, 162, 235)",
				"rgb(255, 205, 86)",
			],
			hoverOffset: 4,
		},
	],
};

const config2 = {
	type: "doughnut",
	data: data2,
};

const createDoughnut = new Chart($("#myChart2"), config2);
