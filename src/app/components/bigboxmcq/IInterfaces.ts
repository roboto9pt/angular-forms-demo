export interface IOption {
  option: string;
  id: string;
}

export interface IQuestion {
  text: string;
  options: IOption[];
}
