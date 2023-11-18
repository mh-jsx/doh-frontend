export interface IAlertProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  onClose: () => void;
}
