import { forwardRef } from "react";

const TextAreaField = forwardRef(function TextAreaField(
  {
    label,
    error,
    rows = 6,
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

      <textarea
        ref={ref}
        rows={rows}
        {...props}
        className={`
          resize-none
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

export default TextAreaField;