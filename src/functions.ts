import Num2persian from "num2persian";

const ConvertNumToPersianMonth = (num: number) => {
  let monthName = "";
  const Farivardin = "فروردین";
  const Ordibehesht = "اردیبهشت";
  const Khordad = "خرداد";
  const Tir = "تیر";
  const Mordad = "مرداد";
  const Shahrivar = "شهریور";
  const Mehr = "مهر";
  const Aban = "آبان";
  const Azar = "آذر";
  const Dey = "دی";
  const Bahman = "بهمن";
  const Esfand = "اسفند";

  if (num == null || num == undefined) return "";
  switch (num) {
    case 1:
      monthName = Farivardin;
      break;
    case 2:
      monthName = Ordibehesht;
      break;
    case 3:
      monthName = Khordad;
      break;
    case 4:
      monthName = Tir;
      break;
    case 5:
      monthName = Mordad;
      break;
    case 6:
      monthName = Shahrivar;
      break;
    case 7:
      monthName = Mehr;
      break;
    case 8:
      monthName = Aban;
      break;
    case 9:
      monthName = Azar;
      break;
    case 10:
      monthName = Dey;
      break;
    case 11:
      monthName = Bahman;
      break;
    case 12:
      monthName = Esfand;
      break;
  }
  return monthName;
};

export const ConvertDateToLetters = (date: string) => {
  let dateInLetters = "";
  const M = "م";
  const Three = "سوم";
  const TwentyThree = "بیست و سوم";
  const Thirty = "سی ام";
  if (date == null || date == "" || date == undefined) {
    return dateInLetters;
  } else {
    let dateInNum = date;
    dateInNum = dateInNum.replace("/", "").replace("/", "");
    /**/
    if (dateInNum != null && dateInNum != "" && dateInNum != undefined) {
      if (dateInNum.length == 8) {
        const strYear = Num2persian(dateInNum.substr(0, 4));
        const strMonth = ConvertNumToPersianMonth(
          parseInt(dateInNum.substr(4, 2))
        );
        let strDay = "";
        if (parseInt(dateInNum.substr(6, 2)) == 3) {
          strDay = Three;
        } else if (parseInt(dateInNum.substr(6, 2)) == 23) {
          strDay = TwentyThree;
        } else if (parseInt(dateInNum.substr(6, 2)) == 30) {
          strDay = Thirty;
        } else {
          strDay = Num2persian(dateInNum.substr(6, 2)) + M;
        }
        dateInLetters = strDay + " " + strMonth + " " + strYear;
      }
    }
    /**/
    return dateInLetters;
  }
};
