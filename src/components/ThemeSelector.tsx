'use client';
import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeSelector() {
  const { currentTheme, setTheme, availableThemes } = useTheme();

  return (
    <div className="absolute top-5 z-50">
      <select
        value={currentTheme.id}
        onChange={(e) => setTheme(e.target.value)}
        className="bg-white/90 backdrop-blur border border-gray-200 rounded-lg px-3 py-2 text-sm shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {availableThemes.map((theme) => (
          <option key={theme.id} value={theme.id}>
            {theme.name}
          </option>
        ))}
      </select>
    </div>
  );
}