import { Accordion } from "@mantine/core";
import AppLogo from "./app-logo"
import { Coins, Home, Landmark, Palmtree, Settings, Telescope, User, Users } from 'lucide-react';

const links = [
  { title: 'Home', icon: <Home /> },
  { title: 'My Profile', icon: <User /> },
  { title: 'Settings', icon: <Settings /> },
  { title: 'Explore', icon: <Telescope /> },
  { title: 'Metaverse', icon: <Palmtree /> },
  { title: '1.8M Tokens', icon: <Coins /> },
]

const accorLinks = [
  { title: 'Profiles', icon: <Users size={20} />, sublinks: [{ title: 'Students' }, { title: 'Parents' }, { title: 'Teachers' }, { title: 'Administrators' }] },
  { title: 'Accounting', icon: <Landmark size={20} />, sublinks: [{ title: 'Incomes' }, { title: 'Charges' }] },
]

export default function AppNavbar() {
  console.log('app-navbar')

  return (
    <div className="fixed top-0 left-0 w-[14rem] h-full px-4 py-2 overflow-auto">
      <div className="flex justify-between items-baseline w-full">
        <AppLogo />

        <div className="hidden">

        </div>
      </div>

      <div className="flex flex-col gap-4 text-[#444] mt-8">
        {
          links.map((link, i) => (
            <div className="flex justify-start items-center gap-2 font-medium text-md" key={`link-${i}`}>
              {link.icon}
              <span>{link.title}</span>
            </div>
          ))
        }
      </div>

      <div className="mt-8">
        <Accordion
          multiple
          defaultValue={['Profiles']}
          classNames={{
            item: 'border-none',
            panel: 'pl-4',
            control: 'pl-0 hover:bg-gray-200',
            label: 'font-bold text-[#444]',
          }}
        >
          {
            accorLinks.map((link, m) => (
              <Accordion.Item value={link.title} key={`link-m-${m}`}>
                <Accordion.Control icon={link.icon}>{link.title}</Accordion.Control>
                {
                  link.sublinks.map((sublink, n) => (
                    <Accordion.Panel key={`link-n-${n}`}>{sublink.title}</Accordion.Panel>
                  ))
                }
              </Accordion.Item>
            ))
          }
        </Accordion>
      </div>

    </div>
  )
}