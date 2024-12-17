import AppLoader from "@layout/app-loader.layout"
import { useQuery } from "@tanstack/react-query"

export default function View() {
  const { isPending, isError, data: $lang } = useQuery<{ [key: string]: any }, Error>({
    queryKey: ['lang/view/coming-soon'],
    queryFn: async () => (await import(`@lang/${localStorage.getItem('lang') || 'en'}/view/coming-soon.lang.ts`)).default,
  })

  return (
    <>
      {
        (isPending) ? <AppLoader />
          : (isError) ? <h1 className="text-md text-red-500 mt-4">something went wrong!</h1>
            :
            <div className="text-center pt-[8rem]">
              <h1 className="relative text-5xl md:text-6xl md:leading-tight font-bold md:text-center leading-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-violet-500 mb-6">{$lang?.coming_soon}</h1>
            </div>
      }
    </>
  )
}