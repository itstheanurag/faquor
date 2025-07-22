import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

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
  { name: "GitHub", value: "github" }
];

const SocialMediaLabel = () => {
  return (
    <div className="space-y-2">
      <span>Pick a Platform:</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Platform</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {socialMediaPlatforms.map((platform) => (
            <DropdownMenuItem key={platform.value}>
              {platform.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SocialMediaLabel;
