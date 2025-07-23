import { Button } from "@/components/ui/button";
import {
  DropdownMenuItem,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PhoneFrame } from "./PhoneFrame";
import InstagramMessageScreen from "./instagram/InstagramMessageScreen";
import LinkedInMessageScreen from "./LinkdedInMessageScreen";
import type { MockType, PlatfromType } from "@/types";
import { useState } from "react";

const socialMediaPlatforms: PlatfromType[] = [
  { name: "Facebook", value: "facebook" },
  { name: "Twitter", value: "twitter" },
  { name: "Instagram", value: "instagram" },
  { name: "LinkedIn", value: "linkedin" },
  { name: "Snapchat", value: "snapchat" },
  { name: "TikTok", value: "tiktok" },
  { name: "WhatsApp", value: "whatsapp" },
  { name: "Telegram", value: "telegram" },
  { name: "Discord", value: "discord" },
];

const mockValues: MockType[] = [
  { name: "Message", value: "message" },
  { name: "Posts", value: "posts" },
];

type LabelBuilderItem = { name: string; value: string };

type LabelBuilderProps = {
  subheading: string;
  buttonName: string;
  values: LabelBuilderItem[];
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

const InstagramPostScreen = () => <div>📷 Instagram Post Screen</div>;
const TwitterMessageScreen = () => <div>🐦 Twitter Message Screen</div>;
const TwitterPostScreen = () => <div>🐦 Twitter Post Screen</div>;
const DefaultScreen = () => <div>👀 Select both a platform and a type to continue.</div>;

const InputScreen = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);

    const renderScreen = () => {
    if (!selectedPlatform || !selectedType) return <DefaultScreen />;

     if (selectedPlatform === "linkedin" && selectedType === "message")
      return <LinkedInMessageScreen />

    if (selectedPlatform === "instagram" && selectedType === "message")
      return <InstagramMessageScreen />
       

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
    <div className="space-y-6 flex items-center justify-center max-width-lg mx-auto p-6 gap-6">
    <div className="flex flex-col items-center border rounded p-4"> 
      <h1 className="text-2xl font-bold">Social Media</h1>
      <div >
        <LabelBuilder
        subheading="Pick a Platform"
        buttonName={selectedPlatform ? selectedPlatform : "Platform"}
        values={socialMediaPlatforms}
        callback={(value) => setSelectedPlatform(value)}
      />

      <LabelBuilder
        subheading="Pick Type:"
        buttonName={selectedType ? selectedType : "Type"}
        values={mockValues}
        callback={(value) => setSelectedType(value)}
      />
      </div>

      <div className="border rounded p-4 mt-4 w-full text-center">
        Screen For inputs
      </div>
     
    </div>


       <PhoneFrame phoneType="iphone">
  <div className="flex flex-col items-center justify-center space-y-4">
    {renderScreen()}
  </div>
</PhoneFrame>
    </div>
  );
};

export default InputScreen;
