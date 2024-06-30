const convertPersianToEnglish = (text) => {
  const persianNumbersRegex = /[\u06F0-\u06F9]/g;

  const persianToEnglishMap = {
    "۰": "0",
    "۱": "1",
    "۲": "2",
    "۳": "3",
    "۴": "4",
    "۵": "5",
    "۶": "6",
    "۷": "7",
    "۸": "8",
    "۹": "9",
  };

  return text.replace(
    persianNumbersRegex,
    (match) => persianToEnglishMap[match]
  );
};

// Example usage
const persianText = "۱۲۳۴۵۶۷۸۹۰";
const englishText = convertPersianToEnglish(persianText);
console.log(englishText); // Output: 1234567890
