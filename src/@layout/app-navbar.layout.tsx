import AppLogo from "./app-logo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function AppNavbar() {
  console.log('app-navbar')

  return (
    <div className="fixed top-0 left-0 w-[18rem] h-full px-4 py-2">
      <div className="flex justify-between items-baseline w-full">
        <AppLogo />

        <div className="hidden">
          <FontAwesomeIcon icon={faSearch} className="text-[1.5rem] font-bold text-gray-700" />
        </div>
      </div>

      <div className="text-[#444]">
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