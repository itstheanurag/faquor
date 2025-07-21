// components/ScreenSelector.tsx
import React from 'react';

type Props = {
  selected: string;
  onSelect: (screen: string) => void;
};

const screens = ['messenger', 'x', 'instagram', 'hinge', 'pornhub'];

export default function ScreenSelector({ selected, onSelect }: Props) {
  return (
    <div className="mb-4">
      <label className="block mb-2 font-medium">Select Screen:</label>
      <select
        value={selected}
        onChange={(e) => onSelect(e.target.value)}
        className="p-2 border rounded"
      >
        {screens.map((screen) => (
          <option key={screen} value={screen}>
            {screen.charAt(0).toUpperCase() + screen.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}