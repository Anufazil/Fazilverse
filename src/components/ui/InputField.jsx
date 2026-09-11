import { forwardRef } from "react";

const InputField = forwardRef(function InputField(
  { label, error, className = "", ...props },
  ref
) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-muted">
        {label}
      </label>

      <input
        ref={ref}
        {...props}
        className={`
          rounded-lg
          border
          bg-ink
          px-4
          py-3
          text-ink-text
          placeholder:text-muted/60
          outline-none
          transition-colors
          duration-200

          ${error ? "border-red-500/60 focus:border-red-500" : "border-line focus:border-signal"}

          ${className}
        `}
      />

      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  );
});

export default InputField;
