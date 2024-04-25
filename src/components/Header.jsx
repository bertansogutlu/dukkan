import React from "react";

function Header() {
  return (
    <header>
      <div className="flex py-5 justify-center bg-[#252B42] text-sm">
        <div className="w-[95%]">
          <address className="flex justify-between text-white font-bold not-italic">
            <div className="flex items-center gap-8">
              <a href="tel:+902420242">
                @ 02428880888
              </a>
              <a href="mailto:info@dukkan.com">
                @ info@dukkan.com
              </a>
            </div>
            <p>Follow Us and get a chance to win 80% off</p>
            <div className="flex">
              <span>Follow us :</span>
              <div className="flex items-center gap-3">
                <div></div>
                <div>@</div>
                <div>@</div>
                <div>@</div>
                <div>@</div>
              </div>
            </div>
          </address>
        </div>
      </div>
      <div className="flex py-5 justify-center bg-white">
        <div className="w-[95%] flex justify-between">
          <h1 className="text-[#252B42] text-2xl font-bold">Dukkan</h1>
          <nav className="flex gap-3 items-center text-[#737373]">
            <a href="/home/">Home</a>
            <a href="/shop/">Shop</a>
            <a href="/about/">About</a>
            <a href="/blog/">Blog</a>
            <a href="/contact/">Contact</a>
            <a href="/pages/">Pages</a>
          </nav>
          <div></div>
          <div></div>
          <div className="flex items-center gap-4 text-[#23A6F0]">
            <p>@ Login / Register</p>
            <div className="flex gap-4">
              <div>@</div>
              <div>@</div>
              <div>@</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
