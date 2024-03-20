import { cn } from "@/lib/utills";

const Footer = ({ className }) => {
  return (
    <footer className={cn("bg-white pb-[50px] px-5 sm:px-0", className)}>
      <div className="container-custom">
        <div className="flex flex-wrap items-center justify-between gap-5 text-sm font-medium text-body-secondary pt-4 border-t border-[#CCE5E0]">
          <p>Copyright © 2023 Get Indexed Fast .</p>
          <p>Built with ❤️ in New York</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
