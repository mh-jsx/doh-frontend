export interface IMenuItem {
  id: string;
  title?: string;
  icon?: React.FunctionComponent<React.ComponentProps<'svg'>>;
  iconClassName?: string;
  textClassName?: string;
  /**
   * @description This callback is called when the user increases or decreases the value of the item
   * @param value The value of the item
   * @param id The id of the item
   * @returns void
   */
  onChangeValues?: (value: number, id: string) => void;
}
