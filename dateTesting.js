/*
const dateToString = (dateObj, format) => {

}

const stringToDate = (date, foramt) => {

}

const add = (dateStr, amount) => {

}
/*
let d = new Date();
console.log(d);
d.setHours(d.getHours() + 5);
console.log(d);
*/


String.prototype.hoursOrDays = function(){
    let str = this;
    if(str[str.length-1].toUpperCase() == 'D'){
        return 'day';
    }else if(str[str.length-1] == 'H'){
        return 'hour';
    }
    else{
        return new Error("Invalid Input");
    }
}

Date.prototype.format = (function(str){
    let MMM = ['Jan', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Aug', 'Seb', 'Oct', 'Nov', 'Dec'];
    let MMMM = ['January', 'February', 'March', 'Abril', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let date = this;
    let finalValue = "";
    let index = 0;

    const searchPattern = (str, pattern, modifier) => {
        let rE = new RegExp(pattern, modifier); 
        return str.match(rE);
    }
    const searchMeridiem = () =>{
       if(arr.includes('a')  || arr.includes('A') || arr.includes('aa') || arr.includes('AA')){
           return true;
       }else{
           return false;
       }
    }
    const addTime = () => {
        if(arr.includes('m')){
            finalValue += ":";
            finalValue += date.getMinutes(); 
        }
        else if(arr.includes('mm')){
            let min = date.getMinutes();
            if(min < 10){
                min = '0'+min;
            }
            finalValue += ":";
            finalValue += min;
        }
        if(arr.includes('s') || arr.includes('S')){
            finalValue += ":";
            finalValue += date.getSeconds(); 
        }
        else if(arr.includes('ss') || arr.includes('SS')){
            let sec = date.getSeconds();
            if(sec < 10){
                sec = '0'+sec;
            }
            finalValue += ":";
            finalValue += sec;
        }
        if(arr.includes('a')){
            finalValue += " ";
            if(date.getHours() >= 12){
                finalValue += "p";
            }else{
                finalValue += "a";
            }
        }
        else if(arr.includes('A')){
            finalValue += " ";
            if(date.getHours() >= 12){
                finalValue += "P";
            }else{
                finalValue += "A";
            }
        }
        else if(arr.includes('aa')){
            finalValue += " ";
            if(date.getHours() >= 12){
                finalValue += "pm";
            }else{
                finalValue += "am";
            }
        }
        else if(arr.includes('AA')){
            finalValue += " ";
            if(date.getHours() >= 12){
                finalValue += "PM";
            }else{
                finalValue += "AM";
            }
        }
    }
    let separators = searchPattern(str,/[\,/-\s]/, 'g');
    let sizeSeparators = 0;
    if(separators != null){
        sizeSeparators = separators.length;
    }
    //console.log(separators);

    let arr = str.split(/[.\-_\s,:/]/);
    //console.log(arr);
  
    for(let i in arr){
        
        if(arr[i].toUpperCase() == 'YYYY'){
            finalValue += date.getFullYear().toString();
        }
        else if(arr[i].toUpperCase() == 'YY'){
            finalValue += (date.getYear()%100).toString();
        }
        else if(arr[i] == 'M' ){
            finalValue += (date.getMonth()+1).toString();
        }
        else if(arr[i] == 'MM' ){
            let mon = date.getMonth()+1;
            if(mon < 10){
                mon = '0'+mon;
            }
            finalValue += mon.toString();
        }
        else if(arr[i] == 'MMM' ){
            finalValue += MMM[date.getMonth()];
        }
        else if(arr[i] == 'MMMM' ){
            finalValue += MMMM[date.getMonth()];
        }
        else if(arr[i].toUpperCase() == 'D' ){
            finalValue += (date.getDate()).toString();
        }
        else if(arr[i].toUpperCase() == 'DD' ){
            let day = (date.getDate());
            if(day < 10){
                day = '0' + day;
            }
            finalValue += day.toString();
        }
        else if(arr[i] == 'H' ){
            if(searchMeridiem() == true){
                let hour = date.getHours();
                hour = hour%12;
                hour = hour==0?12:hour;
                finalValue += hour;
            }
            else{
                finalValue += date.getHours();
            }
            addTime();
        }
        else if(arr[i] == 'HH' ){
            let hour = date.getHours();

            if(searchMeridiem() == true){
                hour = hour%12;
                hour = hour==0?12:hour;
                if(hour < 10){
                    hour = '0' + hour;
                }
                finalValue += hour;
            }
            else{
                if(hour < 10){
                    hour = '0' + hour;
                }
                finalValue += date.getHours();
            }
            addTime();
        }
        else if(arr[i].toUpperCase() != 'S' && arr[i].toUpperCase() != 'SS' && arr[i] != 'm' && arr[i] != 'mm' &&
            arr[i] != 'a' && arr[i] != 'A' && arr[i] != 'aa' && arr[i] != 'AA'){
            return new Error("Invalid Format");
        }
        if(index < sizeSeparators){
            finalValue += separators[index];
            index++;
        }
    }    
    
    return finalValue;
    
});
let t = new Date();
let str = '55d';
//console.log(str.hoursOrDays());
//console.log(t.format("dd/YYYY-MMMM-MM HH:mm:SS aa"));
console.log(t.format("YY HH aa"));
