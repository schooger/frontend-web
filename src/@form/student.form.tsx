import planets from "@lib/planets.lib";
import { Button, Input, Select } from "@mantine/core"
import { useForm } from "@mantine/form"
import { AtSign, Phone } from "lucide-react"
import Planet from "@asset/planet.asset"
import { useState } from "react"

interface PropsClassForm {
  action?: 'create' | 'update',
  student_id?: number | null,
  student_first_name?: string,
  student_last_name?: string,
  student_email?: string,
  student_phone?: string,
  planet_id?: number,
  close: () => void,
}

export default function Form({ action, student_id, student_first_name, student_last_name, student_email, student_phone, planet_id, close }: PropsClassForm) {
  console.log('student.form')
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      student_id: student_id,
      student_first_name: student_first_name,
      student_last_name: student_last_name,
      student_email: student_email,
      student_phone: student_phone,
    },
  });

  const submit = (values: any) => {
    console.log(action)
    console.log(values)
  }

  const { planet_name = '', planet_color = '', level_name } = planets.find(planet => planet.planet_id === planet_id) ?? {}

  const [$planet, $_planet] = useState({ planet_name, planet_color })

  const change_planet = (value: string | null) => {
    if (value) {
      const { planet_name = '', planet_color = '' } = planets.find(planet => planet.planet_id === parseInt(value)) ?? {}
      $_planet({ planet_name, planet_color })
    }
  }

  return (
    <form
      onSubmit={form.onSubmit((values) => submit(values))}
      className="w-full"
    >
      <div className="flex flex-col justify-between items-center w-full px-4 pb-2 bg-transparent overflow-hidden">
        <Planet
          width={80}
          height={80}
          planet_color={$planet.planet_color}
        />

        <p className="mb-4 text-lg font-bold">{$planet.planet_name}</p>

        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-row gap-2">
            <Input.Wrapper label="first name">
              <Input
                {...form.getInputProps('student_first_name')}
                key={form.key('student_first_name')}
                variant="default"
                size="md"
                radius="sm"
                placeholder="first name"
              />
            </Input.Wrapper>

            <Input.Wrapper label="last name">
              <Input
                {...form.getInputProps('student_last_name')}
                key={form.key('student_last_name')}
                variant="default"
                size="md"
                radius="sm"
                placeholder="last name"
              />
            </Input.Wrapper>
          </div>

          <Input.Wrapper label="email">
            <Input
              {...form.getInputProps('student_email')}
              key={form.key('student_email')}
              variant="default"
              size="md"
              radius="sm"
              placeholder="email"
              leftSection={<AtSign size={16} />}
            />
          </Input.Wrapper>

          <Input.Wrapper label="phone number">
            <Input
              {...form.getInputProps('student_phone')}
              key={form.key('student_phone')}
              variant="default"
              size="md"
              radius="sm"
              placeholder="phone number"
              leftSection={<Phone size={16} />}

            />
          </Input.Wrapper>

          <div className="flex flex-row gap-2 my-4">
            <Select
              variant="default"
              size="md"
              radius="sm"
              placeholder="planet name"
              label="level"
              data={
                planets.map(planet => ({
                  label: planet.level_name,
                  value: planet.planet_id.toString(),
                }))
              }
              classNames={{
                label: 'text-sm',
              }}
              defaultValue={planet_id?.toString()}
              onChange={change_planet}
              allowDeselect={false}
              leftSection={<Planet width={24} height={24} planet_color={$planet.planet_color} />}
              leftSectionPointerEvents="none"
              searchable
            />

            <Select
              variant="default"
              size="md"
              radius="sm"
              placeholder="class name"
              label="class name"
              classNames={{
                label: 'text-sm',
              }}
              data={
                planets.map(planet => ({
                  label: planet.level_name,
                  value: planet.planet_id.toString(),
                }))
              }
              searchable
            />
          </div>

          <div className="flex justify-between items-center gap-2 w-full">
            <Button
              fullWidth
              type="button"
              variant="outline"
              className="mt-4 font-extrabold border-2"
              style={{ borderColor: $planet.planet_color, color: $planet.planet_color }}
              onClick={close}
            >Cancel</Button>

            <Button
              fullWidth
              type="submit"
              variant="filled"
              style={{ backgroundColor: $planet.planet_color }}
              className="mt-4 text-white font-bold"
            >SAVE</Button>
          </div>
        </div>
      </div>
    </form>
  )
}