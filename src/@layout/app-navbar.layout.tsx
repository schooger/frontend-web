import { Accordion } from "@mantine/core";
import AppLogo from "./app-logo"
import { Coins, Gift, Home, Landmark, Palmtree, School, Settings, SquareChartGantt, Telescope, Trophy, User, Users } from 'lucide-react';
import { Link } from "@tanstack/react-router";

const topLinks = [
  { link: '/', title: 'Home', icon: <Home /> },
  { link: '/coming-soon', title: 'My Profile', icon: <User /> },
  { link: '/coming-soon', title: 'Settings', icon: <Settings /> },
  { link: '/coming-soon', title: 'Explore', icon: <Telescope /> },
  { link: '/coming-soon', title: 'Ranking', icon: <Trophy /> },
  { link: '/coming-soon', title: 'Rewards', icon: <Gift /> },
  { link: '/coming-soon', title: '1.8M Tokens', icon: <Coins /> },
  { link: '/coming-soon', title: 'Metaverse', icon: <Palmtree /> },
]

const accorLinks = [
  {
    title: 'Organization',
    icon: <School size={20} />,
    sublinks: [
      { link: '/coming-soon', title: 'Classes' },
      { link: '/coming-soon', title: 'Modules' },
      { link: '/coming-soon', title: 'Calendars' },
      { link: '/coming-soon', title: 'Transports' },
      { link: '/coming-soon', title: 'Permissions' },
    ]
  },
  {
    title: 'Reports',
    icon: <SquareChartGantt size={20} />,
    sublinks: [
      { link: '/coming-soon', title: 'Exams' },
      { link: '/coming-soon', title: 'Degrees' },
      { link: '/coming-soon', title: 'Homework' },
      { link: '/coming-soon', title: 'Presence' },
    ]
  },
  {
    title: 'Profiles',
    icon: <Users size={20} />,
    sublinks: [
      { link: '/coming-soon', title: 'Students' },
      { link: '/coming-soon', title: 'Parents' },
      { link: '/coming-soon', title: 'Teachers' },
      { link: '/coming-soon', title: 'Administrators' }
    ]
  },
  {
    title: 'Accounting',
    icon: <Landmark size={20} />,
    sublinks: [
      { link: '/coming-soon', title: 'Incomes' },
      { link: '/coming-soon', title: 'Charges' }
    ]
  },
]

export default function AppNavbar() {
  console.log('app-navbar')

  return (
    <div className="fixed top-0 left-0 z-40 w-[14rem] h-full px-4 py-2 overflow-auto">
      <div className="flex justify-between items-baseline w-full">
        <AppLogo />

        <div className="hidden">

        </div>
      </div>

      <div className="flex flex-col gap-4 text-[#444] mt-8">
        {
          topLinks.map((link, i) => (
            <Link to={link.link} key={`link-top-${i}`}>
              <div className="flex justify-start items-center gap-2 font-medium text-md">
                {link.icon}
                <span>{link.title}</span>
              </div>
            </Link>
          ))
        }
      </div>

      <div className="mt-8">
        <Accordion
          multiple
          defaultValue={['Organization']}
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
                    <Link to={sublink.link} key={`link-n-${n}`}>
                      <Accordion.Panel>{sublink.title}</Accordion.Panel>
                    </Link>
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