function getFormattedDateFromTime(date: Date) {
  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1; // Months start at 0!
  let dd = date.getDate();

  if (dd < 10) dd = parseInt("0" + dd);
  if (mm < 10) mm = parseInt("0" + mm);

  return dd + "/" + mm + "/" + yyyy;
}

export default getFormattedDateFromTime;
