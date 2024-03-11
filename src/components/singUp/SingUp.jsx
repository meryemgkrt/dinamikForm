import { useState } from "react";
import "./singUp.css";

const SingUp = (props) => {
  const [focused, setFocused] = useState(false);
  const { id, onChange, label, errorMessage, ...inputProps } = props;
  return (
    <div className="for-input">
      <label className="font-bold text-center text-[16px] text-white">
        {label}
      </label>
      <input
        type="text"
        className="inputClass"
        name={props.name}
        {...inputProps}
        onChange={onChange}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
      />
      <span className="text-red-400 text-[12px] items-start font-semibold">
        {errorMessage}
      </span>
    </div>
  );
};

export default SingUp;

SingUp.propTyps = {
  name: String,
  label: String,
  errorMessage: String,
  onChange: Function,
  id: Number,
};
