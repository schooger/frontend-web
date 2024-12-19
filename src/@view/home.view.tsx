import AppLoader from "@layout/app-loader.layout"
import { useQuery } from "@tanstack/react-query";
import Child1 from './child.view'

export default function View() {
  const { isPending, isError, data: $lang } = useQuery<{ [key: string]: any }, Error>({
    queryKey: ['lang/view/home'],
    queryFn: async () => (await import(`@lang/${localStorage.getItem('lang') || 'en'}/view/home.lang.ts`)).default,
  })

  return (
    <>
      {
        (isPending) ? <AppLoader />
          : (isError) ? <h1 className="text-md text-red-500 mt-4">something went wrong!</h1>
            :
            <div className="flex justify-center items-center flex-col h-screen pb-[12rem]">
              <div className="text-3xl font-bold mb-4">
                <span className="text-[#444]">{$lang?.ask_schooger_for_help}</span>
              </div>
              <Child1 />
            </div>
      }
    </>
  )
}