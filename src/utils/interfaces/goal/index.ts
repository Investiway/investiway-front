export interface Index {
  title: string;
  savingGoal: number | string;
  priority: string;
  type: string;
  date: string;
  description: string;
  remainingAmount: string;
}
export interface FilterGoal {
  type: string;
  date: any;
  priority: string;
  keyword: string;
}
