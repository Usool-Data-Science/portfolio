import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="h-9 w-9"
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4 transition-transform" />
      ) : (
        <Sun className="h-4 w-4 transition-transform" />
      )}
    </Button>
  );
};

export default ThemeToggle;
