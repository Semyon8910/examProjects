// functions for displaying loading window

const showLoading = () => {
    $("#loadingModal").modal("show");
}

const hideLoading = () => {
    $("#loadingModal").modal("hide");
}

// getting coin info

const openInfo = (index) => {

    showLoading();

    if (infoOpened[index] == false) {
        let storedData = localStorage.getItem("singleCoinInfo"+index);
        if (storedData) {
            console.log("local")
            showInfo(JSON.parse(storedData), index);
            
            hideLoading();
        
        } else {
        $.get("https://api.coingecko.com/api/v3/coins/"+coins[index].id, (coinData) => {
                showInfo(coinData, index);
                console.log("network");
                localStorage.setItem("singleCoinInfo"+index, JSON.stringify(coinData));
                setTimeout(() => {localStorage.removeItem("singleCoinInfo"+index)}, 1000*60*60*24);
            
                hideLoading();

                console.log(coinData);

            }, "json");
        }
    } else if (infoOpened[index] == true) {
        $("#info"+index).slideUp("slow").empty();
        infoOpened[index] = false;

        hideLoading();
    }
}

// displaying coin info

const showInfo = (coinData, index) => {
    $("#info"+index).slideDown("slow").append(`
            <td colspan="3">
                <table class="table table-bordered">
                    <tr>
                        <td><img src="${coinData.image.small}"/></td>
                        <td>${coinData.market_data.current_price.usd}$</td>
                        <td>${coinData.market_data.current_price.eur}&#8364</td>
                        <td>${coinData.market_data.current_price.ils}&#8362</td>
                    </tr>
                </table>
            </td>
    `);
    infoOpened[index] = true;
}

// getting coins

$(()=>{showLoading();});

$.get("https://api.coingecko.com/api/v3/coins/list", (data) => {
    getCoins(data);
}, "json");

// variables

let coins = [];
let coinInfo = `<table class="table table-hover">`;
let infoOpened = [];
let chosenCoins = [];
let liveReports = [];
let coinsToDisable = "";
let displayedLiveReports = "";
let liveChartData = {
    liveChartData0: [],
    liveChartData1: [],
    liveChartData2: [],
    liveChartData3: [],
    liveChartData4: []
};
let chartLines = [];

//function for getting and displaying coins

const getCoins = (data) => {

    for (let index=1500; index < 1600; index++) {
        coins.push(data[index]);
        chosenCoins.push(false);
    }

    makeTable();

    hideLoading();

    //displaying coins list

    $("#coins").append(coinInfo);

    //search function

    $("#search").on("keyup", function() {
        let searchValue = $("#search").val().toLowerCase();
        $("#coins tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(searchValue) > -1);
        });
    });
}

//function for adding table of coins

const makeTable = () => {
    for (let index=0; index < coins.length; index++) {
        infoOpened[index] = false
        coinInfo += `
        <tr class="coin">
            <td><h5>${coins[index].symbol}</h5></td>
            <td>${coins[index].name}</td>
            <td><input type="button" id="moreInfo${index}" class="btn btn-primary" value="More info" onclick="openInfo(${index})"/></td>    
            <td>    
            <div class="form-check form-switch">
                <input type="checkbox" id="switch${index}" class="form-check-input" ${chosenCoins[index] ? "checked" : ""} onchange="addLiveReports(${index})"/>
            </div>
            </td>
        </tr>
        <tr id="info${index}">

        </tr>
        `
    };

    coinInfo += `</table>`;
}

//adding live reports

const addLiveReports = (index) => {
    if (chosenCoins[index]==false) {
        chosenCoins[index] = true;
        $("#switch"+index).prop("checked", true);
        liveReports.push(coins[index]);
        $("#modalBody").append(`
        <tr class="coin" id="row${index}">
            <td><h5>${coins[index].symbol}</h5></td>
            <td>${coins[index].name}</td>
            <td>    
            <div class="form-check form-switch">
                <input type="checkbox" checked id="switch${index}" class="form-check-input" onchange="addLiveReports(${index})"/>
            </div>
            </td>
        </tr>`);
        console.log(liveReports);
    } else {
        chosenCoins[index] = false;
        $("#switch"+index).prop("checked", false);
        let reportIndex = liveReports.indexOf(coins[index]);
        liveReports.splice(reportIndex, 1);
        console.log(liveReports);
        $("#row"+index).remove();
    };
    if (liveReports.length>5) {
        $("#reportsModal").modal("show");
        $("#closeModal").prop("disabled", true);
    } else {
        $("#closeModal").prop("disabled", false);
    } 
}

const reportsToDisplay = () => {
    for (let index = 0; index < liveReports.length; index++) {
        if (index == liveReports.length - 1) {
            displayedLiveReports += liveReports[index].symbol;
            chartLines.push({
                type: "line",
                name: liveReports[index].symbol,
                showInLegend: true,
                xValueFormatString: "HH:mm:ss",
                dataPoints: liveChartData["liveChartData"+index]
            });
        } else {
        displayedLiveReports += `${liveReports[index].symbol},`;
        chartLines.push({
            type: "line",
            name: liveReports[index].symbol,
            showInLegend: true,
            xValueFormatString: "HH:mm:ss",
            dataPoints: liveChartData["liveChartData"+index]
        },);
    }}
};

//about button

$(()=>{$("#about").on("click", function () {
    $(this).addClass("btn-primary");
    $(this).removeClass("btn-outline-primary");
    $("#home").addClass("btn-outline-primary");
    $("#home").removeClass("btn-primary");
    $("#live").addClass("btn-outline-primary");
    $("#live").removeClass("btn-primary");
    $("#coins").empty().append(`
    <div style="padding: 10px">
    <h1>Semyon Khramushin</h1>
    <h5>City: Haifa | e-mail: khram89@gmail.com </h5>
    <br/>
    <h2>Objective</h2>
    <p>Highly motivated and skilled web developer with proficiency in HTML, CSS, Bootstrap, JavaScript, JQuery, REST, AJAX, TypeScript, React, and Axios. Fluent in Russian and Hebrew, with intermediate proficiency in English. Seeking to leverage my technical skills to contribute to a forward-thinking company.</p>
    <h2>Skills</h2>
    <ul>
        <li>Web Development: Proficient in HTML, CSS, Bootstrap, JavaScript, JQuery, REST, AJAX, TypeScript, React, and Axios.</li>
        <li>Languages: Russian (Native), Hebrew (Fluent), English (Intermediate)</li>
    </ul>
    <h2>Relevant education</h2>
    <h5>Computer Technician Course | מכללה למנהל | 2020</h5>
    <p>Completed a computer technician course at מכללה למנהל.</p>
    <h5>Full Stack Web Developer Course | John Bryce | Currently Studying</h5>
    <p>Currently studying to become a full stack web developer at John Bryce.</p>
    </div>
    `);
    displayedLiveReports = "";
    chartLines = [];
    liveChartData = {
        liveChartData0: [],
        liveChartData1: [],
        liveChartData2: [],
        liveChartData3: [],
        liveChartData4: []
    };
});})

//home button

$(()=>{$("#home").on("click", function () {
    $(this).addClass("btn-primary");
    $(this).removeClass("btn-outline-primary");
    $("#live").addClass("btn-outline-primary");
    $("#live").removeClass("btn-primary");
    $("#about").addClass("btn-outline-primary");
    $("#about").removeClass("btn-primary");
    $("#coins").empty();
    coinInfo = `<table class="table table-hover">`;
    makeTable();
    $("#coins").append(coinInfo);
    displayedLiveReports = "";
    chartLines = [];
    liveChartData = {
        liveChartData0: [],
        liveChartData1: [],
        liveChartData2: [],
        liveChartData3: [],
        liveChartData4: []
    };
});})

//live reports button

$(()=>{$("#live").on("click", function () {
    $(this).addClass("btn-primary");
    $(this).removeClass("btn-outline-primary");
    $("#home").addClass("btn-outline-primary");
    $("#home").removeClass("btn-primary");
    $("#about").addClass("btn-outline-primary");
    $("#about").removeClass("btn-primary");   
    reportsToDisplay();
    showLoading();
    liveChart();
    hideLoading();
});})

// making live chart

const liveChart = () => {
    let chartData = []; 
    let timeCode = new Date();
    let options = {
        theme: "light2",
        title: {
            text: "Live Data"
        },
        axisX:{
            valueFormatString: "HH:mm:ss"
        },
        
        data: chartLines
    };
    
    $("#coins").CanvasJSChart(options);
    updateData();

    
    function addData(liveData) {
            for (item in liveData) {
                console.log(liveData[item]);
            if (liveData[item] || liveData[item].USD){
                chartData.push({x: timeCode, y: liveData[item].USD});
            } else { chartData.push({x: timeCode, y: 0}); }
        } 
        
        let lengthDiff = liveReports.length - chartData.length;

        if (lengthDiff > 0) {
            for (let index = 0; index < lengthDiff; index++) {
                chartData.push({x: timeCode, y: 0});
            }
        }
        
            liveChartData.liveChartData0.push(chartData[0]);
            liveChartData.liveChartData1.push(chartData[1]);
            liveChartData.liveChartData2.push(chartData[2]);
            liveChartData.liveChartData3.push(chartData[3]);
            liveChartData.liveChartData4.push(chartData[4]);
            chartData = [];
            
            console.log(liveChartData);
                 $("#coins").CanvasJSChart().render()
                 setTimeout(updateData, 2000);       
    }
    
    function updateData() {
        timeCode = new Date();
        $.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms="+displayedLiveReports+"&tsyms=USD&api_key={b9b5a781deb8e28fb3de688d192b8fe8929eb7ee2973fdde464fe66001d7ae98}", (liveData) => {addData(liveData)}, "json");
    }

    }






