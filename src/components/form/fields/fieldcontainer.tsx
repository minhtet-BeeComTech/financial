"use client";
export const FieldContainer = ({
  fieldConProps,
  labelProps,
  children,
  label,
  error,
  required,
  ...props
}: any) => {
  return (
    <div {...fieldConProps}>
      {label && (
        <label className="block text-typo mb-1 relative" {...labelProps}>
          {label}{" "}
          {required && (
            <span className="absolute top-[1px] text-typo text-[10px]">*</span>
          )}
        </label>
      )}
      {children}
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  );
};
