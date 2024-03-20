import { cn } from "@/lib/utills";

const Input = ({
  type = "",
  value,
  onChange,
  placeholder = "",
  className = "",
  ...rest
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={cn(
        "w-full bg-[#F7F7F9] px-4 py-3 outline-none rounded-[10px] text-sm text-[#0E4C2E]",
        className
      )}
      {...rest}
    />
  );
};

export default Input;
