export class EventComp {
  title: string = '';
  location: string = '';
  time: string = '';
  weekday: string = '';
  month: string = '';
  date: string = '01';
  buy_ticket: boolean = false;
  more_info: boolean = true;

  constructor(
    title: string = '',
    location: string = '',
    time: string = '',
    weekday: string = '',
    month: string = '',
    date: string = '',
    buy_ticket: boolean = false,
    more_info: boolean = true
  ) {
    this.title = title;
    this.location = location;
    this.time = time;
    this.weekday = weekday;
    this.month = month;
    this.date = date;
    this.buy_ticket = buy_ticket;
    this.more_info = more_info;
  }

}

