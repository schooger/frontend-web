import Planet from "@asset/planet.asset"
import { useQuery } from "@tanstack/react-query"
import { find_one } from "@api/classes/get.api"
import planets from "@lib/planets.lib"
import { Users, GraduationCap, Info } from "lucide-react"
import AppLoader from "@layout/app-loader.layout"
import { Link } from "@tanstack/react-router"
import CardClass from "@ui/card/class.card"

interface Props {
  class_id: number,
  active_tab: 'infos' | 'teachers' | 'students',
}

export default function View({ class_id, active_tab }: Props) {
  const { isPending, data } = useQuery({
    queryKey: ['api/classes/find_one'],
    queryFn: () => find_one({ class_id }),
  })

  if (isPending) return <AppLoader />

  const planet = planets.find(planet => planet.planet_id === data?.planet_id)

  return (
    <div className="flex flex-col justify-start items-center w-full px-2 h-full">
      <div className="flex flex-col items-center w-[40rem] max-w-[90%] h-full">
        <div className="flex flex-row justify-start items-start gap-2 w-full mb-8">
          <div className="flex flex-row justify-start items-center gap-2 w-full">
            <Planet
              width={40}
              height={40}
              planet_color={planet?.planet_color}
            />
            <h1 className="text-left text-2xl font-bold capitalize">{data?.class_name} - {planet?.planet_name} ({planet?.level_name})</h1>
          </div>

        </div>

        <div className="w-full">
          <div className="flex flex-row justify-between gap-1 w-full text-gray-700 text-md font-semibold">
            <Link className="w-full" to={`/classes/${class_id}`}>
              <div className="flex justify-center items-center gap-1 w-full py-2 border-b-2 border-current" style={{ color: active_tab === 'infos' ? planet?.planet_color : 'currentcolor' }}>
                <Info />
                <span>infos</span>
              </div>
            </Link>
            <Link className="w-full" to={`/classes/${class_id}/teachers`}>
              <div className="flex justify-center items-center gap-1 w-full py-2 border-b-2 border-current" style={{ color: active_tab === 'teachers' ? planet?.planet_color : 'currentcolor' }}>
                <Users />
                <span>teachers</span>
              </div>
            </Link>
            <Link className="w-full" to={`/classes/${class_id}/students`}>
              <div className="flex justify-center items-center gap-1 w-full py-2 border-b-2 border-current" style={{ color: active_tab === 'students' ? planet?.planet_color : 'currentcolor' }}>
                <GraduationCap />
                <span>students</span>
              </div>
            </Link>
          </div>

          <div className="flex justify-center my-4">
            <CardClass class_id={class_id} class_name="Class" planet_id={planet?.planet_id as number} planet_name={planet?.planet_name as string} planet_color={planet?.planet_color as string} />
          </div>
        </div>
      </div>
    </div>
  )
}

/*function TabTeachers() {
  const { isPending } = useQuery({
    queryKey: ['wait-t'],
    queryFn: async () => await new Promise(r => setTimeout(r, 2000)),
  })

  if (isPending) return <AppLoader />

  return (
    <h1>TabTeachers</h1>
  )
}

function TabStudents() {
  const { isPending } = useQuery({
    queryKey: ['wait-s'],
    queryFn: async () => await new Promise(r => setTimeout(r, 2000)),
  })

  if (isPending) return <AppLoader />

  return (
    <h1>TabStudents</h1>
  )
}*/