import { Select } from '@mantine/core';
import { ChevronsUpDown, Languages } from 'lucide-react';

export default function AppHeader() {
  console.log('app-header')
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
        <div className="flex justify-end items-center gap-2">
          <div className="h-[2.8rem] mt-2 font-bold">
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

          <div
            className="w-[2.8rem] h-[2.8rem] mt-2 bg-white bg-no-repeat bg-cover bg-center rounded-full overflow-hidden"
            style={{ backgroundImage: "url('/image.jpg')" }}
          ></div>
        </div>
      </div>
    </div>
  )
}