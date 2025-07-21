import { useState } from 'react';
import ImageUploader from './component/ImageUploader';
import MessengerScreen from './screens/MessangerScreen';
import ScreenSelector from './component/ImageSelector';
import DownloadButton from './component/DownloadButton';

export default function App() {
  const [screen, setScreen] = useState('messenger');
  const [image, setImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Meme Conversation Generator</h1>
      <ImageUploader onImageLoad={setImage} />
      <ScreenSelector selected={screen} onSelect={setScreen} />
      <div id="export-area" className="my-4 p-4 bg-white rounded shadow">
        {screen === 'messenger' && <MessengerScreen image={image} />}
        {/* Future: Add other screen components here */}
      </div>
      <DownloadButton />
    </div>
  );
}