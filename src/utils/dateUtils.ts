export function getHourFromDate(date: Date) {
  const hour = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${hour}:${minutes}`
}

export function getDateMonthAndYer(date: Date) {
  const day = date.getDate().toString().padStart(2, '0');
  const month = date.getMonth().toString().padStart(2, '0');
  const year = date.getFullYear().toString().padStart(2, '0');

  return `${day}.${month}.${year}`;
}