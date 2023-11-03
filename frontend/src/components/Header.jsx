import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flexCenter bg-[#f5f5f5] h-9">
      <div className="flexBetween max-container w-full padding-container">
        <Link to="/">
          <svg height="24px" width="24px" fill="#111" viewBox="0 0 26 32">
            <path d="M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z"></path>
          </svg>
        </Link>

        <ul className="flex gap-[18px] medium-12">
          <li className="relative">
            <Link to="/">Find a Store</Link>
            <div className="h-3 w-[1.5px] bg-black absolute top-[50%] translate-y-[-50%] right-[-15%]"></div>
          </li>
          <li className="relative group">
            <Link to="/help">Help</Link>
            <div className="absolute h-[20px] w-10"></div>
            <div className="h-3 w-[1.5px] bg-black absolute top-[50%] translate-y-[-50%] right-[-35%]"></div>
            <div className="z-50 hidden group-hover:block hover:block absolute w-[220px] bg-white shadow-md h-[280px] rounded-md right-0 top-6 text-white p-6">
              <div className="mb-2 medium-16 text-gray-90">
                <Link to="/help" className="px-2 py-1">
                  Help
                </Link>
              </div>
              <ul className="flex flex-col gap-1.5 regular-14 text-gray-30">
                <li className="hover:text-black">
                  <Link to="/" className="px-2 py-1">
                    Order Status
                  </Link>
                </li>
                <li className="hover:text-black">
                  <Link to="" className="px-2 py-1">
                    Dispatch and Delivery
                  </Link>
                </li>
                <li className="hover:text-black">
                  <Link to="" className="px-2 py-1">
                    Returns
                  </Link>
                </li>
                <li className="hover:text-black">
                  <Link to="" className="px-2 py-1">
                    Contact Us
                  </Link>
                </li>
                <li className="hover:text-black">
                  <Link to="" className="px-2 py-1">
                    Privacy Policy
                  </Link>
                </li>
                <li className="hover:text-black">
                  <Link to="" className="px-2 py-1">
                    Terms of Sale
                  </Link>
                </li>
                <li className="hover:text-black">
                  <Link to="" className="px-2 py-1">
                    Terms of Use
                  </Link>
                </li>
                <li className="hover:text-black">
                  <Link to="" className="px-2 py-1">
                    Send Us Feedback
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="relative">
            <Link to="/">Join Us</Link>
            <div className="h-3 w-[1.5px] bg-black absolute top-[50%] translate-y-[-50%] right-[-25%]"></div>
          </li>
          <li>
            <Link to="/">Sign In</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
