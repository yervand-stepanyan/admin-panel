import { MONTH_NAMES } from '../globals/constants';

function dateFormatter(date) {
  const dateToConvert = new Date(date);
  const year = dateToConvert.getFullYear();
  const month = MONTH_NAMES[dateToConvert.getMonth()];
  const day =
    dateToConvert.getDate().toString().length > 1
      ? dateToConvert.getDate()
      : `0${dateToConvert.getDate()}`;
  const hours =
    dateToConvert.getHours().toString().length > 1
      ? dateToConvert.getHours()
      : `0${dateToConvert.getHours()}`;
  const minutes =
    dateToConvert.getMinutes().toString().length > 1
      ? dateToConvert.getMinutes()
      : `0${dateToConvert.getMinutes()}`;
  const seconds =
    dateToConvert.getSeconds().toString().length > 1
      ? dateToConvert.getSeconds()
      : `0${dateToConvert.getSeconds()}`;

  return `${day} ${month} ${year}, ${hours}:${minutes}:${seconds}`;
}

export default dateFormatter;
