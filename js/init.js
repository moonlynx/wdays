$(document).ready(function() {

  const firstWeek = "firstWeek",
        lastWeek = "lastWeek",
        description = "description",
        dekret = "dekret",
        pdr = "pdr",
        week = "week",
        regDate = "regDate",
        tubDisp = "tubDisp",
        startDayId = "startDay",
        lastDayId = "lastDay";

  var dDays = DDays(),
      periods = Periods(),
      periodFields = [];
  
  $("#inputDate").datepicker({
    prevText: "Назад",
		nextText: "Вперед",
    monthNames: [
      "Январь", "Февраль", "Март",
      "Апрель", "Май", "Июнь",
      "Июль", "Август", "Сентябрь",
      "Октябрь", "Ноябрь", "Декабрь"
    ],
    monthNamesShort: [
      "Янв", "Фев", "Мар",
      "Апр", "Май", "Июн",
      "Июл", "Авг", "Сен",
      "Окт", "Ноя", "Дек"
    ],
    dayNamesMin: ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],
    firstDay: 1,
    dateFormat: "dd.mm.yy"
  });

  $("#dekretDescription").text(dDays[dekret][description]);
  $("#pdrDescription").text(dDays[pdr][description]);
  $("#regDateDescription").text(dDays[regDate][description]);
  $("#tubDispDescription").text(dDays[tubDisp][description]);

  periods.forEach(function(period) {
    var id = "#" + period["prefix"] + "Description",
        days = "#" + period["prefix"] + "Days",
        table = "#" + period["prefix"] + "Table"; 
    
    periodFields.push({
      "field": $(days),
      "firstWeek": period[firstWeek],
      "lastWeek": period[lastWeek]
    });
    
    $(id).text(period[description] + " (" + period[firstWeek] + " - " + period[lastWeek] + "):");
    $(days).text("-");    
    
    period["events"].forEach(function(event) {
      var row = $("<div>", {class: "row"}),
          descriptionCell = $("<div>", {class: "cell event"}),
          weekCell = $("<div>", {class: "cell"}),
          datesCell = $("<div>", {class: "cell dates"}),
          actualDateCell = $("<div>", {class: "cell"});

      periodFields.push({
        "field": datesCell,
        "firstWeek": event[firstWeek],
        "lastWeek": event[lastWeek]
      });

      descriptionCell.text(event[description]);
      weekCell.text(event[firstWeek] + " - " + event[lastWeek]);
           
      datesCell.html(
        '<table>' +
        '<tr><td>С:</td><td id="' + startDayId + '">-</td></tr>' +
        '<tr><td>ДО:</td><td id="' + lastDayId + '">-</td></tr>' +
        '</table>'
      );
     
      descriptionCell.appendTo(row);
      weekCell.appendTo(row);
      datesCell.appendTo(row);
      actualDateCell.appendTo(row);
      row.appendTo(table);
    });
  });

  $("#inputDate").on("change", function() {
    var inputDate = $(this).val().split(".");
    inputDate = new Date(inputDate.reverse().join("-"));
    
    if (inputDate !== "Invalid Date") {
      
      $("#dekretDay").text(getDay(inputDate, dDays[dekret][week], false));
      $("#pdrDay").text(getPdrDay(inputDate));
        
      fillPeriodDates(inputDate, periodFields);
    } else {
      alert("Неверная дата");
    }
  });

  $("#printBtn").on("click", function() { window.print(); });  
});