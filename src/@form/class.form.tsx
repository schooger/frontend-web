import { Button, Input, Paper, Select } from "@mantine/core"
import { useForm } from "@mantine/form"
import Planet from "@asset/planet.asset"
import planets from "@lib/planets.lib";
import { Languages } from "lucide-react";
import { useState } from "react";

interface PropsClassForm {
  action?: 'create' | 'update',
  class_id?: number | null,
  class_name?: string,
  planet_id?: number,
  close: () => void,
}

export default function Form({ action, class_id, class_name, planet_id, close }: PropsClassForm) {
  console.log('class.form')
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      class_id: class_id,
      class_name: class_name,
      planet_id: planet_id?.toString(),
    },
  });

  const submit = (values: any) => {
    console.log(action)
    console.log(values)
  }

  const { planet_name = '', planet_color = '' } = planets.find(planet => planet.planet_id === planet_id) ?? {}

  const [$planet, $_planet] = useState({ planet_name, planet_color })

  const change_planet = (value: string | null) => {
    if (value) {
      const { planet_name = '', planet_color = '' } = planets.find(planet => planet.planet_id === parseInt(value)) ?? {}
      form.setFieldValue('planet_id', value)
      $_planet({ planet_name, planet_color})
    }
  }

  return (
    <form
      onSubmit={form.onSubmit((values) => submit(values))}
      className="w-full"
    >
      <Paper radius="md" p="md" className="flex flex-col justify-between items-center gap-4 w-full bg-transparent overflow-hidden">
        <Planet
          width={100}
          height={100}
          planet_color={$planet.planet_color}
        />

        <p className="text-lg font-bold">{$planet.planet_name}</p>

        <div className="flex flex-col gap-2 w-full">
          <Input
            {...form.getInputProps('class_name')}
            key={form.key('class_name')}
            variant="default"
            size="md"
            radius="sm"
            placeholder="class name"
          />

          <Select
            variant="default"
            size="md"
            radius="sm"
            placeholder="planet"
            data={
              planets.map(planet => ({
                label: planet.level_name,
                value: planet.planet_id.toString(),
              }))
            }
            defaultValue={planet_id?.toString()}
            onChange={change_planet}
            allowDeselect={false}
            leftSection={<Languages color="#444" size={20} />}
            leftSectionPointerEvents="none"
          />

          <div className="flex justify-between items-center gap-2 w-full">
            <Button
              fullWidth
              type="button"
              variant="outline"
              className="mt-4 font-extrabold border-2"
              style={{ borderColor: $planet.planet_color, color: ['netras'].includes($planet.planet_name) ? 'black' : $planet.planet_color }}
              onClick={close}
            >Cancel</Button>

            <Button
              fullWidth
              type="submit"
              variant="filled"
              style={{ backgroundColor: $planet.planet_color, color: get_color($planet.planet_name) }}
              className="mt-4 font-bold"
            >SAVE</Button>
          </div>
        </div>
      </Paper>
    </form>
  )
}

function get_color(planet_name: any): string {
  if (['netras'].includes(planet_name)) return 'black'
  return 'white'
}