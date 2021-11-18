//! JQuery equivalent of document.createElement
const div = $(`<div id='hello-world'>
                    Hello World
                </div>`);

const divCanvas = $(`<div> 
                        <canvas id='myChart'></canvas> 
                    </div>`);

const divCanvas2 = $(`<div> 
                        <canvas id='myChart2'></canvas> 
                    </div>`);

//! JQuery equivalent of document.querySelector
const body = $("body");

//! JQuery equivalent of .appendChild()
body.append(div);

body.append(divCanvas);

body.append(divCanvas2);

//! JQuery equivalent of .addEventlistener()
div.on("click", () => alert("Hello World"));

//! JQuery css styling
$("div").css("margin", "20px");

$("body").css({
	margin: "20px",
	backgroundColor: "black",
	color: "white",
});

$("#hello-world").css({
	display: "flex",
	justifyContent: "center",
	color: "white",
	textDecoration: "underline",
	cursor: "pointer",
});

//? ================================================================

const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
	labels: labels,
	datasets: [
		{
			label: "My First dataset",
			backgroundColor: "white",
			borderColor: "red",
			data: [0, 10, 5, 2, 20, 30, 45],
		},
	],
};

const options = {
	scales: {
		y: {
			grid: {
				color: "white",
			},
		},
		x: {
			grid: {
				color: "white",
			},
		},
	},
};

const config = {
	type: "line",
	data: data,
	options: options,
};

//! JQuery equivalent of adding to tags
const myChart = new Chart($("#myChart"), config);

//? ================================================================

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

//! JQuery equivalent of adding to tags
const createDoughnut = new Chart($("#myChart2"), config2);
