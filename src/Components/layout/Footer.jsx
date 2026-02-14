import Logo from "../../assets/nft logo.svg";
import { FaCopyright } from "react-icons/fa";

import {
  FaXTwitter,
  FaInstagram,
  FaFacebookF,
  FaDiscord,
} from "react-icons/fa6";

export default function Footer() {
  const socials = [
    { id: 1, icon: FaXTwitter },
    { id: 2, icon: FaInstagram },
    { id: 3, icon: FaFacebookF },
    { id: 4, icon: FaDiscord, custom: true },
  ];

  const quickLinks = [
    {
      name: "Explore",
      links: ["Art", "Photography", "Music", "Games"],
    },
    {
      name: "My Account",
      links: [
        "My Profile",
        "My Collections",
        "My Favorites",
        "My Account Settings",
      ],
    },
    {
      name: "Resources",
      links: ["Help Center", "Partners", "Suggestions", "Newsletters"],
    },
    {
      name: "Company",
      links: ["About", "Careers", "Ranking", "Activity"],
    },
  ];

  return (
    <footer className="text-white px-5 md:px-10 lg:px-20 mt-20 lg:mt-30 mb-5">
      <div className="grid grid-cols-1 lg:grid-cols-[30%_65%] xl:grid-cols-2 gap-10">
        {/* Left */}
        <div className="space-y-5 lg:space-y-8">
          <div>
            <img src={Logo} alt="logo" className="w-25 md:w-30 " />
          </div>
          <p className="text-white/80 xl:w-lg text-sm 2xl:text-base">
            The World<span className="font-sans!">'</span>s Largest Digital
            Marketplace for crypto collections and non fungible tokens{" "}
            <span className="font-sans!">(</span>NFTs
            <span className="font-sans!">)</span> buy, sell and discover
            exclusive digital assets
          </p>
          <div className="flex gap-5 lg:gap-10 text-xl md:text-2xl items-center">
            {socials.map((Icon) => (
              <Icon.icon
                className={`hover:scale-115 hover:text-(--color3) 
                  transition-all duration-300 ${Icon.custom ? "text-2xl md:text-3xl!" : ""} cursor-pointer`}
              />
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="grid grid-cols-2 md:grid-cols-4 md:flex justify-between gap-5 md:gap-2">
          {quickLinks.map((quickLink, id) => (
            <div key={id}>
              <p className="text-(--color3)/80 text-xl mb-2 md:mb-5 ">
                {quickLink.name}
              </p>
              <div className="space-y-3">
                {quickLink.links.map((link) => (
                  <p className="text-white/80 text-sm cursor-pointer hover:text-white transition-all duration-300">
                    {link}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Copyrights */}
      <p className="mt-10 flex justify-center items-center gap-2 text-(--color3)/50">
        <FaCopyright />{" "}
        <span>
          {new Date().getFullYear()} <span className="font-sans!">|</span> All
          rights reserved
        </span>
      </p>
    </footer>
  );
}
