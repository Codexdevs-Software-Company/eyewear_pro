import clsx from "clsx";
import {tv} from "tailwind-variants"
const button = tv({
  base: "bg-primary",
  variants: {
    varient: {
      primary: " bg-primary text-secondary  cursor-pointer",
      secondary: "bg-radial from-[#602A9A] to-[#000] text-secondary cursor-pointer",
      third: "bg-radial from-[#602A9A] to-[#000] text-secondary cursor-pointer",
      fourth: "text-secondary bg-0 cursor-pointer"
    },
    size: {
      sm: " w-56 text-[1rem] py-[0.375rem] px-[0.938rem] mt-4 ml-4 border-none rounded-xl outline-none",
      md: "rounded-xl py-[2rem] w-[90%] border-none outline-none",
      lg: "rounded-xl py-[2rem] w-[90%] border-none outline-none",
      xl: " w-56 text-[0.875rem] py-[0.375rem] px-[0.938rem] mt-4 ml-8 border-none rounded-xl outline-none",
      xl2: "w-24 p-0 text-[1.5rem] outline-none"

    },
    loading: {
      true: "opacity-50 pointer-events-none",
    }
  },
  defaultVariants: {
    intent: "primary",
    size: "md",
    loading: false,
  }
});
export default function Button({children,varient,size ,className = "", onClick}) {
  return (
    <>
        <button onClick={onClick} className={clsx(button({varient,size ,className}))}>{children}</button>
    </>
  )
}
