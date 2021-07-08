export interface Todo {
  id?: number;
  dateOfCreation: Date | string;
  task: string;
  status: string;
  dateOfConclusion: Date | string;
}
