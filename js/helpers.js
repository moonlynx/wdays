function formatDate(date) {
    var monthNames = [
        "Января", "Февраля", "Марта",
        "Апреля", "Мая", "Июня", "Июля",
        "Августа", "Сентября", "Октября",
        "Ноября", "Декабря"
    ];
    
    var day = date.getDate(),
        monthIndex = date.getMonth(),
        year = date.getFullYear();
    
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }
  
  function getDay(date, week, isEndWeek) {
    var date = new Date(date);
    if (isEndWeek) {
      date.setDate(date.getDate() + (week * 7 - 1));
    } else {
      date.setDate(date.getDate() + ((week - 1) * 7));
    }    
      
    return formatDate(date);
  }
  
  function getPdrDay(date) {
    var date = new Date(date);
    date.setDate(date.getDate() + 7);
    date.setMonth(date.getMonth() - 3);
    date.setFullYear(date.getFullYear() + 1);
  
    return formatDate(date);
  }

  function fillPeriodDates(date, fields) {
    
    const startDayId = "#startDay",
          lastDayId = "#lastDay";
    
    var startDay,
        lastDay;
    
    fields.forEach(function(field) {
      startDay = getDay(date, field["firstWeek"], false);
      lastDay = getDay(date, field["lastWeek"], true);

      if (field["field"].children().length > 0) {
        
        field["field"].find(startDayId).text(startDay);
        field["field"].find(lastDayId).text(lastDay);

      } else {

        field["field"].text(startDay + " - " + lastDay);

      }
    }); 
  }