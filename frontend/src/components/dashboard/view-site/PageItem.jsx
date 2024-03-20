const PageItem = ({ pageUrl, views }) => {
  return (
    <div className="flex items-center justify-between gap-5">
      <div className="flex items-center gap-4">
        <div className="w-9 h-9 rounded-full bg-light-primary flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M1 4.66667H13M4.66667 13V4.66667M2 1H12C12.5523 1 13 1.44772 13 2V12C13 12.5523 12.5523 13 12 13H2C1.44772 13 1 12.5523 1 12V2C1 1.44772 1.44772 1 2 1Z"
              stroke="#0E4C2E"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <span className="text-sm font-semibold">{pageUrl}</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="p-1 rounded-full bg-light-primary flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="8"
              viewBox="0 0 10 8"
              fill="none"
            >
              <path
                d="M5 5.27273C5.7364 5.27273 6.33337 4.70291 6.33337 4C6.33337 3.29709 5.7364 2.72727 5 2.72727C4.2636 2.72727 3.66663 3.29709 3.66663 4C3.66663 4.70291 4.2636 5.27273 5 5.27273Z"
                fill="#1DA664"
              />
              <path
                d="M9.98014 3.89182C9.58808 2.9238 8.90744 2.08665 8.02235 1.48385C7.13726 0.88104 6.08653 0.539 5 0.5C3.91347 0.539 2.86274 0.88104 1.97765 1.48385C1.09256 2.08665 0.411923 2.9238 0.0198588 3.89182C-0.00661959 3.96172 -0.00661959 4.03828 0.0198588 4.10818C0.411923 5.0762 1.09256 5.91335 1.97765 6.51615C2.86274 7.11896 3.91347 7.461 5 7.5C6.08653 7.461 7.13726 7.11896 8.02235 6.51615C8.90744 5.91335 9.58808 5.0762 9.98014 4.10818C10.0066 4.03828 10.0066 3.96172 9.98014 3.89182ZM5 6.06818C4.57146 6.06818 4.15255 5.94689 3.79623 5.71963C3.43991 5.49238 3.1622 5.16937 2.9982 4.79146C2.83421 4.41355 2.7913 3.99771 2.87491 3.59652C2.95851 3.19533 3.16487 2.82682 3.46789 2.53757C3.77091 2.24833 4.15699 2.05136 4.57729 1.97156C4.9976 1.89176 5.43325 1.93271 5.82917 2.08925C6.22509 2.24579 6.56349 2.51087 6.80157 2.85098C7.03965 3.19109 7.16673 3.59095 7.16673 4C7.16585 4.54826 6.93728 5.07382 6.53113 5.4615C6.12498 5.84917 5.57438 6.06734 5 6.06818Z"
                fill="#1DA664"
              />
            </svg>
          </div>
          <span className="text-base font-semibold mr-3">{views}</span>
        </div>

        <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
          >
            <path
              d="M15 1L5.375 11L1 6.45462"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className="w-9 h-9 rounded-full bg-light-primary flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M13.7401 5.73847C13.8217 6.20831 13.8624 6.68434 13.8617 7.16122C13.8617 9.29097 13.1004 11.0917 11.7757 12.3106H11.7774C10.6189 13.3807 9.02643 14.0002 7.13818 14.0002C5.28167 14.0002 3.50119 13.2627 2.18844 11.95C0.875682 10.6372 0.138184 8.85673 0.138184 7.00022C0.138184 5.1437 0.875682 3.36322 2.18844 2.05047C3.50119 0.737716 5.28167 0.00021776 7.13818 0.00021776C8.87588 -0.0201333 10.554 0.632696 11.8212 1.82197L9.82268 3.82047C9.10027 3.13182 8.13612 2.75471 7.13818 2.77047C5.31206 2.77047 3.76068 4.00247 3.20768 5.66147C2.91448 6.53078 2.91448 7.47228 3.20768 8.34159H3.21031C3.76593 9.99797 5.31468 11.23 7.14081 11.23C8.08406 11.23 8.89431 10.9885 9.52256 10.5615H9.51993C9.88473 10.3198 10.1968 10.0067 10.4372 9.64113C10.6777 9.27554 10.8416 8.86502 10.9191 8.43434H7.13818V5.73934L13.7401 5.73847Z"
              fill="#1DA664"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PageItem;
