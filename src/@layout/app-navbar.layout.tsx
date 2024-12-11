import { Accordion, Skeleton } from "@mantine/core";
import AppLogo from "./app-logo"
import { Coins, Gift, Home, Landmark, Palmtree, School, Settings, SquareChartGantt, Telescope, Trophy, User, Users } from 'lucide-react';
import { Link } from "@tanstack/react-router";
import { useQuery } from '@tanstack/react-query'

export default function AppNavbar() {
  const lang = localStorage.getItem('lang') || 'en'

  const { isPending, isError, data } = useQuery<{ [key: string]: any }, Error>({
    queryKey: ['app-navbar.lang'],
    queryFn: async () => {
      try {
        const r = await import(`@lang/${lang}/app-navbar.lang.ts`)
        return r.default
      } catch (err) {
        return err
      }
    },
  })

  const { topLinks, accorLinks } = links(data)

  console.log('app-navbar')

  return (
    <div className="fixed top-0 left-0 z-40 w-[14rem] h-full px-4 py-2 overflow-auto">
      <div className="flex justify-start items-baseline w-full">
        <AppLogo />
      </div>
      {
        (isPending) ? <Loader />
          : (isError) ? <h1 className="text-md text-red-500 mt-4">something went wrong!</h1>
            : <>
              <div className="flex flex-col gap-4 text-[#444] mt-8">
                {
                  topLinks.map((link, i) => (
                    <Link to={link.link} key={`link-top-${i}`}>
                      <div className="flex justify-start items-center gap-2 font-medium text-md capitalize">
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
                  defaultValue={['item-0']}
                  classNames={{
                    item: 'border-none',
                    panel: 'pl-4',
                    control: 'pl-0 hover:bg-gray-200',
                    label: 'font-bold text-[#444]',
                  }}
                >
                  {
                    accorLinks.map((link, m) => (
                      <Accordion.Item value={`item-${m}`} key={`link-m-${m}`}>
                        <Accordion.Control icon={link.icon} className="capitalize">{link.title}</Accordion.Control>
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
            </>
      }
    </div>
  )
}

function Loader() {
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

function links(lang: any) {
  const topLinks = [
    { link: '/', title: lang?.home, icon: <Home /> },
    { link: '/profile', title: lang?.my_profile, icon: <User /> },
    { link: '/settings', title: lang?.settings, icon: <Settings /> },
    { link: '/coming-soon', title: lang?.explore, icon: <Telescope /> },
    { link: '/coming-soon', title: lang?.ranking, icon: <Trophy /> },
    { link: '/coming-soon', title: lang?.rewards, icon: <Gift /> },
    { link: '/coming-soon', title: lang?.tokens, icon: <Coins /> },
    { link: '/coming-soon', title: lang?.metaverse, icon: <Palmtree /> },
  ]

  const accorLinks = [
    {
      title: lang?.organization,
      icon: <School size={20} />,
      sublinks: [
        { link: '/organization/classes', title: lang?.classes },
        { link: '/organization/modules', title: lang?.modules },
        { link: '/organization/calendars', title: lang?.calendars },
        { link: '/organization/transports', title: lang?.transports },
        { link: '/organization/permissions', title: lang?.permissions },
      ]
    },
    {
      title: lang?.reports,
      icon: <SquareChartGantt size={20} />,
      sublinks: [
        { link: '/reports/exams', title: lang?.exams },
        { link: '/reports/degrees', title: lang?.degrees },
        { link: '/reports/homework', title: lang?.homework },
        { link: '/reports/presence', title: lang?.presence },
      ]
    },
    {
      title: lang?.profiles,
      icon: <Users size={20} />,
      sublinks: [
        { link: '/profiles/parents', title: lang?.parents },
        { link: '/profiles/teachers', title: lang?.teachers },
        { link: '/profiles/students', title: lang?.students },
        { link: '/profiles/administrators', title: lang?.administrators },
      ]
    },
    {
      title: lang?.accounting,
      icon: <Landmark size={20} />,
      sublinks: [
        { link: '/accounting/incomes', title: lang?.incomes },
        { link: '/accounting/charges', title: lang?.charges },
      ]
    },
  ]

  return { topLinks, accorLinks }
}