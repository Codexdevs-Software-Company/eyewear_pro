import clsx from "clsx";
import {tv} from "tailwind-variants"
const button = tv({
  base: "bg-primary",
  variants: {
    varient: {
      primary: " bg-primary text-secondary font-Inter font-normal  cursor-pointer",
      secondary: "bg-radial from-[#602A9A] to-[#000] text-secondary cursor-pointer",
      third: "font-Itim font-normal bg-gradient-to-r from-[#000] via-[#602A9A] to-[#000] text-secondary  cursor-pointer",
      fourth: "text-secondary font-Inter font-bold bg-0 cursor-pointer"
    },
    size: {
      sm: " w-56 text-sm md:text-[1.5rem] lg:text-[0.89rem] py-[0.375rem] px-[0.938rem] mt-4 ml-4 border-none rounded-xl outline-none",
      md: "rounded-xl py-[2rem] w-[90%] border-none outline-none",
      lg: "rounded-xl text-lg md:text-[64px] py-[2rem] w-full border-none outline-none ",
      xl: " w-56 text-sm md:text-[1.5rem] lg:text-[0.875rem] py-[0.375rem] px-[0.938rem] mt-4 ml-8 border-none rounded-xl outline-none",
      xl2: " p-0 text-sm md:text-2xl outline-none"

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
