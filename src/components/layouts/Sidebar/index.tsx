'use client'
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { CiCalendar } from "react-icons/ci";
import { FaRegBuilding } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { GoGear } from "react-icons/go";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { IoHomeOutline } from "react-icons/io5";
import { TbUsersPlus } from "react-icons/tb";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
  const router = useRouter()

  return (
    <div className="pb-12 min-h-screen">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Dashboard</h2>
          <div className="space-y-3 font-light">
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-md flex flex-row gap-x-3 items-center text-primary hover:text-primary"
              onClick={() => router.push('/')}
            >
              <IoHomeOutline className="text-lg" />
              Home
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-md flex flex-row gap-x-3 items-center hover:text-primary"
            >
              <FaRegMessage className="text-lg" />
              Messages
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-md flex flex-row gap-x-3 items-center hover:text-primary"
            >
              <FaRegBuilding className="text-lg" />
              Company Profile
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-md flex flex-row gap-x-3 items-center hover:text-primary"
            >
              <TbUsersPlus className="text-lg" />
              All Aplicants
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-md flex flex-row gap-x-3 items-center hover:text-primary"
              onClick={() => router.push('/job-listings')}
            >
              <HiOutlineClipboardDocumentList className="text-lg" />
              Job Listings
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-md flex flex-row gap-x-3 items-center hover:text-primary"
            >
              <CiCalendar className="text-lg" />
              My Schedule
            </Button>
          </div>
        </div>
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold">Settings</h2>
            <div>
              <Button
                variant={"ghost"}
                className="w-full justify-start rounded-md flex flex-row gap-x-3 items-center hover:text-primary"
                onClick={() => router.push('/settings')}
              >
                <GoGear className="text-lg" />
                Settings
              </Button>
              <Button
                variant={"ghost"}
                className="w-full justify-start rounded-md flex flex-row gap-x-3 items-center text-red-500 hover:bg-red-200 hover:text-red-500"
                onClick={() => signOut()}
              >
                <AiOutlineLogout className="text-lg" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
