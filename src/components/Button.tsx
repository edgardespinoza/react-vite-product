interface Prop {
  children: string;
  color?: 'primary'|'secondary'|'danger';
  onClick: () => void;
}

const Button = ({ children, color='primary', onClick }: Prop) => {
  return (
    <div className={"btn btn-" + color} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
