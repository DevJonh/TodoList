export default (date: Date) => {
  let months = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ];

  let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

  let month = months[date.getMonth()];
  let fullYear = date.getFullYear();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();

  return `${day} ${month} ${fullYear} - ${hour}:${minute}:${second}`;
};
