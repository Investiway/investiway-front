import { GoalType } from './goalType';
export interface Response {
  data?: ResponseDataType;
}
export interface ResponseDataType {
  result?: any;
  error?: any;
  success: boolean;
}
export interface metaResponse {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  itemCount: number;
  page: number;
  pageCount: number;
  take: number;
}

export interface GoalTypeResponse {
  data: GoalType[];
  meta: metaResponse;
}
