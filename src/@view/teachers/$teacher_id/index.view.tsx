import { useQuery } from "@tanstack/react-query"
import { find_one } from "@api/teachers/get.api"
import { Users, GraduationCap, Info } from "lucide-react"
import AppLoader from "@layout/app-loader.layout"
import { Link } from "@tanstack/react-router"
import { Skeleton } from "@mantine/core"
import { useState } from "react"

interface Props {
  teacher_id: number,
  active_tab: 'infos' | 'teachers' | 'students',
}

export default function View({ teacher_id, active_tab }: Props) {
  const [$image_is_loaded, $_image_is_loaded] = useState(false)

  const { isPending, data } = useQuery({
    queryKey: ['api/teachers/find_one'],
    queryFn: () => find_one({ teacher_id }),
  })

  if (isPending) return <AppLoader />

  return (
    <div className="flex flex-col justify-start items-center w-full px-4 h-full">
      <div className="flex flex-col items-center w-[64rem] max-w-[100%] h-full">
        <div className="flex flex-row justify-start items-center gap-2 w-full mb-8">
          <div className='w-[8rem] bg-transparent border-0 rounded-full'>
            <img
              className={`w-full aspect-square bg-white object-cover object-center rounded-full ${!$image_is_loaded && 'hidden'}`}
              src={`https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/${data?.teacher_image}`}
              alt="image"
              onLoad={() => $_image_is_loaded(true)}
            />
            <Skeleton
              circle
              mb="xl"
              classNames={{
                root: `w-full aspect-square ${$image_is_loaded ? 'hidden' : 'inline-block'} mb-[0_!important]`
              }}
            />
          </div>

          <div className="flex flex-row justify-start items-center gap-2">
            <h1 className="text-left text-3xl font-bold capitalize">{data?.teacher_first_name} {data?.teacher_last_name}</h1>
          </div>
        </div>

        <div className="w-full">
          <div className="flex flex-row justify-between gap-1 w-full text-gray-700 text-md font-semibold">
            <Link className="w-full" to={`/classes/${teacher_id}`}>
              <div className="flex justify-center items-center gap-1 w-full py-2 border-b-2 border-current" style={{ color: active_tab === 'infos' ? '#3b82f6' : 'currentcolor' }}>
                <Info />
                <span>infos</span>
              </div>
            </Link>
            <Link className="w-full" to={`/classes/${teacher_id}/teachers`}>
              <div className="flex justify-center items-center gap-1 w-full py-2 border-b-2 border-current" style={{ color: active_tab === 'teachers' ? '#3b82f6' : 'currentcolor' }}>
                <Users />
                <span>teachers</span>
              </div>
            </Link>
            <Link className="w-full" to={`/classes/${teacher_id}/students`}>
              <div className="flex justify-center items-center gap-1 w-full py-2 border-b-2 border-current" style={{ color: active_tab === 'students' ? '#3b82f6' : 'currentcolor' }}>
                <GraduationCap />
                <span>students</span>
              </div>
            </Link>
          </div>

          <div className="flex justify-center my-4">
            {
              active_tab === 'infos' && <TabInfos />
            }
            {
              active_tab === 'teachers' && <TabTeachers />
            }
            {
              active_tab === 'students' && <TabStudents />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

function TabInfos() {
  return (
    <h1>Info</h1>
  )
}

function TabTeachers() {
  return (
    <h1>Tab3</h1>
  )
}

function TabStudents() {
  return (
    <h1>Tab3</h1>
  )
}