const palette = {
  white: "#FFFFFF",
  black: "#000000 ",
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617",
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b",
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554",
  },
};

export const lightMode = {
  color: {
    palette,
    background: {
      default: palette.white,
      level1: palette.slate[50],
      level2: palette.slate[200],
      hover1: palette.slate[100],
      hover2: palette.slate[200],
    },
    border:{
      default: "#e6e6e6",
      level1: palette.slate[200],
    },
    text: {
      default: palette.slate[900],
      header: palette.slate[900],
      content: palette.slate[600],
      label: palette.slate[600],
      label1: palette.gray[300],
      label2: palette.gray[300],
    },
  },
};

export const darkMode = {
  color: {
    palette,
    background: {
      default: palette.gray[950],
      level1: "#181818",
      level2: "#202020",
      hover1: "#222222",
      hover2: palette.gray[900],
    },
    border:{
      default: "#181818",
      level1: "#222222",
    },
    text: {
      default: "#FAFAFA",
      header: palette.white,
      content: palette.slate[100],
      label: palette.slate[500],
      label1: palette.gray[700],
      label2: palette.gray[800],
    },
  },
};

export type ThemeType = typeof lightMode;
