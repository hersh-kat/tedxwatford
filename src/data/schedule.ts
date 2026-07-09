// The running order for the event. `type` controls styling:
//   'talk'        — a speaker slot (shown prominently)
//   'performance' — a musical / performance slot
//   'break'       — doors, breaks, dinner, close (shown muted)

export interface ScheduleItem {
  /** Display time, e.g. '4:00 pm'. */
  time: string;
  /** What's happening at this time. */
  title: string;
  type: 'talk' | 'performance' | 'break';
}

export const schedule: ScheduleItem[] = [
  { time: '4:00 pm', title: 'Doors open', type: 'break' },
  { time: '4:30 pm', title: 'Lawrence Rosenberg', type: 'talk' },
  { time: '4:50 pm', title: 'Vrinda, Lali & Janaki', type: 'talk' },
  { time: '5:10 pm', title: 'Tom Meyer', type: 'talk' },
  { time: '5:30 pm', title: 'Harpreet Kaur', type: 'talk' },
  { time: '5:50 pm', title: 'Short break', type: 'break' },
  { time: '6:00 pm', title: 'Elliot Bird, Hannah & Jeffery', type: 'talk' },
  { time: '6:20 pm', title: 'Dr Kapil Chawla', type: 'talk' },
  { time: '6:40 pm', title: 'Giancarlo Gaglione', type: 'talk' },
  { time: '7:00 pm', title: 'Dinner', type: 'break' },
  { time: '8:15 pm', title: 'Radhika Das', type: 'talk' },
  { time: '8:30 pm', title: 'Mantra Music Band', type: 'performance' },
  { time: '9:00 pm', title: 'Close', type: 'break' },
];
