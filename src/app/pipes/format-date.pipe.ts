import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatdate',
})
export class FormartDate implements PipeTransform {
  private months = [
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

  transform(date: Date | string) {
    if (date === '') return '-';

    let newDate = new Date(date);

    let day =
      newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate();

    let month = this.months[newDate.getMonth()];
    let fullYear = newDate.getFullYear();
    let hour = newDate.getHours();
    let minute = newDate.getMinutes();
    let second =
      newDate.getSeconds() < 10
        ? `0${newDate.getSeconds()}`
        : newDate.getSeconds();

    return `${day} ${month} ${fullYear} - ${hour}:${minute}:${second}`;
  }
}
