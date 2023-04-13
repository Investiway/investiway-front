import dayjs from 'dayjs';

export interface Goal {
  title: string;
  savingGoal: number | string;
  priority: string;
  type: string;
  date: dayjs.ConfigType;
  description: string;
  remainingAmount: string;
}
export interface FilterGoal {
  type: string;
  date: any;
  priority: string;
  keyword: string;
}
