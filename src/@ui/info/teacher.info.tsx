import { AtSign, Phone } from "lucide-react"
import { Group, Skeleton, Text } from "@mantine/core"
import { useState } from "react"

interface Props {
  teacher_id: number,
  teacher_name: string,
  teacher_email: string,
  teacher_phone: string,
  teacher_title: string,
  teacher_image: string,
}

export default function Info({ teacher_id, teacher_name, teacher_email, teacher_phone, teacher_title, teacher_image }: Props) {
  const [imageIsLoaded, _imageIsLoaded] = useState(false)

  return (
    <div className="flex flex-row" id={`teacher-${teacher_id}`}>
      <div className='w-[6rem] bg-transparent border-0 rounded-full'>
        <img
          className={`w-full aspect-square bg-white object-cover object-center rounded-full ${!imageIsLoaded && 'hidden'}`}
          src={`https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/${teacher_image}`}
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
        <Text fz="xs" tt="uppercase" fw={700} c="dimmed" truncate>
          {teacher_title}
        </Text>

        <Text fz="md" fw={500} truncate>
          {teacher_name}
        </Text>

        <Group wrap="nowrap" gap={10} mt={3}>
          <AtSign size={16} />
          <Text fz="xs" c="dimmed" truncate>
            {teacher_email}
          </Text>
        </Group>

        <Group wrap="nowrap" gap={10} mt={5}>
          <Phone size={16} />
          <Text fz="xs" c="dimmed" truncate>
            {teacher_phone}
          </Text>
        </Group>
      </div>
    </div>
  )
}