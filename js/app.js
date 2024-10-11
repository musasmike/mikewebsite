/*  */

// Visualization container for the Electric Vehicle Population Dashboard
const containerDiv = document.getElementById("vizContainer");
const containerDivRoadTrafficFatalities = document.getElementById("viz1722845856307");
const containerDivMeteorite = document.getElementById("viz1722846079734");
const containerDivRealEstate = document.getElementById("viz1722845527889");
const containerDivPollution = document.getElementById("viz1700431546148");

// Electric Vehicle Population Tableau Link
const urlElectricVehicle = "https://public.tableau.com/views/electic_vehicle_population/ElectricVehiclePopulationDashboard";
const urlRoadTrafficFatalities = "https://public.tableau.com/views/msba_project_dashboard/Demography";
const urlMeteorite = "https://public.tableau.com/views/Meteorite_Landings_Dashboard/MeteoriteLandingsAcrosstheWorld";
const urlRealEstate = "https://public.tableau.com/views/RealEstateSalesDashboard_17228429219500/RealEstateSalesDashboard-SaleValue";
const urlPollution = "https://public.tableau.com/views/plastic_pollution/PlasticPollutionReport";

// Different options of the visualization
const options = {
    height: 1850,
    width: window.innerWidth,
    hideTabs: true,
    onFirstInteractive: function() {
        console.log("Hey!");
    }
};

// Function to create the dashboard
function initViz(input1, input2, input3) {

    let viz = new tableau.Viz(input1, input2, input3);
}

// Media Query vairable
const mediaQuery = window.matchMedia("(min-width: 1000px)");

if (mediaQuery.matches) {
    // Code to run if the viewport width is 1000px or larger
    options.height = window.innerHeight;
    if (containerDivMeteorite) {
        options.height = 1100;
    }
  }

// Display the Electric Vehicle Population Dashboard
if (containerDiv) {
    document.addEventListener("DOMContentLoaded", initViz(containerDiv, urlElectricVehicle, options));
} else if (containerDivRoadTrafficFatalities) {
    document.addEventListener("DOMContentLoaded", initViz(containerDivRoadTrafficFatalities, urlRoadTrafficFatalities, options));
} else if (containerDivMeteorite) {
    document.addEventListener("DOMContentLoaded", initViz(containerDivMeteorite, urlMeteorite, options));
} else if (containerDivRealEstate) {
    document.addEventListener("DOMContentLoaded", initViz(containerDivRealEstate, urlRealEstate, options));
} else if (containerDivPollution) {
    document.addEventListener("DOMContentLoaded", initViz(containerDivPollution, urlPollution, options));
}


/* */
