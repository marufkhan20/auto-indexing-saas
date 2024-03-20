import Button from "@/components/ui/Button";
import Link from "next/link";

const Account = () => {
  return (
    <div>
      <div className="container px-5 sm:px-0">
        <div className="flex items-center flex-wrap gap-5">
          <Link
            className="w-11 h-11 rounded-full transition-all hover:bg-primary bg-white flex items-center justify-center"
            href="/dashboard"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              <path
                d="M15.8335 9.5L3.16683 9.5M3.16683 9.5L7.91683 14.25M3.16683 9.5L7.91683 4.75"
                stroke="#9AA2B0"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
          <div>
            <h3 className="text-lg leading-[27px]">Account</h3>
            <p className="text-sm font-semibold text-[#9AA2B0]">
              Manage your account and subscription.
            </p>
          </div>
        </div>

        <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-2xl h-fit">
            <div className="flex flex-wrap items-center justify-between gap-5">
              <h3 className="text-lg">Subscription</h3>
              <Button type="border" className="text-sm px-4 py-1">
                Manage Subscription
              </Button>
            </div>
            <ul className="mt-5 flex flex-col gap-4">
              <li className="text-sm">
                <span>Your current plan is: </span>
                <span className="font-semibold text-body-secondary">Small</span>
              </li>
              <li className="text-sm">
                <span>Subscription started: </span>
                <span className="font-semibold text-body-secondary">
                  Dec 1st 2023
                </span>
              </li>
              <li className="text-sm">
                <span>Monthly Cost: </span>
                <span className="font-semibold text-body-secondary">$11</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-2xl h-fit">
            <div className="flex items-center flex-wrap justify-between gap-5">
              <h3 className="text-lg">Email Settings</h3>
              <Button type="border" className="text-sm px-4 py-1">
                Save
              </Button>
            </div>
            <div className="mt-5 pb-4 border-b border-[#CCE5E0]">
              <p className="text-sm font-semibold text-[#707070]">
                The auto index process will send a confirmation email each day
                with a summary of which {`URL's`} have been submitted for
                indexing.
              </p>
              <p className="text-sm font-semibold mt-3 text-[#707070]">
                You can control some options below to add additional recipients
                or turn off email notifications.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-5 mt-5">
                <div class="toggle-switch">
                  <input
                    // onChange={(e) =>
                    //   // setPricingType(e.target.checked ? "yearly" : "monthly")
                    // }
                    type="checkbox"
                    id="switch"
                    class="hidden"
                  />
                  <label for="switch" class="toggle-switch-label">
                    <div class="toggle-switch-dot"></div>
                  </label>
                </div>
                <h4 className="text-sm font-semibold">Emails On</h4>
              </div>
              <li className="text-sm">
                <span>{`Email's`} sent to: </span>
                <span className="font-semibold text-body-secondary">
                  snapit.99@gmail.com
                </span>
              </li>
              <p className="text-sm font-semibold text-body-secondary">
                Additional recipients
              </p>
              <input
                type="email"
                placeholder="Add additional emails"
                className="p-[10px] bg-[#F7F7F9] text-sm outline-none rounded-xl text-[#707070] placehoder:text-[#707070] italic"
              />
              <span className="text-sm text-[#707070]">
                Multiple seperated by commas.
              </span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl h-fit">
            <div className="flex items-center justify-between flex-wrap gap-5">
              <h3 className="text-lg">Delete Account</h3>
              <Button type="border" className="text-sm px-4 py-1">
                Delete Account
              </Button>
            </div>
            <div className="mt-5 pb-4 border-b border-[#CCE5E0]">
              <p className="text-sm font-semibold text-[#707070]">
                If you no longer require the use of your account, you may delete
                all of your personal data and account completely.
              </p>
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <p className="text-sm font-semibold text-body-secondary">
                Please note: This action can not be reversed
              </p>
              <div className="px-4 py-2 bg-light-primary rounded-2xl">
                <span className="text-sm font-semibold text-[#707070]">
                  You currently have a paid subscription, please cancel above
                  before you can delete your account.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
