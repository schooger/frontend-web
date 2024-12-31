import AppLoader from "@layout/app-loader.layout"
import AppLogo from "@layout/app-logo.layout";
import { useQuery } from "@tanstack/react-query";

export default function View() {
  const { isPending, isError } = useQuery<{ [key: string]: any }, Error>({
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
              <div className="flex flex-row justify-center items-center gap-1 text-3xl font-bold mb-4">
                <span className="text-[#444]">welcome to</span>
                <AppLogo fontSize="" />
              </div>
            </div>
      }
    </>
  )
}