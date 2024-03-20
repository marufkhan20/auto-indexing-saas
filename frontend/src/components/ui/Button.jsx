import { cn } from "@/lib/utills";
import Link from "next/link";
import Loading from "../shared/Loading";

const Button = ({
  className = "",
  href,
  type = "primary",
  children,
  htmlType = "button",
  onClick,
  loading,
}) => {
  const styles = `px-[30px] py-[12px] text-base font-bold rounded-full transition-all border border-transparent ${
    type === "primary" &&
    "text-white bg-primary hover:text-primary hover:bg-white hover:border-[#CCE5E0]"
  } ${
    type === "secondary" &&
    "text-primary bg-white border-[#CCE5E0] hover:text-white hover:bg-primary hover:border-transparent"
  } ${
    type === "border" &&
    "text-primary bg-transparent border-primary hover:text-white hover:bg-[#0E4C2E] hover:border-transparent"
  }`;

  return href ? (
    <Link href={href} className={cn(styles, className)}>
      {children}
    </Link>
  ) : (
    <button onClick={onClick} type={htmlType} className={cn(styles, className)}>
      {loading ? (
        <div className="px-14">
          <Loading className="w-7 h-7" />
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
