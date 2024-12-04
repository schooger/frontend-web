import AppLogo from "./app-logo"
import { Coins, Home, Palmtree, Settings, Telescope, User } from 'lucide-react';

const links = [
  { title: 'Home', icon: <Home /> },
  { title: 'My Profile', icon: <User /> },
  { title: 'Settings', icon: <Settings /> },
  { title: 'Explore', icon: <Telescope /> },
  { title: 'Metaverse', icon: <Palmtree /> },
  { title: '1.8M Tokens', icon: <Coins /> },
]

export default function AppNavbar() {
  console.log('app-navbar')

  return (
    <div className="fixed top-0 left-0 w-[18rem] h-full px-4 py-2">
      <div className="flex justify-between items-baseline w-full">
        <AppLogo />

        <div className="hidden">

        </div>
      </div>

      <div className="flex flex-col gap-4 text-[#444] mt-8">
        {
          links.map((link) => (
            <div className="flex justify-start items-center gap-2 font-medium text-md">
              {link.icon}
              <span>{link.title}</span>
            </div>
          ))
        }
      </div>

      <div className="hidden text-[#444]">
        {
          [1, 2, 3, 4].map((i) => (
            <div className="flex flex-col justify-between items-baseline w-full mt-8">
              <h1 className="font-bold">Section {i}</h1>
              <div className="pl-1">
                <div className="">link</div>
                <div className="">link</div>
                <div className="">link</div>
                <div className="">link</div>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}