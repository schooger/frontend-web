import Planet from "@asset/planet.asset"
import { useQuery } from "@tanstack/react-query"
import { find_one } from "@api/classes/get.api"
import planets from "@lib/planets.lib"
import { Users, GraduationCap, Info } from "lucide-react"
import AppLoader from "@layout/app-loader.layout"
import { Link } from "@tanstack/react-router"
import CardClass from "@ui/card/class.card"
import CardTeacher from "@ui/card/teacher.card"
import CardStudent from "@ui/card/student.card"

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

  const { planet_id = 1, planet_name = '', planet_color = '', level_name = '' } = planets.find(planet => planet.planet_id === data?.planet_id) ?? {}

  return (
    <div className="flex flex-col justify-start items-center w-full px-2 h-full">
      <div className="flex flex-col items-center w-[48rem] max-w-[90%] h-full">
        <div className="flex flex-row justify-start items-start gap-2 w-full mb-8">
          <div className="flex flex-row justify-start items-center gap-2 w-full">
            <Planet
              width={40}
              height={40}
              planet_color={planet_color}
            />
            <h1 className="text-left text-2xl font-bold capitalize">{data?.class_name} - {planet_name} ({level_name})</h1>
          </div>

        </div>

        <div className="w-full">
          <div className="flex flex-row justify-between gap-1 w-full text-gray-700 text-md font-semibold">
            <Link className="w-full" to={`/classes/${class_id}`}>
              <div className="flex justify-center items-center gap-1 w-full py-2 border-b-2 border-current" style={{ color: active_tab === 'infos' ? planet_color : 'currentcolor' }}>
                <Info />
                <span>infos</span>
              </div>
            </Link>
            <Link className="w-full" to={`/classes/${class_id}/teachers`}>
              <div className="flex justify-center items-center gap-1 w-full py-2 border-b-2 border-current" style={{ color: active_tab === 'teachers' ? planet_color : 'currentcolor' }}>
                <Users />
                <span>teachers</span>
              </div>
            </Link>
            <Link className="w-full" to={`/classes/${class_id}/students`}>
              <div className="flex justify-center items-center gap-1 w-full py-2 border-b-2 border-current" style={{ color: active_tab === 'students' ? planet_color : 'currentcolor' }}>
                <GraduationCap />
                <span>students</span>
              </div>
            </Link>
          </div>

          <div className="flex justify-center my-4">
            {
              active_tab === 'infos' && <CardClass class_id={class_id} class_name="Class" planet_id={planet_id} />
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

function TabTeachers() {
  const { isPending, data } = useQuery({
    queryKey: ['wait-t'],
    queryFn: async () => {
      await new Promise(r => setTimeout(r, 2000))
      return [
        { teacher_id: 1, teacher_name: 'Oualid Ouarrho', teacher_email: 'ouarrho@schooger.com', teacher_phone: '+212 612 34 56 78', teacher_title: 'Maths', teacher_image: 'avatar-2.png' },
        { teacher_id: 2, teacher_name: 'Nora Hakim', teacher_email: 'nora@schooger.com', teacher_phone: '+212 612 34 56 78', teacher_title: 'Art & Music', teacher_image: 'avatar-8.png' },
        { teacher_id: 3, teacher_name: 'Abir Hakim', teacher_email: 'abir@schooger.com', teacher_phone: '+212 612 34 56 78', teacher_title: 'English', teacher_image: 'avatar-6.png' },
        { teacher_id: 4, teacher_name: 'Dodo Hakim', teacher_email: 'dodo@schooger.com', teacher_phone: '+212 612 34 56 78', teacher_title: 'Arabic', teacher_image: 'avatar-7.png' },
      ]
    },
  })

  if (isPending) return <AppLoader />

  return (
    <div className="flex flex-wrap justify-start w-full">
      {
      data?.map(({ teacher_id, teacher_name, teacher_email, teacher_phone, teacher_title, teacher_image }) => (
        <div className="w-1/2 mb-8 pr-2" key={`teacher-${teacher_id}`}>
          <CardTeacher 
            teacher_id={teacher_id} 
            teacher_name={teacher_name} 
            teacher_email={teacher_email} 
            teacher_phone={teacher_phone} 
            teacher_title={teacher_title} 
            teacher_image={teacher_image} 
          />
        </div>
      ))}
    </div>
  )
}

function TabStudents() {
  const { isPending, data } = useQuery({
    queryKey: ['wait-s'],
    queryFn: async () => {
      await new Promise(r => setTimeout(r, 2000))
      return [
        { student_id: 1, student_name: 'Oualid Ouarrho', student_email: 'ouarrho@schooger.com', student_phone: '+212 612 34 56 78', student_image: 'avatar-2.png', planet_id: 6, class_name: 'Class A', },
        { student_id: 2, student_name: 'Nora Hakim', student_email: 'nora@schooger.com', student_phone: '+212 612 34 56 78', student_image: 'avatar-8.png', planet_id: 5, class_name: 'Class A', },
        { student_id: 3, student_name: 'Abir Hakim', student_email: 'abir@schooger.com', student_phone: '+212 612 34 56 78', student_image: 'avatar-6.png', planet_id: 3, class_name: 'Class A', },
        { student_id: 4, student_name: 'Dodo Hakim', student_email: 'dodo@schooger.com', student_phone: '+212 612 34 56 78', student_image: 'avatar-7.png', planet_id: 1, class_name: 'Class A', },
      ]
    },
  })

  if (isPending) return <AppLoader />

  return (
    <div className="flex flex-wrap justify-start w-full">
      {
      data?.map(({ student_id, student_name, student_email, student_phone, student_image, planet_id, class_name }) => (
        <div className="w-1/2 mb-8 pr-2" key={`student-${student_id}`}>
          <CardStudent 
            student_id={student_id} 
            student_name={student_name} 
            student_email={student_email} 
            student_phone={student_phone} 
            student_image={student_image} 
            planet_id={planet_id} 
            class_name={class_name} 
          />
        </div>
      ))}
    </div>
  )
}