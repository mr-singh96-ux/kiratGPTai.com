"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import { FileClock, Home, Settings, WalletCards } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation'; // Correct import for useRouter
import UsageTrack from './UsageTrack';

function Sidebar() {
  const MenuList = [
    {
      name: 'Home',
      icon: Home,
      path: '/dashboard',
    },
    {
      name: 'History',
      icon: FileClock,
      path: '/dashboard/history',
    },
    {
      name: 'Billing',
      icon: WalletCards,
      path: '/dashboard/billing',
    },
    {
      name: 'Setting',
      icon: Settings,
      path: '/dashboard/setting',
    },
  ];

  const Currentpath = usePathname();
  const router = useRouter(); // Use the correct useRouter from 'next/navigation'

  useEffect(() => {
    console.log(Currentpath);
  }, [Currentpath]);

  const handleMenuClick = (path: string) => {
    router.push(path); // Navigate to the specified path
  };

  return (
    <div className="h-screen p-5 shadow-sm border bg-white relative">
      <div className="justify-center items-center ml-4">
        <Image src="/Logo (1).png" alt="Logo" width={1800} height={100} />
      </div>
      <hr className="my-6 border" />
      <div className="mt-3">
        {MenuList.map((menu) => (
          <div
            key={menu.path}
            className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-full cursor-pointer items-center ${Currentpath === menu.path ? 'bg-primary text-white' : ''}`}
            onClick={() => handleMenuClick(menu.path)} // Add onClick handler
          >
            <menu.icon className="h-6 w-6" />
            <h2 className="text-lg">{menu.name}</h2>
          </div>
        ))}
      </div>
      <div className="absolute bottom-10 left-0 w-full">
        <UsageTrack />
      </div>
    </div>
  );
}

export default Sidebar;
