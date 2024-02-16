"use client";

import Image from "next/image";

import { NavItem } from "@/templates/shared";

// icons
import { HiOutlineMenu } from "react-icons/hi";
import { GrHomeOption } from "react-icons/gr";
import { TbInfoSquareRounded, TbLogin2 } from "react-icons/tb";
import {
  MdContacts,
  MdHowToVote,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";
import { BsPostcard } from "react-icons/bs";

// shadcn
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav className="bg-primary-300 flex items-center justify-between p-3">
      <Image
        src="/logo.png"
        alt="eVote"
        width={500}
        height={500}
        className="h-10 w-fit"
      />

      <div className="md:flex gap-5 hidden">
        <NavItem label="Home" url="/" className="text-gray-100 text-2xl" />
        <NavItem label="About" url="/about" className="text-gray-100" />
        <NavItem label="Contact" url="/contact" className="text-gray-100" />
        <NavItem label="Issues" url="/issues" className="text-gray-100" />
        <NavItem label="Voting" url="/voting" className="text-gray-100" />
        <NavItem label="Services" url="/services" className="text-gray-100" />
        <NavItem
          label="Login"
          url="/login"
          className="text-gray-100 rounded-xl py-2 px-5 border-2 border-gray-100"
        />
      </div>

      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <HiOutlineMenu className="text-3xl text-gray-100" />
          </SheetTrigger>
          <SheetContent className="bg-primary-300 border-none text-gray-100">
            <div className="h-full flex flex-col justify-between pt-10">
              <div className="flex flex-col gap-7">
                <NavItem label="Home" url="/" Icon={GrHomeOption} />
                <NavItem
                  label="About"
                  url="/about"
                  Icon={TbInfoSquareRounded}
                />
                <NavItem label="Contact" url="/contact" Icon={MdContacts} />
                <NavItem label="Issues" url="/issues" Icon={BsPostcard} />
                <NavItem label="Voting" url="/voting" Icon={MdHowToVote} />
                <NavItem
                  label="Services"
                  url="/services"
                  Icon={MdOutlineMiscellaneousServices}
                />
              </div>
              <button className="bg-primary-100 text-primary-400 font-bold rounded-xl">
                <NavItem
                  label="Login"
                  url="/login"
                  Icon={TbLogin2}
                  className="w-full flex items-center justify-center text-center py-2 px-10"
                />
              </button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
