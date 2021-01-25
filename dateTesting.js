String.prototype.hoursOrDays = function () {
  let str = this;
  if (str[str.length - 1].toUpperCase() == "D") {
    return "day";
  } else if (str[str.length - 1] == "H") {
    return "hour";
  } else {
    return new Error("Invalid Input");
  }
};

String.prototype.formatDate = function (format) {
  let arrKeys = format.split(/[:/-\s]/);
  let arrValues = this.split(/[:/-\s]/);
  let MMM = [
    "Jan",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Seb",
    "Oct",
    "Nov",
    "Dec",
  ];
  let MMMM = [
    "January",
    "February",
    "March",
    "Abril",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let date = this;
  let ht = {
    year: 1,
    month: 1,
    days: 1,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
  //console.log(arrKeys);
  //console.log(arrValues);
  for (let i in arrKeys) {
    if (arrKeys[i].toUpperCase() === "Y") {
      ht.year = arrValues[i];
    } else if (arrKeys[i].toUpperCase() === "YY") {
      ht.year = arrValues[i];
    } else if (arrKeys[i] === "M") {
      ht.month = arrValues[i];
    } else if (arrKeys[i] === "MM") {
      ht.month = arrValues[i];
    } else if (arrKeys[i] === "MMM") {
      ht.month = MMM.indexOf(arrValues[i]) + 1;
    } else if (arrKeys[i] === "MMMM") {
      ht.month = MMMM.indexOf(arrValues[i]) + 1;
    } else if (arrKeys[i].toUpperCase() === "D") {
      ht.days = arrValues[i];
    } else if (arrKeys[i].toUpperCase() === "DD") {
      ht.days = arrValues[i];
    } else if (arrKeys[i] == "H") {
      ht.hours = arrValues[i];
    } else if (arrKeys[i] == "HH") {
      ht.hours = arrValues[i];
    } else if (arrKeys[i] == "m") {
      ht.minutes = arrValues[i];
    } else if (arrKeys[i] == "mm") {
      ht.minutes = arrValues[i];
    } else if (arrKeys[i].toUpperCase() === "S") {
      ht.seconds = arrValues[i];
    } else if (arrKeys[i].toUpperCase() === "SS") {
      ht.seconds = arrValues[i];
    } else if (arrKeys[i] === "a") {
      if (arrValues[i] == "p" && ht.hours != 12) {
        ht.hours = parseInt(ht.hours) + 12;
      } else if (arrValues[i] == "a" && ht.hours == 12) {
        ht.hours = 0;
      }
    } else if (arrKeys[i] === "A") {
      if (arrValues[i] == "P" && ht.hours != 12) {
        ht.hours = parseInt(ht.hours) + 12;
      } else if (arrValues[i] == "A" && ht.hours == 12) {
        ht.hours = 0;
      }
    } else if (arrKeys[i] === "aa") {
      if (arrValues[i] == "pm" && ht.hours != 12) {
        ht.hours = parseInt(ht.hours) + 12;
      } else if (arrValues[i] == "am" && ht.hours == 12) {
        ht.hours = 0;
      }
    } else if (arrKeys[i] === "AA") {
      if (arrValues[i] == "PM" && ht.hours != 12) {
        ht.hours = parseInt(ht.hours) + 12;
      } else if (arrValues[i] == "AM" && ht.hours == 12) {
        ht.hours = 0;
      }
    } else {
      return new Error("Invalid Input");
    }
  }

  return (
    ht.month +
    "/" +
    ht.days +
    "/" +
    ht.year +
    " " +
    ht.hours +
    ":" +
    ht.minutes +
    ":" +
    ht.seconds
  );
};

Date.prototype.format = function (str) {
  let MMM = [
    "Jan",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Seb",
    "Oct",
    "Nov",
    "Dec",
  ];
  let MMMM = [
    "January",
    "February",
    "March",
    "Abril",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let date = this;
  let finalValue = "";
  let index = 0;

  const searchPattern = (str, pattern, modifier) => {
    let rE = new RegExp(pattern, modifier);
    return str.match(rE);
  };
  const searchMeridiem = () => {
    if (
      arr.includes("a") ||
      arr.includes("A") ||
      arr.includes("aa") ||
      arr.includes("AA")
    ) {
      return true;
    } else {
      return false;
    }
  };
  const addTime = () => {
    if (arr.includes("m")) {
      finalValue += ":";
      finalValue += date.getMinutes();
    } else if (arr.includes("mm")) {
      let min = date.getMinutes();
      if (min < 10) {
        min = "0" + min;
      }
      finalValue += ":";
      finalValue += min;
    }
    if (arr.includes("s") || arr.includes("S")) {
      finalValue += ":";
      finalValue += date.getSeconds();
    } else if (arr.includes("ss") || arr.includes("SS")) {
      let sec = date.getSeconds();
      if (sec < 10) {
        sec = "0" + sec;
      }
      finalValue += ":";
      finalValue += sec;
    }
    if (arr.includes("a")) {
      finalValue += " ";
      if (date.getHours() >= 12) {
        finalValue += "p";
      } else {
        finalValue += "a";
      }
    } else if (arr.includes("A")) {
      finalValue += " ";
      if (date.getHours() >= 12) {
        finalValue += "P";
      } else {
        finalValue += "A";
      }
    } else if (arr.includes("aa")) {
      finalValue += " ";
      if (date.getHours() >= 12) {
        finalValue += "pm";
      } else {
        finalValue += "am";
      }
    } else if (arr.includes("AA")) {
      finalValue += " ";
      if (date.getHours() >= 12) {
        finalValue += "PM";
      } else {
        finalValue += "AM";
      }
    }
  };
  let separators = searchPattern(str, /[:\,/-\s]/, "g");
  let sizeSeparators = 0;
  if (separators != null) {
    sizeSeparators = separators.length;
  }
  //console.log(separators);

  let arr = str.split(/[.\-_\s,:/]/);
  //console.log(arr);

  for (let i in arr) {
    if (arr[i].toUpperCase() == "Y") {
      finalValue += date.getFullYear().toString();
    } else if (arr[i].toUpperCase() == "YY") {
      finalValue += (date.getYear() % 100).toString();
    } else if (arr[i] == "M") {
      finalValue += (date.getMonth() + 1).toString();
    } else if (arr[i] == "MM") {
      let mon = date.getMonth() + 1;
      if (mon < 10) {
        mon = "0" + mon;
      }
      finalValue += mon.toString();
    } else if (arr[i] == "MMM") {
      finalValue += MMM[date.getMonth()];
    } else if (arr[i] == "MMMM") {
      finalValue += MMMM[date.getMonth()];
    } else if (arr[i].toUpperCase() == "D") {
      finalValue += date.getDate().toString();
    } else if (arr[i].toUpperCase() == "DD") {
      let day = date.getDate();
      if (day < 10) {
        day = "0" + day;
      }
      finalValue += day.toString();
    } else if (arr[i] == "H") {
      if (searchMeridiem() == true) {
        let hour = date.getHours();
        hour = hour % 12;
        hour = hour == 0 ? 12 : hour;
        finalValue += hour;
      } else {
        finalValue += date.getHours();
      }
      addTime();
      index++;
      finalValue += " ";
      continue;
    } else if (arr[i] == "HH") {
      let hour = date.getHours();

      if (searchMeridiem() == true) {
        hour = hour % 12;
        hour = hour == 0 ? 12 : hour;
        if (hour < 10) {
          hour = "0" + hour;
        }
        finalValue += hour;
      } else {
        if (hour < 10) {
          hour = "0" + hour;
        }
        finalValue += hour;
      }
      addTime();
      finalValue += " ";
      index++;
      continue;
    } else if (
      arr[i].toUpperCase() != "S" &&
      arr[i].toUpperCase() != "SS" &&
      arr[i] != "m" &&
      arr[i] != "mm" &&
      arr[i] != "a" &&
      arr[i] != "A" &&
      arr[i] != "aa" &&
      arr[i] != "AA"
    ) {
      return new Error("Invalid Format");
    } else {
      index++;
      continue;
    }
    if (index < sizeSeparators) {
      finalValue += separators[index];
      index++;
    }
  }

  return finalValue.trim();
};

const dateToString = (dateObj, formatStr) => {
  return dateObj.format(formatStr);
};

const stringToDate = (date, foramt) => {
  return new Date(date.formatDate(foramt));
};

const add = (date, amount) => {
  let str;
  if (amount.hoursOrDays() == "day") {
    str = amount.slice(0, amount.length - 1);
    date.setDate(date.getDate() + parseInt(str));
    return date;
  } else if (amount.hoursOrDays() == "hour") {
    str = amount.slice(0, amount.length - 1);
    date.setHours(date.getHours() + parseInt(str));
    return date;
  } else {
    return new Error("Invalid amount");
  }
};

module.exports = { dateToString, add, stringToDate };
