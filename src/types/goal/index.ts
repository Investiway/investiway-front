import dayjs from 'dayjs';

export interface Goal {
  _id: string;
  userId: string;
  name: string;
  amountTarget: number | string;
  priority: number;
  typeId: string;
  completeDate: dayjs.ConfigType;
  description: string;
  remainingAmount: string;
  amountMinimumPerMonth: number;
}
export interface FilterGoal {
  typeId: string;
  date: any | undefined;
  priority: string | undefined;
  search: string | undefined;
  page: number;
  take: number;
}
