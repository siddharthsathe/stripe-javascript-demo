import { Button as ReactstrapButton } from "reactstrap";

export const Button = ({ label, color, isDisabled, submitCallbackFn }) => (
  <ReactstrapButton
    className="mt-4"
    color={color}
    block
    disabled={isDisabled}
    onClick={() => submitCallbackFn()}
  >
    {label}
  </ReactstrapButton>
);
