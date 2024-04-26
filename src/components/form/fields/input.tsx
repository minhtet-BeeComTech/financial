"use client";
import { FieldContainer } from "./fieldcontainer";

interface InputComProps {
  fieldConProps?: any;
  leftComponent?: any;
  rightComponent?: any;
  placeholder?: string;
  onChange?: any;
  label?: string;
  inputProps?: any;
  value?: any;
}
export const InputCom: React.FC<InputComProps> = ({
  fieldConProps,
  leftComponent,
  rightComponent,
  inputProps,
  ...props
}) => {
  return (
    <FieldContainer {...props}>
      <div className="relative">
        {leftComponent && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-2">
            {leftComponent}
          </div>
        )}
        <input
          className={`w-full bg-primary rounded-[8px] h-[33px] text-typo placeholder-[#333] py-[6px] focus:outline-none focus:border-[#ccc] border border-border placeholder:text-[#ccc] ${
            leftComponent ? "pl-9" : "pl-3"
          }`}
          {...props}
          {...inputProps}
        />
        {rightComponent && (
          <div className="absolute inset-y-0 right-[4px] flex items-center pr-2">
            {rightComponent}
          </div>
        )}
      </div>
    </FieldContainer>
  );
};
