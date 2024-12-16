import AppLogo from "./app-logo"
import { Accordion, Skeleton } from "@mantine/core";
import { CircleUser, Coins, Gift, Home, Landmark, Palmtree, School, Settings, SquareChartGantt, Telescope, Trophy, Users } from 'lucide-react';
import { Link, useLocation } from "@tanstack/react-router";
import { useQuery } from '@tanstack/react-query'

export default function AppNavbar() {
  console.log('app-navbar')

  const { isPending, isError, data: $lang } = useQuery<{ [key: string]: any }, Error>({
    queryKey: ['layout/app-navbar.lang'],
    queryFn: async () => (await import(`@lang/${localStorage.getItem('lang') || 'en'}/layout/app-navbar.lang.ts`)).default,
  })

  const tokens = '1.9M'

  const { topLinks, accordionLinks } = getLinks($lang, tokens)

  const { pathname } = useLocation();
  const openedAccordionItems = getOpenedAccordionItems(pathname)

  return (
    <div className="fixed top-0 left-0 z-40 w-[14rem] h-full px-4 py-2 overflow-auto">
      <div className="flex justify-start items-baseline w-full">
        <AppLogo />
      </div>
      {
        (isPending) ? <AppNavbarLoader />
          : (isError) ? <h1 className="text-md text-red-500 mt-4">something went wrong!</h1>
            : <>
              <div className="flex flex-col gap-4 text-[#444] mt-8">
                {
                  topLinks.map((link, i) => (
                    <Link to={link.path} key={`link-top-${i}`} aria-label={link.title}>
                      <div className={`flex justify-start items-center gap-2 text-md capitalize ${pathname === link.path
                        ? 'text-blue-500 font-bold'
                        : 'font-medium'
                        }`}>
                        {link.icon}
                        <span>{link.title}</span>
                      </div>
                    </Link>
                  ))
                }
              </div>

              <div className="mt-8 capitalize">
                <Accordion
                  multiple
                  defaultValue={openedAccordionItems}
                  classNames={{
                    item: 'border-none',
                    panel: 'pl-4',
                    control: 'pl-0 hover:bg-gray-200',
                    label: 'font-bold text-[#444]',
                  }}
                >
                  {
                    accordionLinks.map((link, m) => (
                      <Accordion.Item value={`item-${m}`} key={`link-m-${m}`}>
                        <Accordion.Control icon={link.icon} className="capitalize">{link.title}</Accordion.Control>
                        {
                          link.sublinks.map((sublink, n) => (
                            <Link to={sublink.path} key={`link-n-${n}`} aria-label={sublink.title}>
                              <Accordion.Panel>
                                <span className={`${pathname === sublink.path
                                  ? 'text-blue-500 font-bold'
                                  : 'font-medium'
                                  }`}>{sublink.title}</span>
                              </Accordion.Panel>
                            </Link>
                          ))
                        }
                      </Accordion.Item>
                    ))
                  }
                </Accordion>
              </div>
            </>
      }
    </div>
  )
}

function getOpenedAccordionItems(pathname: string): string[] {
  if (['/organization/classes', '/organization/modules', '/organization/calendars', '/organization/transports', '/organization/permissions'].includes(pathname)) return ['item-0']
  if (['/reports/exams', '/reports/degrees', '/reports/homework', '/reports/presence'].includes(pathname)) return ['item-1']
  if (['/profiles/parents', '/profiles/students', '/profiles/teachers', '/profiles/administrators'].includes(pathname)) return ['item-2']
  if (['/accounting/incomes', '/accounting/charges'].includes(pathname)) return ['item-3']
  return []
}

function getLinks($lang: any, tokens: string) {
  const topLinks = [
    { path: '/', title: $lang?.home, icon: <Home size={22} strokeWidth={2.2} /> },
    { path: '/profile', title: $lang?.my_profile, icon: <CircleUser size={22} strokeWidth={2.2} /> },
    { path: '/settings', title: $lang?.settings, icon: <Settings size={22} strokeWidth={2.2} /> },
    { path: '/explore', title: $lang?.explore, icon: <Telescope size={22} strokeWidth={2.2} /> },
    { path: '/ranking', title: $lang?.ranking, icon: <Trophy size={22} strokeWidth={2.2} /> },
    { path: '/rewards', title: $lang?.rewards, icon: <Gift size={22} strokeWidth={2.2} /> },
    { path: '/coming-soon', title: `${tokens} ${$lang?.tokens}`, icon: <Coins size={22} strokeWidth={2.2} /> },
    { path: '/coming-soon', title: $lang?.metaverse, icon: <Palmtree size={22} strokeWidth={2.2} /> },
  ]

  const accordionLinks = [
    {
      title: $lang?.organization,
      icon: <School size={20} />,
      sublinks: [
        { path: '/organization/classes', title: $lang?.classes },
        { path: '/organization/modules', title: $lang?.modules },
        { path: '/organization/calendars', title: $lang?.calendars },
        { path: '/organization/transports', title: $lang?.transports },
        { path: '/organization/permissions', title: $lang?.permissions },
      ]
    },
    {
      title: $lang?.reports,
      icon: <SquareChartGantt size={20} />,
      sublinks: [
        { path: '/reports/exams', title: $lang?.exams },
        { path: '/reports/degrees', title: $lang?.degrees },
        { path: '/reports/homework', title: $lang?.homework },
        { path: '/reports/presence', title: $lang?.presence },
      ]
    },
    {
      title: $lang?.profiles,
      icon: <Users size={20} />,
      sublinks: [
        { path: '/profiles/parents', title: $lang?.parents },
        { path: '/profiles/teachers', title: $lang?.teachers },
        { path: '/profiles/students', title: $lang?.students },
        { path: '/profiles/administrators', title: $lang?.administrators },
      ]
    },
    {
      title: $lang?.accounting,
      icon: <Landmark size={20} />,
      sublinks: [
        { path: '/accounting/incomes', title: $lang?.incomes },
        { path: '/accounting/charges', title: $lang?.charges },
      ]
    },
  ]

  return { topLinks, accordionLinks }
}

function AppNavbarLoader() {
  return (
    <div className="mt-8">
      {
        Array.from({ length: 8 }, (_, i) => i).map((i) => (
          <div className="block" key={`skeleton-${i}`}>
            <Skeleton
              height={40}
              circle
              mb="xl"
              classNames={{
                root: 'inline-block align-top'
              }}
            />

            <div className="w-[7.2rem] inline-block align-top mt-1 ml-2">
              <Skeleton height={7} radius="xl" />
              <Skeleton height={7} mt={5} radius="xl" />
              <Skeleton height={7} mt={5} width="70%" radius="xl" />
            </div>
          </div>
        ))
      }
    </div>
  )
}