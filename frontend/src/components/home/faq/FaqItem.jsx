"use client";

import { useState } from "react";

const FaqItem = ({ data }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      // style={{ maxHeight: open ? "1000px" : "60px" }}
      className={`p-4 bg-white rounded-2xl cursor-pointer overflow-hidden transition-max-height duration-300 ease-in-out ${
        open ? "max-h-[1000px]" : "max-h-[70px] lg:max-h-[60px]"
      }`}
    >
      <div className="flex items-center gap-4" onClick={() => setOpen(!open)}>
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 17 18"
            fill="none"
          >
            <path
              d="M15.1406 8.99951C15.1406 9.21086 15.0567 9.41354 14.9072 9.56299C14.7578 9.71243 14.5551 9.79639 14.3438 9.79639H2.65625C2.44491 9.79639 2.24222 9.71243 2.09277 9.56299C1.94333 9.41354 1.85938 9.21086 1.85938 8.99951C1.85938 8.78817 1.94333 8.58548 2.09277 8.43604C2.24222 8.28659 2.44491 8.20264 2.65625 8.20264H14.3438C14.5551 8.20264 14.7578 8.28659 14.9072 8.43604C15.0567 8.58548 15.1406 8.78817 15.1406 8.99951Z"
              fill="#1DA664"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M20 11.9995H12M12 11.9995H4M12 11.9995V3.99951M12 11.9995V19.9995"
              stroke="#1DA664"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
        <h3 className="text-base font-semibold">{data?.question}</h3>
      </div>
      <div className="mt-6">
        <p className="text-sm leading-[22px]">{data?.answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;
