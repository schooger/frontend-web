import { useState } from "react"
import { Button, Group, Menu, Paper, Text } from "@mantine/core"
import { EllipsisVertical, Plus } from "lucide-react"
import Planet from "@asset/planet.asset"
import FormClass from "@form/class.form"
import { Link } from "@tanstack/react-router"

interface Props {
  planet_id: number,
  planet_name: string,
  planet_color: string,
  grade_name: string,
}

export default function View({ planet_id, planet_name, planet_color, grade_name }: Props) {
  const [$new_classes, $_new_classes] = useState<{ id: number }[]>([])

  return (
    <div className="flex flex-col justify-start items-center w-full px-2 h-full">
      <div className="flex flex-col items-center w-[64rem] max-w-[90%] h-full">
        <div className="flex flex-row justify-start items-start gap-2 w-full mb-8">
          <div className="flex flex-row justify-start items-center gap-2 w-full">
            <Planet
              width={40}
              height={40}
              planet_color={planet_color}
            />
            <h1 className="text-left text-3xl font-bold capitalize">{planet_name} - {grade_name}</h1>
          </div>

          <Button
            variant="default"
            style={{ backgroundColor: planet_color, color: get_color(planet_name) }}
            className={`h-[2.8rem] rounded-full border-0`}
            onClick={() => { $_new_classes((prev) => [{ id: prev.length + 1 }, ...prev]) }}
          >
            <Plus size={28} strokeWidth={2.8} />
            <span className="ml-1 font-bold">CREATE</span>
          </Button>
        </div>

        <div className="flex flex-wrap justify-start w-full">
          {
            $new_classes.map(({ id }) => (
              <div className="w-1/3 px-4 mb-8" key={`create-class-${id}`}>
                <ClassBox action="create" class_id={id} class_name="" planet_id={planet_id} planet_name={planet_name} planet_color={planet_color} $_new_classes={$_new_classes} />
              </div>
            ))
          }

          {
            Array.from({ length: 3 }, (_, i) => (
              <div className="w-1/3 px-4 mb-8" key={`box-class-${i}`}>
                <ClassBox action="update" class_id={i} class_name="Class" planet_id={planet_id} planet_name={planet_name} planet_color={planet_color} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

interface PropsClassBox {
  action: 'create' | 'update',
  class_id: number,
  class_name: string,
  planet_id: number,
  planet_name: string,
  planet_color: string,
  $_new_classes?: React.Dispatch<React.SetStateAction<{ id: number }[]>>,
}

function ClassBox({ action, class_id, class_name, planet_id, planet_name, planet_color, $_new_classes }: PropsClassBox) {
  const [$show_form, $_show_form] = useState<boolean>(action === 'create' ? true : false)

  return (
    <div>
      {
        $show_form === false
          ? <CardClass class_name={class_name} planet_name={planet_name} planet_color={planet_color} $_show_form={$_show_form} />
          : <FormClass action={action} class_id={class_id} class_name={class_name} planet_id={planet_id} planet_name={planet_name} planet_color={planet_color} $_new_classes={$_new_classes} $_show_form={$_show_form} />
      }
    </div>
  )
}

interface PropsCardClass {
  class_name?: string,
  planet_name?: string,
  planet_color?: string,
  $_show_form: React.Dispatch<React.SetStateAction<boolean>>,
}

function CardClass({ class_name, planet_name, planet_color, $_show_form }: PropsCardClass) {
  return (
    <Paper radius="md" withBorder p="md" className="relative flex flex-col justify-center items-center w-full h-[18rem] overflow-hidden">
      <div className="absolute top-0 right-0 mt-2">
        <CardDropdown />
      </div>

      <Planet
        width={100}
        height={100}
        planet_color={planet_color}
      />

      <Text className="mt-4 text-xl font-semibold">{class_name}</Text>

      <Group mt="md" justify="center" gap={30}>
        <div>
          <Text ta="center" fz="md" fw={500}>8</Text>
          <Text ta="center" fz="sm" c="dimmed" lh={1}>Teachers</Text>
        </div>

        <div>
          <Text ta="center" fz="md" fw={500}>24</Text>
          <Text ta="center" fz="sm" c="dimmed" lh={1}>Students</Text>
        </div>
      </Group>

      <Button
        variant="filled"
        fullWidth
        className="mt-4 font-bold"
        style={{ backgroundColor: planet_color, color: get_color(planet_name) }}
        onClick={() => $_show_form(true)}
      >UPDATE</Button>
    </Paper>
  )
}

function CardDropdown() {
  return (
    <Menu shadow="md" width={155} position="left-start">
      <Menu.Target>
        <button className='bg-transparent border-0 rounded-full'>
          <EllipsisVertical />
        </button>
      </Menu.Target>

      <Menu.Dropdown className="font-semibold">
        <Menu.Item>
          <a role="button" className="text-[#444]" aria-label="update">update</a>
        </Menu.Item>
        <Menu.Item>
          <a role="button" className="text-red-500" aria-label="delete">delete</a>
        </Menu.Item>
        <Menu.Item>
          <Link to="students" className="text-[#444]" aria-label="view students">view students</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="teachers" className="text-[#444]" aria-label="view teachers">view teachers</Link>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

function get_color(planet_name: any): string {
  if (['hydro', 'iro'].includes(planet_name)) return 'black'
  return 'white'
}