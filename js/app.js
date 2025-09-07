/*  */

// Visualization container for the Electric Vehicle Population Dashboard
const containerDiv = document.getElementById("vizContainer");
const containerDivRoadTrafficFatalities = document.getElementById("viz1722845856307");
const containerDivMeteorite = document.getElementById("viz1722846079734");
const containerDivRealEstate = document.getElementById("viz1722845527889");
const containerDivPollution = document.getElementById("viz1700431546148");
const containerDivCrimes = document.getElementById("viz1730296755478");
const containerDivCrossing = document.getElementById("viz1703133969131");
const containerDivSalesPerformance = document.getElementById("viz1730301023353");

// Electric Vehicle Population Tableau Link
const urlElectricVehicle = "https://public.tableau.com/views/electic_vehicle_population/ElectricVehiclePopulationDashboard";
const urlRoadTrafficFatalities = "https://public.tableau.com/views/msba_project_dashboard/Demography";
const urlMeteorite = "https://public.tableau.com/views/Meteorite_Landings_Dashboard/MeteoriteLandingsAcrosstheWorld";
const urlRealEstate = "https://public.tableau.com/views/RealEstateSalesDashboard_17228429219500/RealEstateSalesDashboard-SaleValue";
const urlPollution = "https://public.tableau.com/views/plastic_pollution/PlasticPollutionReport";
const urlCrimes = "https://public.tableau.com/views/Crimes-CityofLosAngeles/Dashboard2";
const urlCrossing = "https://public.tableau.com/views/USBorderCrossingEntryDashboard/USBorderCrossingsReport";
const urlSalesPerformance = "https://public.tableau.com/views/SuperStoreSalesDashboard_17303004967540/Overview";



// Different options of the visualization
const options = {
    height: 1000, // Default height
    width: window.innerWidth, // Set width dynamically
    hideTabs: true,
    onFirstInteractive: function() {
        console.log("Dashboard is interactive!");
    }
};

// Function to dynamically adjust height for mobile devices
function adjustHeightForMobile(mobilesize, desktopsize = 1000) {
    if (window.innerWidth < 768) { // Adjust for devices with width less than 768px (mobile)
        options.height = mobilesize; // Increase height for mobile
    } else {
        options.height = desktopsize; // Default height for larger screens
    }
}

// Call the function to adjust height based on device type
adjustHeightForMobile();

// Function to create the dashboard
function initViz(input1, input2, input3) {
    let viz = new tableau.Viz(input1, input2, input3);
}

// Display the Dashboards //
// Electric Vehicles Population
if (containerDiv) {
    document.addEventListener("DOMContentLoaded", () => {
        adjustHeightForMobile(2000); // Re-check height adjustment on DOM load
        initViz(containerDiv, urlElectricVehicle, options);
    });

// Road Traffic Fatalities
} else if (containerDivRoadTrafficFatalities) {
    document.addEventListener("DOMContentLoaded", () => {
        adjustHeightForMobile(1900);
        initViz(containerDivRoadTrafficFatalities, urlRoadTrafficFatalities, options);
    });

// Meteorite Landings
} else if (containerDivMeteorite) {
    document.addEventListener("DOMContentLoaded", () => {
        adjustHeightForMobile(1600, 1200);
        initViz(containerDivMeteorite, urlMeteorite, options);
    });

// Real Estate Sales
} else if (containerDivRealEstate) {
    document.addEventListener("DOMContentLoaded", () => {
        adjustHeightForMobile(1500);
        initViz(containerDivRealEstate, urlRealEstate, options);
    });

// Plastic Pollution
} else if (containerDivPollution) {
    document.addEventListener("DOMContentLoaded", () => {
        adjustHeightForMobile(2000);
        initViz(containerDivPollution, urlPollution, options);
    });

// Crime Analysis
} else if (containerDivCrimes) {
    document.addEventListener("DOMContentLoaded", () => {
        adjustHeightForMobile(2300);
        initViz(containerDivCrimes, urlCrimes, options);
    });

// Border Crossing
} else if (containerDivCrossing) {
    document.addEventListener("DOMContentLoaded", () => {
        adjustHeightForMobile(2080);
        initViz(containerDivCrossing, urlCrossing, options);
    });

// Super Store Sales
} else if (containerDivSalesPerformance) {
    document.addEventListener("DOMContentLoaded", () => {
        adjustHeightForMobile(2500);
        initViz(containerDivSalesPerformance, urlSalesPerformance, options);
    });
}




