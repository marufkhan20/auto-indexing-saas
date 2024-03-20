import Link from "next/link";

const FooterNav = () => {
  return (
    <section className="bg-white pt-[50px] px-5 sm:px-0">
      <div className="container-custom">
        <div className="flex justify-between gap-5 pb-5 flex-wrap">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <img src="/images/logo.png" alt="logo" />
              <h3 className="text-2xl font-semibold">Get Indexed Fast</h3>
            </Link>
            <div className="flex items-center gap-1 mt-4 text-sm text-body-secondary font-medium">
              <Link href="#">Terms and Conditions</Link>
              <span>|</span>
              <Link href="#">Privacy Policy</Link>
            </div>
          </div>
          <div>
            <h3 className="text-base mb-4">Pages</h3>
            <ul className="flex flex-col gap-4">
              <li className="text-sm font-semibold transition-all hover:text-primary">
                <Link href="#">Features</Link>
              </li>
              <li className="text-sm font-semibold transition-all hover:text-primary">
                <Link href="#">Pricing</Link>
              </li>
              <li className="text-sm font-semibold transition-all hover:text-primary">
                <Link href="#">FAQ</Link>
              </li>
              <li className="text-sm font-semibold transition-all hover:text-primary">
                <Link href="#">Blog</Link>
              </li>
              <li className="text-sm font-semibold transition-all hover:text-primary">
                <Link href="#">Testimonials</Link>
              </li>
              <li className="text-sm font-semibold transition-all hover:text-primary">
                <Link href="#">Affiliates</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base mb-4">Blog Articles</h3>
            <ul className="flex flex-col gap-4">
              <li className="text-sm font-semibold transition-all hover:text-primary">
                <Link href="#">Setup Google Indexing</Link>
              </li>
              <li className="text-sm font-semibold transition-all hover:text-primary">
                <Link href="#">Auto Index Pages To Google</Link>
              </li>
              <li className="text-sm font-semibold transition-all hover:text-primary">
                <Link href="#">What is an XML Siterap?</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterNav;
