import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuItem,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const socialMediaPlatforms = [
  { name: "Facebook", value: "facebook" },
  { name: "Twitter", value: "twitter" },
  { name: "Instagram", value: "instagram" },
  { name: "LinkedIn", value: "linkedin" },
  { name: "Snapchat", value: "snapchat" },
  { name: "TikTok", value: "tiktok" },
  { name: "YouTube", value: "youtube" },
  { name: "Pinterest", value: "pinterest" },
  { name: "Reddit", value: "reddit" },
  { name: "WhatsApp", value: "whatsapp" },
  { name: "Telegram", value: "telegram" },
  { name: "Discord", value: "discord" },
  { name: "Tumblr", value: "tumblr" },
  { name: "GitHub", value: "github" },
];

const MockType = [
  { name: "Message", value: "message" },
  { name: "Posts", value: "posts" },
];

type LabelBuilderProps = {
  subheading: string;
  buttonName: string;
  values: { name: string; value: string }[];
  callback?: (value: string) => void;
};

const LabelBuilder = ({
  subheading,
  buttonName,
  values,
  callback,
}: LabelBuilderProps) => {
  return (
    <div className="space-y-2">
      <span>{subheading}</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">{buttonName}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {values.map((item) => (
            <DropdownMenuItem
              key={item.value}
              onClick={() => callback?.(item.value)}
            >
              {item.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

const InstagramMessageScreen = () => <div>📷 Instagram Message Screen</div>;
const InstagramPostScreen = () => <div>📷 Instagram Post Screen</div>;
const TwitterMessageScreen = () => <div>🐦 Twitter Message Screen</div>;
const TwitterPostScreen = () => <div>🐦 Twitter Post Screen</div>;
const DefaultScreen = () => <div>👀 Select both a platform and a type to continue.</div>;

const InputScreen = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);

    const renderScreen = () => {
    if (!selectedPlatform || !selectedType) return <DefaultScreen />;

    if (selectedPlatform === "instagram" && selectedType === "message")
      return <InstagramMessageScreen />;

    if (selectedPlatform === "instagram" && selectedType === "posts")
      return <InstagramPostScreen />;

    if (selectedPlatform === "twitter" && selectedType === "message")
      return <TwitterMessageScreen />;

    if (selectedPlatform === "twitter" && selectedType === "posts")
      return <TwitterPostScreen />;

    // Fallback
    return <div>🧪 No mock screen available for {selectedPlatform} - {selectedType}</div>;
  };
  return (
    <div className="space-y-6 flex items-center justify-between max-width-lg mx-auto p-6">
        <div>
      <h1 className="text-2xl font-bold">Social Media</h1>

      <LabelBuilder
        subheading="Pick a Platform"
        buttonName={selectedPlatform ? selectedPlatform : "Platform"}
        values={socialMediaPlatforms}
        callback={(value) => setSelectedPlatform(value)}
      />

      <LabelBuilder
        subheading="Pick Type:"
        buttonName={selectedType ? selectedType : "Type"}
        values={MockType}
        callback={(value) => setSelectedType(value)}
      />
        </div>


       <div className="pt-6 border-t">{renderScreen()}</div>
    </div>
  );
};

export default InputScreen;
