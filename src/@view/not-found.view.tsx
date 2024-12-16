import { useQuery } from "@tanstack/react-query"
import { Skeleton } from "@mantine/core"

export default function View() {
  const lang = localStorage.getItem('lang') || 'en'

  const { isPending, isError, data: $lang } = useQuery<{ [key: string]: any }, Error>({
    queryKey: ['not-found.view'],
    queryFn: async() => await getLanguage(lang),
  })

  return (
    <div>
      {
        (isPending) ? <Loader />
          : (isError) ? <h1 className="text-md text-red-500 mt-4">something went wrong!</h1>
            : <>
              <div className="text-center pt-[8rem]">
                <h1 className="relative text-5xl md:text-6xl md:leading-tight font-bold md:text-center leading-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-violet-500 mb-6">{$lang?.page_not_found}</h1>
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
        Array.from({ length: 4 }, (_, i) => i).map((i) => (
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

async function getLanguage(lang: string) {
  try {
    const r = await import(`@lang/${lang}/view/not-found.lang.ts`)
    return r.default
  } catch (err) {
    return err
  }
}