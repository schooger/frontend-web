import { Avatar, Indicator, Text } from "@mantine/core"
import { useQuery } from "@tanstack/react-query"
import AppLoader from "./app-loader.layout"
import { find_all as find_all_students } from "@api/students/get.api"

export default function AppRight() {
  const { isPending, data } = useQuery({
    queryKey: ['api/students/find_all'],
    queryFn: () => find_all_students(),
  })

  if (isPending) return <AppLoader />

  return (
    <div className="fixed z-40 right-0 top-0 w-[12.5rem] h-full pt-[4rem]">
      <div className="flex flex-col gap-4 mt-2">
        {
          data?.map(({ student_first_name, student_last_name, student_image }, i) => (
            <div className="flex flex-row justify-start items-center gap-2" key={`app-right-user-${i}`}>
              <Indicator inline processing color="green" size={10} offset={4} position="bottom-end">
                <Avatar
                  size="md"
                  radius="xl"
                  src={`https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/${student_image}`}
                  />
              </Indicator>

              <Text className="text-sm font-semibold" truncate="end">{student_first_name} {student_last_name}</Text>
            </div>
          ))
        }
      </div>

    </div>
  )
}
//also add top 10