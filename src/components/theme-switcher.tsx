import {  Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useTheme } from "@heroui/use-theme";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  
  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };
  
  return (
      <Button
        isIconOnly
        size="sm"
        onPress={handleToggle}
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        className="bg-transparent min-w-0 p-1"
      >
        <Icon 
          icon={isDark ? "lucide:sun" : "lucide:moon"} 
          className={`w-5 h-5`}
        />
      </Button>
  );
};