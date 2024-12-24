import { useState } from "react"
import { Button, Group, Paper, Text } from "@mantine/core"
import { Plus } from "lucide-react"
import Planet from "@asset/planet.asset"
import FormClass from "@form/organization/class.form"

interface Props {
  grade_name: string,
  planet_name: string,
  planet_color: string,
}

export default function View({ grade_name, planet_name, planet_color }: Props) {
  const [$new_classes, $_new_classes] = useState<{ id: number }[]>([])

  return (
    <div className="flex flex-col justify-start items-center w-full px-2 h-full">
      <div className="flex flex-col items-center w-[64rem] max-w-[90%] h-full">
        <div className="flex flex-row justify-start items-start gap-2 w-full mb-8">
          <div className="flex flex-row justify-start items-center gap-2 w-full">
            <Planet
              width={40}
              height={40}
              planet_fill={planet_color}
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
            $new_classes.map(({ id }, i) => (
              <div className="w-1/3 px-4 mb-8" key={`create-class-${i}`}>
                <ClassBox action="create" id={id} planet_name={planet_name} planet_color={planet_color} $_new_classes={$_new_classes} />
              </div>
            ))
          }

          {
            Array.from({ length: 3 }, (_, i) => (
              <div className="w-1/3 px-4 mb-8" key={`box-class-${i}`}>
                <ClassBox name="Class" planet_name={planet_name} planet_color={planet_color} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

interface PropsClassBox {
  action?: string,
  id?: number,
  name?: string,
  planet_name: string,
  planet_color: string,
  $_new_classes?: React.Dispatch<React.SetStateAction<{ id: number }[]>>,
}

function ClassBox({ action, id, name, planet_name, planet_color, $_new_classes }: PropsClassBox) {
  const [$show_form, $_show_form] = useState<boolean>(action === 'create' ? true : false)

  return (
    <div>
      {
        $show_form === false
          ? <CardClass name={name} planet_name={planet_name} planet_color={planet_color} $_show_form={$_show_form} />
          : <FormClass action={action} id={id} name={name} planet_name={planet_name} planet_color={planet_color} $_new_classes={$_new_classes} $_show_form={$_show_form} />
      }
    </div>
  )
}

interface PropsCardClass {
  name?: string,
  planet_name?: string,
  planet_color?: string,
  $_show_form: React.Dispatch<React.SetStateAction<boolean>>,
}

function CardClass({ name, planet_name, planet_color, $_show_form }: PropsCardClass) {
  return (
    <Paper radius="md" withBorder p="md" className="flex flex-col justify-center items-center w-full h-[18rem] overflow-hidden">
      <Planet
        width={100}
        height={100}
        planet_fill={planet_color}
      />

      <Text className="mt-4 text-xl font-semibold">{name}</Text>

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

function get_color(planet_name: any): string {
  if (['argo', 'silvo', 'goldo'].includes(planet_name)) return 'black'
  return 'white'
}