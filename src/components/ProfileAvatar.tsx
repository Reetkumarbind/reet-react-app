import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import AvatarContextMenu from "@/components/AvatarContextMenu";

interface ProfileAvatarProps {
    src: string | string[];
    alt: string;
    size?: "sm" | "md" | "lg" | "xl";
    showStatus?: boolean;
    showTooltip?: boolean;
    className?: string;
    statusText?: string;
    hoverEffect?: "scale" | "glow" | "rotate" | "pulse";
    enableContextMenu?: boolean;
    email?: string;
    phone?: string;
    colorTheme?: "default" | "sunset" | "ocean" | "forest" | "royal" | "fire";
}

const ProfileAvatar = ({
    src,
    alt,
    size = "lg",
    showStatus = true,
    showTooltip = true,
    className = "",
    statusText = "Available for work",
    hoverEffect = "scale",
    enableContextMenu = true,
    email = "reet.kumar.bind@gmail.com",
    phone = "+91 98765 43210",
    colorTheme = "default"
}: ProfileAvatarProps) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [currentSrcIndex, setCurrentSrcIndex] = useState(0);
    const [allImagesFailed, setAllImagesFailed] = useState(false);

    const srcArray = Array.isArray(src) ? src : [src];
    const currentSrc = srcArray[currentSrcIndex];

    const sizeClasses = {
        sm: "w-16 h-16",
        md: "w-24 h-24",
        lg: "w-32 h-32 md:w-40 md:h-40",
        xl: "w-48 h-48 md:w-56 md:h-56"
    };

    const statusSizes = {
        sm: "w-3 h-3 bottom-0 right-0",
        md: "w-4 h-4 bottom-1 right-1",
        lg: "w-6 h-6 bottom-2 right-2",
        xl: "w-8 h-8 bottom-3 right-3"
    };

    const colorThemes = {
        default: "from-primary to-accent",
        sunset: "from-brand-orange to-brand-pink",
        ocean: "from-brand-teal to-info",
        forest: "from-brand-emerald to-success",
        royal: "from-brand-purple to-brand-indigo",
        fire: "from-brand-rose to-brand-amber"
    };

    const hoverEffects = {
        scale: "group-hover:scale-105",
        glow: "group-hover:shadow-2xl group-hover:shadow-primary/50",
        rotate: "group-hover:rotate-3",
        pulse: "group-hover:animate-pulse"
    };

    // Handle image load error with fallback chain
    const handleImageError = () => {
        if (currentSrcIndex < srcArray.length - 1) {
            setCurrentSrcIndex(prev => prev + 1);
            setImageLoaded(false);
        } else {
            setAllImagesFailed(true);
        }
    };

    // Fallback avatar with initials
    const getInitials = (name: string) => {
        return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    };

    const fallbackAvatar = (
        <div className={`${sizeClasses[size]} rounded-full bg-gradient-to-br ${colorThemes[colorTheme]} flex items-center justify-center text-white font-bold text-xl border-4 border-white/20 shadow-elegant transition-all duration-300 ${hoverEffects[hoverEffect]}`}>
            {getInitials(alt)}
        </div>
    );

    const avatarContent = (
        <div className={`relative group ${className}`}>
            {/* Main Avatar Container */}
            <div className={`relative ${sizeClasses[size]}`}>
                {!allImagesFailed ? (
                    <>
                        {/* Loading skeleton */}
                        {!imageLoaded && (
                            <div className={`${sizeClasses[size]} rounded-full bg-muted animate-pulse border-4 border-white/20`} />
                        )}

                        {/* Main Image */}
                        <img
                            src={currentSrc}
                            alt={alt}
                            className={`${sizeClasses[size]} rounded-full border-4 border-white/20 shadow-elegant animate-float-slow object-cover transition-all duration-300 ${hoverEffects[hoverEffect]} ${imageLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'
                                }`}
                            loading="eager"
                            onLoad={() => setImageLoaded(true)}
                            onError={handleImageError}
                        />
                    </>
                ) : (
                    fallbackAvatar
                )}

                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Status Indicator */}
                {showStatus && (
                    <div className={`absolute ${statusSizes[size]} bg-green-500 rounded-full border-3 border-white shadow-lg`}>
                        <div className="w-full h-full bg-green-400 rounded-full animate-ping-slow opacity-75" />
                        <div className="absolute inset-0 w-full h-full bg-green-500 rounded-full" />
                    </div>
                )}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -inset-4 rounded-full border-2 border-white/10 animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -inset-6 rounded-full border border-white/5 animate-spin-slow opacity-0 group-hover:opacity-50 transition-opacity duration-700" style={{ animationDirection: 'reverse', animationDuration: '12s' }} />

            {/* Hover Tooltip */}
            {showTooltip && (
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                    <div className="bg-black/90 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-lg shadow-xl whitespace-nowrap">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse-slow" />
                            <span>{statusText}</span>
                        </div>
                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/90 rotate-45" />
                    </div>
                </div>
            )}

            {/* Floating Badges */}
            <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
                <Badge variant="secondary" className={`bg-gradient-to-r ${colorThemes[colorTheme]} text-white shadow-lg animate-bounce-slow border-0`}>
                    ✨ Hire Me
                </Badge>
            </div>
        </div>
    );

    return enableContextMenu ? (
        <AvatarContextMenu
            avatarSrc={currentSrc}
            name={alt}
            email={email}
            phone={phone}
        >
            {avatarContent}
        </AvatarContextMenu>
    ) : (
        avatarContent
    );
};

export default ProfileAvatar;