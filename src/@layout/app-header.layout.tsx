import { Select } from '@mantine/core';
import { Menu } from '@mantine/core';
import { Link } from '@tanstack/react-router';
import { ChevronsUpDown, Languages, LogOut, Settings, UserCircle } from 'lucide-react';

export default function AppHeader() {
  //console.log('app-header')
  const lang = localStorage.getItem('lang') || 'en'

  const changeLanguage = (value: string | null) => {
    if (value) {
      localStorage.setItem('lang', value)

      window.location.reload()
    }
  }

  return (
    <div className="fixed top-0 left-0 z-40 w-full h-[3.6rem] pl-[14rem]">
      <div className="flex justify-between items-center pr-4">
        <div></div>
        <div className="flex justify-end items-center gap-2 pt-[.375rem]">
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

          <Dropdown />
        </div>
      </div>
    </div>
  )
}

function Dropdown() {
  return (
    <Menu shadow="md" width={140} position="top-end">
      <Menu.Target>
        <button className='bg-transparent border-0 rounded-full'>
          <div
            className="w-[2.8rem] h-[2.8rem] bg-white bg-no-repeat bg-cover bg-center rounded-full overflow-hidden"
            style={{ backgroundImage: "url('/image.jpg')" }}
          ></div>
        </button>
      </Menu.Target>

      <Menu.Dropdown className="font-bold">
        <Menu.Item
          leftSection={<UserCircle size={20} className="text-[#444]" />}
        >
          <Link to="/profile" className="text-[#444]">My Profile</Link>
        </Menu.Item>
        <Menu.Item
          leftSection={<Settings size={20} className="text-[#444]" />}
        >
          <Link to="/settings" className="text-[#444]">Settings</Link>
        </Menu.Item>
        <Menu.Item
          leftSection={<LogOut size={20} className="text-red-500" />}
        >
          <span className="text-red-500">Sign Out</span>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

