import { Button, Input, Paper } from "@mantine/core"
import { useForm } from "@mantine/form"

interface PropsClassForm {
  action?: 'create' | 'update',
  teacher_id?: number | null,
  teacher_name?: string,
  teacher_title?: string,
  close: () => void,
}

export default function Form({ action, teacher_id, teacher_name, teacher_title, close }: PropsClassForm) {
  console.log('teacher.form')
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      teacher_id: teacher_id,
      teacher_name: teacher_name,
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
            {...form.getInputProps('teacher_name')}
            key={form.key('teacher_name')}
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