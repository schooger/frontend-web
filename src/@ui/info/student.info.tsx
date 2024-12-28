import { AtSign, Phone } from "lucide-react"
import { Group, Skeleton, Text } from "@mantine/core"
import { useState } from "react"
import planets from "@lib/planets.lib"

interface Props {
  student_id: number,
  student_name: string,
  student_email: string,
  student_phone: string,
  student_image: string,
  planet_id: number,
  class_name: string,
}

export default function Info({ student_id, student_name, student_email, student_phone, student_image, planet_id, class_name }: Props) {
  const [imageIsLoaded, _imageIsLoaded] = useState(false)

  const { planet_name = '', planet_color = '' } = planets.find(planet => planet.planet_id === planet_id) ?? {}

  return (
    <div className="flex flex-row" id={`student-${student_id}`}>
      <div className='w-[6rem] bg-transparent border-0 rounded-full'>
        <img
          className={`w-full aspect-square bg-white object-cover object-center rounded-full ${!imageIsLoaded && 'hidden'}`}
          src={`https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/${student_image}`}
          alt="image"
          onLoad={() => _imageIsLoaded(true)}
        />
        <Skeleton
          circle
          mb="xl"
          classNames={{
            root: `w-full aspect-square ${imageIsLoaded ? 'hidden' : 'inline-block'} mb-[0_!important]`
          }}
        />
      </div>

      <div className="pl-2" style={{ width: 'calc(100% - 6rem)' }}>
        <Text fz="xs" tt="uppercase" fw={700} c={planet_color} truncate>
          {planet_name} | {class_name}
        </Text>

        <Text fz="md" fw={500} truncate>
          {student_name}
        </Text>

        <Group wrap="nowrap" gap={10} mt={3}>
          <AtSign size={16} />
          <Text fz="xs" c="dimmed" truncate>
            {student_email}
          </Text>
        </Group>

        <Group wrap="nowrap" gap={10} mt={5}>
          <Phone size={16} />
          <Text fz="xs" c="dimmed" truncate>
            {student_phone}
          </Text>
        </Group>
      </div>
    </div>
  )
}