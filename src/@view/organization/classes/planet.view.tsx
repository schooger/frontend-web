import { Avatar, Button, Group, Input, Paper, SimpleGrid, Text } from "@mantine/core"
import { Plus, Shapes } from "lucide-react"
import Planet from "@asset/planet.asset"
import { useState } from "react"
import { useForm } from "@mantine/form"

interface Props {
  grade_name: string,
  planet_name: string,
  planet_color: string,
}

export default function View({ grade_name, planet_name, planet_color }: Props) {
  const [arr, _arr] = useState<{ id: number }[]>([])

  return (
    <div className="flex flex-col justify-start items-center w-full px-2 h-full">
      <div className="flex flex-col items-center w-[64rem] max-w-[90%] h-full">
        <ViewHeader
          grade_name={grade_name}
          planet_name={planet_name}
          planet_color={planet_color}
          _arr={_arr}
        />

        <SimpleGrid className="w-full" cols={3} spacing="xl">
          {arr.map(({ id }) => (
            <div key={`create-class-${id}`}>
              <ClassBox action="create" id={id} _arr={_arr} />
            </div>
          ))}
          <ClassBox name="Class A" />
          <ClassBox name="Class B" />
          <ClassBox name="Class C" />
        </SimpleGrid>
      </div>
    </div>
  )
}
// continune here....................
function ClassCard() {}

function ClassForm() {}

function ClassBox({ action, id, name, _arr }: { action?: string, id?: number, name?: string, _arr?: React.Dispatch<React.SetStateAction<{ id: number }[]>> }) {
  const [show_form, _show_form] = useState(action === 'create' ? true : false)
  console.log('class.card')

  const form = useForm({
    mode: 'controlled',
    initialValues: {
      name: name,
    },
  });

  const submit = (values: any) => {
    console.log(values)
  }

  const remove = () => {
    if (_arr) _arr((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <>
      {
        show_form === false
          ?
          <Paper radius="md" withBorder p="md" className="flex flex-col justify-center items-center h-[18rem] overflow-hidden">
            <Avatar
              src=""
              size={100}
              radius={100}
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
              variant="light"
              fullWidth
              className="mt-4 font-bold"
              onClick={() => _show_form(true)}
            >UPDATE</Button>
          </Paper>
          :
          <form
            onSubmit={form.onSubmit((values) => submit(values))}
            className="w-full"
          >
            <Paper radius="md" p="md" className="flex flex-col justify-between items-center gap-4 w-full h-[18rem] bg-transparent overflow-hidden">
              <Shapes size={120} />

              <div className="w-full">
                <Input
                  {...form.getInputProps('name')}
                  key={form.key('name')}
                  variant="default"
                  size="md"
                  radius="sm"
                  placeholder="class name"
                />

                <div className="flex justify-between items-center gap-2 w-full">
                  {
                    action === 'create'
                      ? <Button fullWidth type="button" variant="outline" className="mt-4 font-bold border-red-600 text-red-600 hover:bg-red-50 hover:text-red-700" onClick={remove}>Cancel</Button>
                      : <Button fullWidth type="button" variant="outline" className="mt-4 font-bold border-red-600 text-red-600 hover:bg-red-50 hover:text-red-700" onClick={() => _show_form(false)}>Cancel</Button>
                  }
                  <Button fullWidth type="submit" variant="filled" className="mt-4 font-bold">SAVE</Button>
                </div>
              </div>
            </Paper>
          </form>

      }
    </>
  )
}

interface PropsViewHeader {
  grade_name: string,
  planet_name: string,
  planet_color: string,
  _arr: React.Dispatch<React.SetStateAction<{ id: number }[]>>,
}

function ViewHeader({ grade_name, planet_name, planet_color, _arr }: PropsViewHeader) {
  return (
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
        className="h-[2.8rem] rounded-full border-0 bg-blue-500 hover:bg-blue-700 text-white hover:text-white text-md"
        onClick={() => { _arr((prev) => [{ id: prev.length + 1 }, ...prev]) }}
      >
        <Plus size={40} strokeWidth={2.4} />
        <span className="ml-1 font-bold">CREATE</span>
      </Button>
    </div>
  )
}