import { Select, Skeleton } from '@mantine/core';
import { Menu } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { ChevronsUpDown, Languages, LogOut, Settings, UserCircle } from 'lucide-react';
import { useState } from 'react';

export default function AppHeader() {
  //console.log('app-header')
  const lang = localStorage.getItem('lang') || 'en'

  const { isPending, isError, data } = useQuery<{ [key: string]: any }, Error>({
    queryKey: ['app-header.lang'],
    queryFn: () => getLanguage(lang),
  })

  const changeLanguage = (value: string | null) => {
    if (value) {
      localStorage.setItem('lang', value)

      window.location.reload()
    }
  }

  return (
    <div className="fixed top-0 left-0 z-40 w-full h-[3.6rem] pl-[14rem]">
      <div className="flex justify-end items-start gap-2 pt-[.375rem] pr-2">
        {
          (isPending) ? <Loader />
            : (isError) ? <h1 className="text-md text-red-500 mt-4">something went wrong!</h1>
              : <>
                <div className="h-[2.8rem] font-bold">
                  <Select
                    radius="xl"
                    placeholder="Select placeholder"
                    data={[
                      { label: 'English', value: 'en' },
                      { label: 'العربية', value: 'ar' },
                      { label: 'français', value: 'fr' },
                    ]}
                    onChange={changeLanguage}
                    defaultValue={lang}
                    allowDeselect={false}
                    leftSection={<Languages color="#444" size={20} />}
                    leftSectionPointerEvents="none"
                    rightSection={<ChevronsUpDown color="#444" size={20} />}
                    rightSectionPointerEvents="none"
                    styles={{
                      section: {
                        width: '2.8rem',
                        paddingLeft: '.8rem',
                        paddingRight: '.8rem',
                        color: '#444',
                      },
                      input: {
                        width: '8.4rem',
                        height: '2.8rem',
                        color: '#444',
                        backgroundColor: '#fff',
                        borderColor: '#eee',
                        textAlign: 'center',
                      }
                    }}
                  />
                </div>

                <Dropdown lang={data} />
              </>
        }
      </div>
    </div>
  )
}

function Dropdown({ lang }: any) {
  const [imageIsLoaded, _imageIsLoaded] = useState(false)

  return (
    <Menu shadow="md" width={155} position="top-end">
      <Menu.Target>
        <button className='bg-transparent border-0 rounded-full'>
          <img
            className={`w-[2.8rem] h-[2.8rem] bg-white object-cover object-center rounded-full ${!imageIsLoaded && 'hidden'}`}
            src='/image.jpg'
            alt="image"
            onLoad={() => _imageIsLoaded(true)}
          />
          <Skeleton
            height={44}
            circle
            mb="xl"
            classNames={{
              root: `${imageIsLoaded ? 'hidden' : 'inline-block'} mb-[0_!important]`
            }}
          />
        </button>
      </Menu.Target>

      <Menu.Dropdown className="font-bold">
        <Menu.Item
          leftSection={<UserCircle size={20} className="text-[#444]" />}
        >
          <Link to="/profile" className="text-[#444] capitalize">{lang?.my_profile}</Link>
        </Menu.Item>
        <Menu.Item
          leftSection={<Settings size={20} className="text-[#444]" />}
        >
          <Link to="/settings" className="text-[#444] capitalize">{lang?.settings}</Link>
        </Menu.Item>
        <Menu.Item
          leftSection={<LogOut size={20} className="text-red-500" />}
        >
          <span className="text-red-500 capitalize">{lang?.sign_out}</span>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

function Loader() {
  return (
    <div className="h-[3rem]">
      {
        Array.from({ length: 1 }, (_, i) => i).map((i) => (
          <div className="block" dir="rtl" key={`skeleton-${i}`}>
            <Skeleton
              height={40}
              circle
              mb="xl"
              classNames={{
                root: 'inline-block align-top'
              }}
            />

            <div className="w-[7.2rem] inline-block align-top mt-1 mx-2">
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

async function getLanguage(lang: string) {
  try {
    const r = await import(`@lang/${lang}/app-header.lang.ts`)
    return r.default
  } catch (err) {
    return err
  }
}

