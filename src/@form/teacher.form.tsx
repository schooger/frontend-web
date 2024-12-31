import { Button, Input, Paper } from "@mantine/core"
import { useForm } from "@mantine/form"
import { AtSign, Phone } from "lucide-react";

interface PropsClassForm {
  action?: 'create' | 'update',
  teacher_id?: number | null,
  teacher_first_name?: string,
  teacher_last_name?: string,
  teacher_email?: string,
  teacher_phone?: string,
  teacher_title?: string,
  teacher_image?: string,
  close: () => void,
}

export default function Form({ action, teacher_id, teacher_first_name, teacher_last_name, teacher_email, teacher_phone, teacher_title, teacher_image, close }: PropsClassForm) {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      teacher_id: teacher_id,
      teacher_first_name: teacher_first_name,
      teacher_last_name: teacher_last_name,
      teacher_email: teacher_email,
      teacher_phone: teacher_phone,
      teacher_title: teacher_title,
      teacher_image: teacher_image,
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
      <div className="flex flex-col justify-between items-center w-full px-4 pb-2 bg-transparent overflow-hidden">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-row gap-2">
            <Input.Wrapper label="first name">
              <Input
                {...form.getInputProps('teacher_first_name')}
                key={form.key('teacher_first_name')}
                variant="default"
                size="md"
                radius="sm"
                placeholder="first name"
              />
            </Input.Wrapper>

            <Input.Wrapper label="last name">
              <Input
                {...form.getInputProps('teacher_last_name')}
                key={form.key('teacher_last_name')}
                variant="default"
                size="md"
                radius="sm"
                placeholder="last name"
              />
            </Input.Wrapper>
          </div>

          <Input.Wrapper label="email">
            <Input
              {...form.getInputProps('teacher_email')}
              key={form.key('teacher_email')}
              variant="default"
              size="md"
              radius="sm"
              placeholder="email"
              leftSection={<AtSign size={16} />}
            />
          </Input.Wrapper>

          <Input.Wrapper label="phone number">
            <Input
              {...form.getInputProps('teacher_phone')}
              key={form.key('teacher_phone')}
              variant="default"
              size="md"
              radius="sm"
              placeholder="phone"
              leftSection={<Phone size={16} />}
              
            />
          </Input.Wrapper>

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
      </div>
    </form>
  )
}

// add modules and classes