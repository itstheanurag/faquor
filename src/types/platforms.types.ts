type PlatfromName = "Facebook" | "Twitter" | "Instagram" | "LinkedIn" | "Snapchat" | "TikTok" | "WhatsApp" | "Telegram" | "Discord";
type PlatformValue = "facebook" | "twitter" | "instagram" | "linkedin" | "snapchat" | "tiktok" | "whatsapp" | "telegram" | "discord";

type PlatfromType = {
    name: PlatfromName; 
    value: PlatformValue
}


type MockType = {
    value: 'message' | 'posts';
    name: "Message" | "Posts";
}

type PlatformCombinedType = PlatfromType[] | MockType[]


export type { PlatfromType, MockType, PlatformCombinedType }