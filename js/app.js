
const containerDiv = document.getElementById("vizContainer");
const url = "https://public.tableau.com/views/electic_vehicle_population/ElectricVehiclePopulationDashboard";
const options = {
    height: window.innerHeight,
    width: window.innerWidth,
    hideTabs: true,
    onFirstInteractive: function() {
        console.log("Hey!");
    }
};

function initViz() {

    let viz = new tableau.Viz(containerDiv, url, options);
}

document.addEventListener("DOMContentLoaded", initViz);
