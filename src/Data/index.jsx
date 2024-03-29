import {
  RiAccountPinCircleFill,
  RiVipLine,
  RiExchangeDollarFill,
} from "react-icons/ri";
import React, { useContext } from "react";
import { Context } from "../Context/Context";
import { SlWallet } from "react-icons/sl";
import { CiVault, CiSettings } from "react-icons/ci";
import { AiOutlineGift } from "react-icons/ai";
import { TbAffiliate } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdSupportAgent, MdLogout } from "react-icons/md";
import { ImStatsBars } from "react-icons/im";
import { GiCash } from "react-icons/gi";
import { BsPeople } from "react-icons/bs";
import { BiCoinStack } from "react-icons/bi";
import highRollers from "../assets/highRollers.avif";
import bonuses from "../assets/bonuses.jpg";
import liveChat from "../assets/liveChat.jpg";
import lottery from "../assets/lottery.png";
import luckyBonus from "../assets/luckyBonus.png";
import affiliate from "../assets/affiliate.png";
import poolBall from "../assets/ball.png";
import welcomeBonuses from "../assets/welcomeBonuses.png";
import getBonuses from "../assets/getBonuses.png";
import playBonuses from "../assets/playBonuses.png";
import { useNavigate } from "react-router-dom";

export const accountMenu = () => {
  const {
    handleSettingOpen,
    handleMyInfoOpen,
    handleWalletOpen,
    handleVaultOpen,
    handleTransactionsOpen,
    setCurrentAccount,
  } = useContext(Context);

  const navigate = useNavigate();

  return [
    {
      name: "Play",
      onclick: {
        modal: () => {
          navigate("/play");
        },
      },
      icon: <SlWallet size={20} />,
    },
    {
      name: "User Info",
      onclick: {
        modal: handleMyInfoOpen,
      },
      icon: <RiAccountPinCircleFill size={20} />,
    },

    {
      name: "Wallet",
      onclick: { modal: handleWalletOpen },
      icon: <SlWallet size={20} />,
    },
    {
      name: "Vault",
      onclick: {
        modal: () => {
          handleVaultOpen();
        },
      },
      icon: <CiVault size={20} />,
    },
    {
      name: "Bonuses",
      onclick: {
        modal: () => {
          navigate("/bonuses");
        },
      },
      icon: <AiOutlineGift size={20} />,
    },
    {
      name: "Settings",
      icon: <CiSettings size={20} />,
      onclick: { modal: handleSettingOpen },
    },
    {
      name: "Transactions",
      onclick: {
        modal: handleTransactionsOpen,
      },
      icon: <RiExchangeDollarFill size={20} />,
    },
    {
      name: "Notifications",
      icon: <IoMdNotificationsOutline size={20} />,
    },

    {
      name: "Log out",
      onclick: { modal: () => setCurrentAccount(false) },
      icon: <MdLogout size={20} />,
    },
  ];
};

export const bonusesData = [
  {
    title: "Up to 10% rakeback",
    description:
      "Rakeback is a House Edge refund Available for level 1 and higher every 15 minutes Fully automated and transparent!",
    color: "bg-[#CEFE02]",
  },
  {
    title: "Weekly Lottery",
    description:
      "Rakeback is a House Edge refund Available for level 1 and higher every 15 minutes Fully automated and transparent!",
    color: "bg-[#EFD26E]",
  },
  {
    title: "$50 Daily Sniper Race",
    description: "Catch target rolls and get prizes!",
    color: "bg-[#1D84E2]",
  },
  {
    title: "Dice Progressive Jackpot",
    description: "Roll 7777 for a bet that ends with 77 and hit the Jackpot!",
    color: "bg-[#F2F2F2]",
  },
];

export const navListData = [
  { title: "Home", link: "/" },
  { title: "Bonuses", link: "/bonuses" },
];

export const statsData = [
  {
    title: "Jackpot",
    icon: (
      <GiCash
        size={75}
        className="self-end uxs:scale-90 sm:scale-100 text-[#EFD26E]"
      />
    ),
    num: "1 087 355 $",
  },
  {
    title: "Playing now",
    icon: (
      <BsPeople
        size={75}
        className="self-end uxs:scale-90 sm:scale-100 text-[#64D175]"
      />
    ),
    num: "1500",
  },
  {
    title: "Total Paid",
    icon: (
      <BiCoinStack
        size={75}
        className="self-end uxs:scale-90 sm:scale-100 text-[#1D84E2]"
      />
    ),
    num: "152 147 753 $",
  },
  {
    title: "Bets Placed",
    icon: (
      <BiCoinStack
        size={75}
        className="self-end uxs:scale-90 sm:scale-100 text-[#EFD26E]"
      />
    ),
    num: "156 853 345 $",
  },
];

export const sectionData = [
  {
    title: "Generous and Versatile Bonus System",
    description:
      "Cryptodice natively supports 18 cryptocurrencies and over 100 altcoins through an exchange provider within the site. Deposits are possible through PayPal, Google pay, Apple pay, bank cards and many more are coming.",
    img: bonuses,
    color: "#CEFE02",
  },
  {
    title: "High rollers lossback",
    description:
      "We respect your privacy and provide you with tools to keep anonymous whilst using the site and will keep supporting new features for this purpose. It's up to you being an anonymous high roller everybody is talking about or a dice superstar who got tens of “Congrats bro!” PMs on every lucky bet.",
    img: highRollers,
    color: "#EFD26E",
  },
  {
    title: "Support, Live Chat and Community",
    description:
      "We offer 3 betting modes, manual - where every bet is placed by hand, automated betting - where you configure the game settings and just look.Yes, we know how it hurts being down. Be ready to get up to 10% of total loss - literally it means house edge less than 1%.",
    img: liveChat,
    color: "#1D84E2",
  },
];

export const homeBonusesData = [
  {
    title: "Lottery",
    number: 1,
    description: "Win 100 000$ Lottery jackpotwith a ticket only costing o.1$",
    img: lottery,
  },
  {
    title: "Lucky Bonus",
    number: 2,
    description: "Thousands of bets in seconds. Zero hunters are here?",
    img: luckyBonus,
  },
  {
    title: "Affiliate",
    number: 3,
    description:
      "Be ready to get up to 10% of total loss – literally it means house edge even less than 1%",
    img: affiliate,
  },
  {
    title: "Jackpot",
    number: 0,
    description:
      "Progressive Bitcoin Dice Jackpot that only grows and waiting to be won.",
    img: poolBall,
  },
];

export const homeBonusesDescriptionsData = [
  {
    title: (
      <h2 className="text-[#F2F2F2] font-normal text-lg md:text-2xl xl:text-4xl">
        Experience what it means to truly make{" "}
        <span className="text-[#CEFE02]"> a Bet? </span>
      </h2>
    ),
    description:
      "On Cryptodice we understand that you want your funds in and out as fast as possible with your desired payment provider.",
    img: welcomeBonuses,
    color: "text-[#1D84E2]",
    link: "/bonuses",
    imgTitle: "Welcome Bonus",
  },
  {
    title: (
      <h2 className="text-[#F2F2F2] font-normal text-lg md:text-2xl xl:text-4xl">
        Gamble like never before with{" "}
        <span className="text-[#EFD26E]">Cryptodice</span> newest way to bet.
      </h2>
    ),
    description:
      "We respect your privacy and provide you with tools to keep anonymous whilst using the site and will keep supporting new features for this purpose.",
    img: getBonuses,
    color: "text-[#EFD26E]",
    link: "/bonuses",
    imgTitle: "Get Bonus",
  },
  {
    title: (
      <h2 className="text-[#F2F2F2] font-normal text-lg md:text-2xl xl:text-4xl">
        Gamble like never before with{" "}
        <span className="text-[#EFD26E]">Cryptodice</span> newest way to bet.
      </h2>
    ),
    description:
      "Cryptodice natively supports 18 cryptocurrencies and over 100 altcoins through an exchange provider within the site. Deposits are possible through PayPal, Google pay, Apple pay, bank cards and many more are coming.",
    img: playBonuses,
    color: "text-[#1D84E2]",
    link: "/play",
    imgTitle: "play",
  },
];

export const footerData = [
  { title: "Terms Of Use" },
  { title: "Privacy Policy" },
  { title: "About Us" },
  { title: "FAQ" },
  { title: "Help Center" },
  { title: "Gamble Aware" },
];

export const data = () => {
  return {};
};

export const settingsAccount = [
  { name: "presence", title: "Hide my online presence" },
  { name: "messages", title: "Private messages only allowed from friends" },
  { name: "showBallance", title: "Hide my ballance" },
  { name: "showVaultBallance", title: "Hide vault ballance" },
  { name: "incomingTips", title: "Disable incoming tips" },
  { name: "marketing", title: "I don’t want to recieve marketing E-mails" },
];

export const settingsVerifyData = [
  {
    title: "ID document number",
    placeholder: "Enter your ID number here",
    name: "idNumber",
  },
  {
    title: "First name",
    placeholder: "Enter your first name here",
    name: "firstName",
  },
  {
    title: "Last name",
    placeholder: "Enter your last name here",
    name: "lastName",
  },
];
