let softwareLicenceSlider = document.getElementById("software-licence-value");
let fixedAssetsSlider = document.getElementById("fixed-assets-value");
let officeSuppliesSlider = document.getElementById("office-supplies-value");
let billsSlider = document.getElementById("bills-value");
let staffSlider = document.getElementById("staff-value");
let sitesSlider = document.getElementById("sites-value");

let softwareOutput = document.getElementById("software-output");
let assetsOutput = document.getElementById("assets-output");
let officeSuppliesOutput = document.getElementById("office-supplies-output");
let billsOutput = document.getElementById("bills-output");
let staffOutput = document.getElementById("staff-output");
let sitesOutput = document.getElementById("sites-output");

let calcResultPer = document.getElementById("calc-result-per");
let calcResultCAD = document.getElementById("calc-result-cad");
let calcResultSpent = document.getElementById("calc-result-spent");
let calcLaptops = document.getElementById("calc-laptops");

initSavingsInput(softwareLicenceSlider, softwareOutput);
initSavingsInput(fixedAssetsSlider, assetsOutput);
initSavingsInput(officeSuppliesSlider, officeSuppliesOutput);
initSavingsInput(billsSlider, billsOutput);
initSavingsInput(staffSlider, staffOutput);
initSavingsInput(sitesSlider, sitesOutput);

function initSavingsInput(inputEl, outputEl) {
    inputEl.addEventListener('input', () => {
        outputEl.innerText = inputEl.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        updateSavingsCalculation();
    })
}

let updateSavingsCalculation = () => {
    let staff = parseInt(staffSlider.value)
    let sites = parseInt(sitesSlider.value)
    let software = parseInt(softwareLicenceSlider.value)
    let assets = parseInt(fixedAssetsSlider.value)
    let office = parseInt(officeSuppliesSlider.value)
    let bills = parseInt(billsSlider.value)

    let percentSavings = (5 + 0.25 * (staff / sites)).toFixed(2);
    if (percentSavings >= 25) {
        percentSavings = 25;
    } else if (percentSavings <= 5) {
        percentSavings = 5;
    } else {
        percentSavings;
    }
    let sumItems = (software + (office * 12) + (bills * 12) + assets);
    let outputResult = Math.floor(sumItems * (percentSavings / 100)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    let numResult = sumItems * (percentSavings / 100);
    let laptopsSaved = Math.floor(numResult / 1500);

    calcResultPer.innerText = percentSavings;
    calcResultCAD.innerText = outputResult;
    calcResultSpent.innerText = sumItems.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    calcLaptops.innerText = laptopsSaved
}

