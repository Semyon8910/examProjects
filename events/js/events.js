class Events {
    constructor (eventName,minPrice,maxPrice,eventType,imageUrl,eventDate) {
        this.eventName = eventName;
        this.minPrice = minPrice;
        this.maxPrice = maxPrice;
        this.eventType = eventType;
        this.imageUrl = imageUrl;
        this.eventDate = eventDate;
}
}

var events = new Events(eventName,minPrice,maxPrice,eventType,imageUrl,eventDate);
var allEvents = [];

document.getElementById("addEvent").addEventListener("click",() => {

events.eventName = document.getElementById("eventName").value;
events.minPrice = document.getElementById("minPrice").value;
events.maxPrice = document.getElementById("maxPrice").value;
events.eventType = document.getElementById("eventType").value;
events.imageUrl = document.getElementById("imageUrl").value;
events.eventDate = document.getElementById("eventDate").value;

if (new Date(events.eventDate)<new Date()){
    alert ("תאריך לא תקין");
    return;
}

allEvents.push(events);

makeTable();
document.getElementById("events").reset();
});

const makeTable = () => {
    var table = `
    <table border>
        <tr>
            <th>שם האירוע</th>
            <th>מחיר מינימום</th>
            <th>מחיר מקסימום</th>
            <th>סוג האירוע</th>
            <th>תעריך</th>
            <th>תמונה של בעל האירוע</th>
            <th></th>
        <tr>`

    for (var index=0; index<allEvents.length; index++) {
        table+=`
        <tr>
            <td>${allEvents[index].eventName}</td>
            <td>${allEvents[index].minPrice}</td>
            <td>${allEvents[index].maxPrice}</td>
            <td>${allEvents[index].eventType}</td>
            <td>${allEvents[index].eventDate}</td>
            <td><img srс="${allEvents[index].imageUrl}" height="100" width="100"/></td>
            <td><input type="button" id="deleteEvent" value="הסר"></td>
        </tr>
        `
    }
    table += `</table>`
    document.getElementById("table").innerHTML = table;
}

