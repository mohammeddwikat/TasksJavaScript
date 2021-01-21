const myModule = require('./dateTesting.js');

const dateToString = myModule.dateToString;

let date = new Date();

test('should return year only in YY format', () => {
    expect(dateToString(date, "YY")).toBe('21');
});
test('should return year only in YYYY format', () => {
    expect(dateToString(date, "YYYY")).toBe('2021');
});
test('should return Month only in M format', () => {
   
});
test('should return Month only in MM format', () => {
   
});
test('should return Month only in MMM format', () => {
   
});
test('should return Month only in MMMM format', () => {
   
});
test('should return day only in D format', () => {
   
});
test('should return day only in DD format', () => {
   
});
test('should return Year and month only in any format with \'/\' separator', () => {
   
});
test('should return Year and month only in any format with \'-\' separator', () => {
   
});
test('should return Year and month only in any format with \' \' separator', () => {
   
});
test('should return Year and day only in any format with \' \' separator', () => {
   
});
test('should return Year and day only in any format with \'-\' separator', () => {
   
});
test('should return Year and day only in any format with \'/\' separator', () => {
   
});
test('should return Month and Day only in any format with \' \' separator', () => {
   
});
test('should return Month and Day only in any format with \'-\' separator', () => {
   
});
test('should return Month and Day only in any format with \'/\' separator', () => {
   
});
test('should return Year, Month and Day only in any format with [- -] separators', () => {
   
});
test('should return Year, Day and Month only in any format with [- /] separator', () => {
   
});
test('should return Day, Year and Month only in any format with [/ /] separator', () => {
   
});
test('should return Day, Month and Year only in any format with [\' \' \' \'] separator', () => {
   
});
test('should return Month, Day and Year only in any format with [\' \' /] separator', () => {
   
});
test('should return Month, Year and Day only in any format with [- \' \'] separator', () => {
   
});
test('should return Hour only in H format', () => {
   
});
test('should return Hour only in HH format', () => {
   
});
test('should return Hour and minutes only in m format the hour in any format', () => {
   
});
test('should return Hour and minutes only in mm format the hour in any format', () => {
   
});
test('should return Hour and seconds only in S format the hour in any format', () => {
   
});
test('should return Hour and Seconds only in SS format the hour in any format', () => {
   
});
test('should return Hour and minutes with seconds in any format', () => {
   
});
test('should return Hour and minutes with seconds in any format with Meridiem in a format after midday ', () => {
   
});
test('should return Hour and minutes with seconds in any format with Meridiem in a format before midday ', () => {
   
});
test('should return Hour and minutes with seconds in any format with Meridiem in A format after midday ', () => {
   
});
test('should return Hour and minutes with seconds in any format with Meridiem in A format before midday ', () => {
   
});
test('should return Hour and minutes with seconds in any format with Meridiem in aa format after midday ', () => {
   
});
test('should return Hour and minutes with seconds in any format with Meridiem in aa format before midday ', () => {
   
});
test('should return Hour and minutes with seconds in any format with Meridiem in AA format after midday ', () => {
   
});
test('should return Hour and minutes with seconds in any format with Meridiem in AA format before midday ', () => {
   
});
test('should return the full date and time', () => {
   
});
test('should return full time and the full date with any format for both', () => {
   
});
test('should return the full date and time with [-] separator between them', () => {
   
});
test('should return the full date and time with [/] separator between them', () => {
   
});
test('should return the full date and time with [\' \'] separator between them', () => {
   
});


/*
npm -s run test
yaer only : 2 formats YY and YYYY  **
month only : 4 formats M MM MMM MMMM ***
days only : two formats D DD ***
Years and Month only: using any format with the separators '-' '/' ' ' ***
Years and days only: using any format with the separators '-' '/' ' ' ***
Month and days only: using any format with the separators '-' '/' ' ' ***
Years, Month and days only: using any format by changing the positions 6 testcases ****

separators between Date's components:
    Years, Month and days only: using any format with '/' separator ***
    Years, Month and days only: using any format with ' ' separator ***
    Years, Month and days only: using any format with '-' separator ****

    Years, Month and days only: using any format with '-' and '/' separators ***
    Years, Month and days only: using any format with '/' and ' ' separators ***
    Years, Month and days only: using any format with ' ' and '-' separators ***

Hours only: two formats H HH ***
Hours and Minuets only: two formats m mm ****
Hours and seconds only: two formats s ss ****
Hours, Minuets and seconds only: with any format ***

Hours, Minuets and seconds with meridiem: 4 formats a A aa AA and the two states after and before midday : 8tc's ***
Date with time (Years, months, days, hours, minuets, seconds and meridiem): 2 tc's ** 

separators between Date and time:
Date with time (Years, months, days, hours, minuets, seconds and meridiem): separator '-' ***
Date with time (Years, months, days, hours, minuets, seconds and meridiem): separator ' ' ***
Date with time (Years, months, days, hours, minuets, seconds and meridiem): separator '/' ***

43 test cases
*/