const DMY = "dd-mm-yyyy";
const MDY = "mm-dd-yyyy";
const YMD = "yyyy-mm-dd";

function isValueInRange(start, end, value) {
  return value >= start && value <= end;
}

function isValidFormat(format) {
  return format === DMY || format === MDY || format === YMD;
}

function seperaters(format, date) {
  if (format === YMD) {
    return date[4] + date[7];
  }

  return date[2] + date[5];
}

function dateExtracter(format, date) {
  if (format === DMY) {
    return +date.slice(0, 2);
  }

  if (format === MDY) {
    return +date.slice(3, 5);
  }

  return +date.slice(8, 10);
}

function isDayInValidRange(format, date, day) {
  const month = monthExtracter(format, date);
  const year = yearExtracter(format, date);

  if (month === 4 || month === 6 || month === 9 || month === 11) {
    return isValueInRange(1, 30, day);
  }

  if (month === 2) {
    return isLeapYear(year)
      ? isValueInRange(1, 29, day)
      : isValueInRange(1, 28, day);
  }

  return isValueInRange(1, 31, day);
}

function monthExtracter(format, date) {
  if (format === DMY) {
    return +date.slice(3, 5);
  }

  if (format === MDY) {
    return +date.slice(0, 2);
  }

  return +date.slice(5, 7);
}

function yearExtracter(format, date) {
  if (format === YMD) {
    return +date.slice(0, 4);
  }

  return +date.slice(6, 10);
}

function isValidYear(format, date) {
  const year = yearExtracter(format, date);

  return isValueInRange(1, 9999, year);
}

function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

function isLeapYear(year) {
  if (isDivisible(year, 400)) {
    return true;
  }

  return !isDivisible(year, 100) && isDivisible(year, 4);
}

function isValidMonth(format, date) {
  const month = monthExtracter(format, date);

  return isValueInRange(1, 12, month);
}

function isValidDay(format, date) {
  const day = dateExtracter(format, date);

  return !isDayInValidRange(format, date, day);
}

function dateValidater(date, format) {
  if (!isValidYear(format, date)) {
    return "invalid year";
  }

  if (!isValidMonth(format, date)) {
    return "invalid month";
  }

  if (isValidDay(format, date)) {
    return "invalid day";
  }

  return "valid";
}

function validate(format, date) {
  if (!isValidFormat(format)) {
    return "invalid format";
  }

  if (seperaters(format, date) !== "--") {
    return "date not according to format";
  }

  if (date.length === 10) {
    return dateValidater(date, format, 2000, 12);
  }

  return "date not according to format";
}

function testValidate(format, date, expected) {
  const result = validate(format, date);
  console.log(
    result === expected ? "✅" : "❌",
    format,
    date,
    expected,
    result
  );
}

function testInvalidFormat() {
  testValidate("xx-yy-zzzz", " 1-01-2020", "invalid format");
  testValidate("dd-mm-mmmm", "01-01-2020", "invalid format");
  testValidate("yy-dd-mmmm", "01-01-2020", "invalid format");
  testValidate("mm-yy-dddd", "01-01-2020", "invalid format");
  testValidate("dd-dd-dddd", "01-01-2020", "invalid format");
}

function testDateNotInCorrectFormat() {
  testValidate(DMY, "12-11-111", "date not according to format");
  testValidate(DMY, "1341-11-19", "date not according to format");
  testValidate(DMY, "21-1-1651", "date not according to format");
  testValidate(DMY, "1-11-1981", "date not according to format");
  testValidate(YMD, "2157-11-1", "date not according to format");
  testValidate(YMD, "6149-1-11", "date not according to format");
  testValidate(YMD, "37541-1-21", "date not according to format");
  testValidate(YMD, "11-71-1451", "date not according to format");
}

function testInvalidYear() {
  testValidate(YMD, "0000-11-11", "invalid year");
  testValidate(YMD, "suii-11-11", "invalid year");
  testValidate(YMD, "ydmy-11-11", "invalid year");
  testValidate(DMY, "11-11-0000", "invalid year");
  testValidate(DMY, "11-11-suii", "invalid year");
  testValidate(DMY, "11-11-ydmy", "invalid year");
  testValidate(MDY, "11-11-0000", "invalid year");
  testValidate(MDY, "11-11-suii", "invalid year");
  testValidate(MDY, "11-11-ydmy", "invalid year");
}

function testInValidMonth() {
  testValidate(YMD, "0001-00-01", "invalid month");
  testValidate(YMD, "0001-13-01", "invalid month");
  testValidate(YMD, "0001-1s-01", "invalid month");
  testValidate(YMD, "0001-s1-01", "invalid month");
  testValidate(MDY, "00-01-0001", "invalid month");
  testValidate(MDY, "13-01-0001", "invalid month");
  testValidate(MDY, "1s-01-0001", "invalid month");
  testValidate(MDY, "s1-01-0001", "invalid month");
  testValidate(DMY, "01-00-0001", "invalid month");
  testValidate(DMY, "01-13-0001", "invalid month");
  testValidate(DMY, "01-1s-0001", "invalid month");
  testValidate(DMY, "01-s1-0001", "invalid month");
}

function testInvalidDay() {
  testValidate(DMY, "32-09-2023", "invalid day");
  testValidate(DMY, "30-02-2023", "invalid day");
  testValidate(DMY, "29-02-2023", "invalid day");
  testValidate(DMY, "31-11-2023", "invalid day");
  testValidate(DMY, "31-04-2023", "invalid day");

  testValidate(MDY, "02-30-2023", "invalid day");
  testValidate(MDY, "11-31-2023", "invalid day");
  testValidate(MDY, "02-29-2023", "invalid day");
  testValidate(MDY, "09-32-2023", "invalid day");
  testValidate(MDY, "04-31-2023", "invalid day");

  testValidate(YMD, "2023-02-30", "invalid day");
  testValidate(YMD, "2023-02-29", "invalid day");
  testValidate(YMD, "2023-11-31", "invalid day");
  testValidate(YMD, "2023-04-31", "invalid day");
  testValidate(YMD, "2023-09-32", "invalid day");
}
function testValidDate() {
  testValidate(YMD, "1900-02-28", "valid");
  testValidate(YMD, "2023-12-31", "valid");
  testValidate(YMD, "2024-02-29", "valid");
  testValidate(YMD, "2023-11-30", "valid");
  testValidate(YMD, "0001-01-01", "valid");
  testValidate(YMD, "1900-02-28", "valid");

  testValidate(DMY, "29-02-2024", "valid");
  testValidate(DMY, "31-12-2023", "valid");
  testValidate(DMY, "30-11-2023", "valid");
  testValidate(DMY, "01-01-0001", "valid");
  testValidate(DMY, "28-02-1900", "valid");
  testValidate(DMY, "28-02-1900", "valid");

  testValidate(MDY, "02-29-2024", "valid");
  testValidate(MDY, "12-31-2023", "valid");
  testValidate(MDY, "11-30-2023", "valid");
  testValidate(MDY, "01-01-0001", "valid");
  testValidate(MDY, "02-28-1900", "valid");
  testValidate(MDY, "02-28-1900", "valid");
}

function testAll() {
  testInvalidFormat();
  testValidDate();
  testDateNotInCorrectFormat();
  testInvalidYear();
  testInValidMonth();
  testInvalidDay();
}

testAll();
