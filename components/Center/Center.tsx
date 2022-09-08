import "./center.css";

export interface CenterProps {
  children: JSX.Element;
}

function Center({ children }: CenterProps) {
  return <div className="center">{children}</div>;
}

export default Center;
