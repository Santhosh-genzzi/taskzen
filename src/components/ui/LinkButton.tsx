
import Link from "next/link"
import { IconType } from "react-icons";

type LinkButtonProps = {
    href:string;
    text:string;
    icon?:IconType;
    iconposition?:"left" | "right";
    rounded?:boolean;
    download?:boolean;
    variant?:"primary" | "outline"
}

const LinkButton = ({href,text,icon:Icon,iconposition,rounded,download=false,variant="primary"}:LinkButtonProps) => {
    const baseStyles = `relative px-5 py-2  font-medium ${rounded? "rounded-fill":"rounded-lg"} inline-flex items-center justify-center gap-2 overflow-hidden text-text border transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]`
    const variants = {
        primary:`bg-primary text-background border-none rounded-full `,
        outline:`bg-transparent text-text border-border hover:text-primary hover:border-primary hover:bg-primary/10`
    }
  return (
    <Link download={download} className={`${baseStyles} ${variants[variant]}`} href={href}>
        {Icon && iconposition === "left" && (
            <Icon className="w-5 h-5 z-10"/>
        )}
        <span className="z-10">{text}</span>
        {
            Icon && iconposition==="right" && (
                <Icon className="w-5 h-5 z-10"/>
            )
        }
    </Link>
  )
}

export default LinkButton
