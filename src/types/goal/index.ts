import dayjs from 'dayjs';

export interface Goal {
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
  typeId: number | undefined;
  date: any | undefined;
  priority: string | undefined;
  search: string | undefined;
  page: number;
  take: number;
}
