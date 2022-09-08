import { ButtonProps } from "../Button/Button";
import { InputProps } from "../Input/Input";
import Button from "../Button/Button";
import Input from "../Input/Input";

export interface Suscription extends ButtonProps, InputProps {}

function Suscription({
  variant,
  disabled,
  children,
  size,
  placeholder,
}: Suscription) {
  return (
    <>
      <Button variant={variant} disabled={disabled}>
        {children}
      </Button>
      <Input size={size} placeholder={placeholder} />
    </>
  );
}

export default Suscription;
