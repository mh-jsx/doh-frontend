export interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
  type?: 'submit' | 'reset' | 'button';
  variant?: 'text' | 'primary' | 'secondary' | 'default';
  children?: React.ReactNode;
  prefixElement?: React.ReactNode;
  suffixElement?: React.ReactNode;
}
