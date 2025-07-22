// import { useState } from 'react';
// import { Card } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Upload, Download, Instagram, MessageCircle, Heart, Twitter, Smartphone } from 'lucide-react';
// import { toast } from '@/hooks/use-toast';
// import { AppPreview } from './AppPreview';
// import { PhoneFrame } from './PhoneFrame';

// const SOCIAL_APPS = [
//   { id: 'instagram', name: 'Instagram', icon: Instagram },
//   { id: 'tinder', name: 'Tinder', icon: Heart },
//   { id: 'hinge', name: 'Hinge', icon: Heart },
//   { id: 'twitter', name: 'X (Twitter)', icon: Twitter },
//   { id: 'messenger', name: 'Messenger', icon: MessageCircle },
// ];

// const PHONE_TYPES = [
//   { id: 'iphone', name: 'iPhone', icon: Smartphone },
//   { id: 'android', name: 'Android', icon: Smartphone },
//   { id: 'classic', name: 'Classic', icon: Smartphone },
// ];

// export const MemeGenerator = () => {
//   const [photos, setPhotos] = useState<string[]>([]);
//   const [profileImage, setProfileImage] = useState<string>('');
//   const [username, setUsername] = useState('');
//   const [selectedApp, setSelectedApp] = useState<string>('instagram');
//   const [phoneType, setPhoneType] = useState<'iphone' | 'android' | 'classic'>('iphone');
//   const [message, setMessage] = useState('');

//   const handleProfileImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         const result = event.target?.result as string;
//         setProfileImage(result);
//       };
//       reader.readAsDataURL(file);
//       toast({
//         title: "Profile image uploaded!",
//         description: "Your profile picture has been set.",
//       });
//     }
//   };

//   const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const files = e.target.files;
//     if (files) {
//       Array.from(files).forEach((file) => {
//         const reader = new FileReader();
//         reader.onload = (event) => {
//           const result = event.target?.result as string;
//           setPhotos((prev) => [...prev, result]);
//         };
//         reader.readAsDataURL(file);
//       });
//       toast({
//         title: "Photos uploaded!",
//         description: `${files.length} photo(s) added successfully.`,
//       });
//     }
//   };

//   const removePhoto = (index: number) => {
//     setPhotos((prev) => prev.filter((_, i) => i !== index));
//   };

//   const handleDownload = () => {
//     // This would implement the download functionality
//     toast({
//       title: "Coming soon!",
//       description: "Download functionality will be implemented next.",
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-bg p-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
//             Social Media Meme Generator
//           </h1>
//           <p className="text-muted-foreground text-lg">
//             Create realistic social media mockups with your photos and content
//           </p>
//         </div>

//         {/* Main Content */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Controls Panel */}
//           <Card className="p-6 backdrop-blur-sm bg-card/80 shadow-elegant">
//             <h2 className="text-2xl font-semibold mb-6">Create Your Message Mockup</h2>
            
//             {/* Profile Image Upload */}
//             <div className="space-y-4 mb-6">
//               <Label htmlFor="profile-upload" className="text-sm font-medium">
//                 Profile Image
//               </Label>
//               <div className="flex items-center gap-4">
//                 <div className="w-16 h-16 rounded-full overflow-hidden bg-muted flex items-center justify-center">
//                   {profileImage ? (
//                     <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
//                   ) : (
//                     <span className="text-2xl font-semibold text-muted-foreground">
//                       {username ? username[0]?.toUpperCase() : '?'}
//                     </span>
//                   )}
//                 </div>
//                 <div className="flex-1">
//                   <input
//                     id="profile-upload"
//                     type="file"
//                     accept="image/*"
//                     onChange={handleProfileImageUpload}
//                     className="hidden"
//                   />
//                   <label htmlFor="profile-upload" className="cursor-pointer">
//                     <Button variant="outline" size="sm" asChild>
//                       <span>
//                         <Upload className="mr-2 h-4 w-4" />
//                         Upload Profile Image
//                       </span>
//                     </Button>
//                   </label>
//                 </div>
//               </div>
//             </div>

//             {/* Content Photos Upload */}
//             <div className="space-y-4 mb-6">
//               <Label htmlFor="photo-upload" className="text-sm font-medium">
//                 Content Photos (Optional)
//               </Label>
//               <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors">
//                 <input
//                   id="photo-upload"
//                   type="file"
//                   multiple
//                   accept="image/*"
//                   onChange={handlePhotoUpload}
//                   className="hidden"
//                 />
//                 <label htmlFor="photo-upload" className="cursor-pointer">
//                   <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
//                   <p className="text-sm text-muted-foreground">
//                     Add photos to your message
//                   </p>
//                 </label>
//               </div>
              
//               {/* Photo Preview */}
//               {photos.length > 0 && (
//                 <div className="grid grid-cols-3 gap-2">
//                   {photos.map((photo, index) => (
//                     <div key={index} className="relative group">
//                       <img
//                         src={photo}
//                         alt={`Upload ${index + 1}`}
//                         className="w-full h-20 object-cover rounded-lg"
//                       />
//                       <button
//                         onClick={() => removePhoto(index)}
//                         className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full w-6 h-6 text-xs opacity-0 group-hover:opacity-100 transition-opacity"
//                       >
//                         ×
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Message Input */}
//             <div className="space-y-2 mb-6">
//               <Label htmlFor="message">Messages (CLI Format)</Label>
//               <textarea
//                 id="message"
//                 placeholder={`{john} Hey there!\n{sarah} Hi! How are you?\n{john} I'm good, thanks!`}
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 className="w-full min-h-[100px] p-3 text-sm border border-border rounded-md bg-background resize-vertical"
//               />
//               <p className="text-xs text-muted-foreground">
//                 Format: {`{username} message content`} (one per line)
//               </p>
//             </div>

//             {/* Username Input */}
//             <div className="space-y-2 mb-6">
//               <Label htmlFor="username">Username/Name</Label>
//               <Input
//                 id="username"
//                 placeholder="Enter username or name..."
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//             </div>

//             {/* App Selection */}
//             <div className="space-y-2 mb-4">
//               <Label>Select Messaging Platform</Label>
//               <Select value={selectedApp} onValueChange={setSelectedApp}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Choose an app" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {SOCIAL_APPS.map((app) => (
//                     <SelectItem key={app.id} value={app.id}>
//                       <div className="flex items-center gap-2">
//                         <app.icon className="h-4 w-4" />
//                         {app.name}
//                       </div>
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>

//             {/* Phone Type Selection */}
//             <div className="space-y-2 mb-6">
//               <Label>Phone Frame Type</Label>
//               <Select value={phoneType} onValueChange={(value: 'iphone' | 'android' | 'classic') => setPhoneType(value)}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Choose phone type" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {PHONE_TYPES.map((phone) => (
//                     <SelectItem key={phone.id} value={phone.id}>
//                       <div className="flex items-center gap-2">
//                         <phone.icon className="h-4 w-4" />
//                         {phone.name}
//                       </div>
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>

//             {/* Download Button */}
//             <Button
//               onClick={handleDownload}
//               className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
//               size="lg"
//             >
//               <Download className="mr-2 h-4 w-4" />
//               Download Mockup
//             </Button>
//           </Card>

//           {/* Preview Panel */}
//           <Card className="p-6 backdrop-blur-sm bg-card/80 shadow-elegant">
//             <h2 className="text-2xl font-semibold mb-6">Live Preview</h2>
//             <PhoneFrame phoneType={phoneType}>
//               <AppPreview
//                 app={selectedApp}
//                 photos={photos}
//                 profileImage={profileImage}
//                 username={username}
//                 message={message}
//               />
//             </PhoneFrame>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };