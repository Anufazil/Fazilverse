import { forwardRef } from "react";

const InputField = forwardRef(function InputField(
  {
    label,
    error,
    className = "",
    ...props
  },
  ref
) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-300">
        {label}
      </label>

      <input
        ref={ref}
        {...props}
        className={`
          rounded-xl
          border
          bg-white/5
          px-4
          py-3
          text-white
          placeholder:text-gray-500
          outline-none
          backdrop-blur-xl
          transition-all
          duration-300

          ${
            error
              ? "border-red-500 focus:border-red-500"
              : "border-white/10 focus:border-cyan-400"
          }

          focus:shadow-[0_0_20px_rgba(34,211,238,0.2)]

          ${className}
        `}
      />

      {error && (
        <p className="text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
});

export default InputField;