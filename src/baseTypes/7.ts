/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
  MON = "working",
  TUE = "working",
  WEN = "working",
  THU = "working",
  FRI = "working",
  SAR = "weekend",
  SUN = "weekend",
}

function isWeekend(day: Day) {
  if (day === "working") {
    false;
  } else {
    true;
  }
}
