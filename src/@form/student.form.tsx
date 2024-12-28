import { Button, Input, Paper } from "@mantine/core"
import { useForm } from "@mantine/form"

interface PropsClassForm {
  action?: 'create' | 'update',
  student_id?: number | null,
  student_name?: string,
  planet_id?: number,
  close: () => void,
}

export default function Form({ action, student_id, student_name, planet_id, close }: PropsClassForm) {
  console.log('student.form')
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      student_id: student_id,
      student_name: student_name,
    },
  });

  const submit = (values: any) => {
    console.log(action)
    console.log(values)
  }

  return (
    <form
      onSubmit={form.onSubmit((values) => submit(values))}
      className="w-full"
    >
      <Paper radius="md" p="md" className="flex flex-col justify-between items-center gap-4 w-full bg-transparent overflow-hidden">

        <div className="flex flex-col gap-2 w-full">
          <Input
            {...form.getInputProps('student_name')}
            key={form.key('student_name')}
            variant="default"
            size="md"
            radius="sm"
            placeholder="class name"
          />

          <div className="flex justify-between items-center gap-2 w-full">
            <Button
              fullWidth
              type="button"
              variant="outline"
              className="mt-4 font-extrabold border-2"
              onClick={close}
            >Cancel</Button>

            <Button
              fullWidth
              type="submit"
              variant="filled"
              className="mt-4 font-bold"
            >SAVE</Button>
          </div>
        </div>
      </Paper>
    </form>
  )
}