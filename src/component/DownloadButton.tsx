// components/DownloadButton.tsx
import html2canvas from 'html2canvas';

export default function DownloadButton() {
  const downloadImage = async () => {
    const element = document.getElementById('export-area');
    if (!element) return;
    const canvas = await html2canvas(element);
    const link = document.createElement('a');
    link.download = 'conversation.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <button
      onClick={downloadImage}
      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      Download as Image
    </button>
  );
}
