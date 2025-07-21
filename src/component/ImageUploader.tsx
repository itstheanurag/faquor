// components/ImageUploader.tsx
import React from 'react';

type Props = {
  onImageLoad: (image: string | null) => void;
};

export default function ImageUploader({ onImageLoad }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        onImageLoad(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mb-4">
      <label className="block mb-2 font-medium">Upload Image:</label>
      <input type="file" accept="image/*" onChange={handleChange} />
    </div>
  );
}
