import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuSeparator,
} from "@/components/ui/context-menu";
import { Download, Mail, Phone, Copy, ExternalLink } from "lucide-react";
import { toast } from "sonner";

interface AvatarContextMenuProps {
  children: React.ReactNode;
  avatarSrc: string;
  name: string;
  email: string;
  phone?: string;
}

const AvatarContextMenu = ({ children, avatarSrc, name, email, phone }: AvatarContextMenuProps) => {
  const handleDownloadAvatar = () => {
    const link = document.createElement('a');
    link.href = avatarSrc;
    link.download = `${name.replace(/\s+/g, '_')}_avatar.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Avatar downloaded successfully!");
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    toast.success("Email copied to clipboard!");
  };

  const handleCopyPhone = () => {
    if (phone) {
      navigator.clipboard.writeText(phone);
      toast.success("Phone number copied to clipboard!");
    }
  };

  const handleSendEmail = () => {
    window.open(`mailto:${email}?subject=Hello ${name}!`);
  };

  const handleCallPhone = () => {
    if (phone) {
      window.open(`tel:${phone}`);
    }
  };

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        {children}
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuItem onClick={handleSendEmail}>
          <Mail className="mr-2 h-4 w-4" />
          Send Email
        </ContextMenuItem>
        {phone && (
          <ContextMenuItem onClick={handleCallPhone}>
            <Phone className="mr-2 h-4 w-4" />
            Call Phone
          </ContextMenuItem>
        )}
        <ContextMenuSeparator />
        <ContextMenuItem onClick={handleCopyEmail}>
          <Copy className="mr-2 h-4 w-4" />
          Copy Email
        </ContextMenuItem>
        {phone && (
          <ContextMenuItem onClick={handleCopyPhone}>
            <Copy className="mr-2 h-4 w-4" />
            Copy Phone
          </ContextMenuItem>
        )}
        <ContextMenuSeparator />
        <ContextMenuItem onClick={handleDownloadAvatar}>
          <Download className="mr-2 h-4 w-4" />
          Download Avatar
        </ContextMenuItem>
        <ContextMenuItem onClick={() => window.open(avatarSrc, '_blank')}>
          <ExternalLink className="mr-2 h-4 w-4" />
          View Full Size
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default AvatarContextMenu;