import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../../hooks/useTheme";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`
        flex h-10 w-10 items-center justify-center rounded-lg
        border border-line bg-surface text-muted
        transition-colors duration-200
        hover:border-signal/50 hover:text-signal
        ${className}
      `}
    >
      {isDark ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />}
    </button>
  );
}
