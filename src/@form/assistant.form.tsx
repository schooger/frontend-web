import { useEffect } from "react";
import { Alert, Button, Skeleton, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import { ArrowUp, ChevronsDown, CircleAlert } from 'lucide-react';
import { useQuery } from "@tanstack/react-query";
import api from '@api/ai/assistant.api'

export default function Form() {
  const { isPending, isError, data: $lang } = useQuery<{ [key: string]: any }, Error>({
    queryKey: ['lang/form/ai/assistant'],
    queryFn: async () => (await import(`@lang/${localStorage.getItem('lang') || 'en'}/form/ai/assistant.lang.ts`)).default,
  })

  const { fetchStatus: submitFormStatus, refetch: submitForm } = useQuery({
    queryKey: ['api/ai/assistant'],
    queryFn: async () => await api(),
    enabled: false,
  });

  const submit = async (values: any) => {
    console.log(values)
    const { data } = await submitForm()

    if (data?.actions) {
      const actions = data?.actions
      console.table(actions)

      /*for (const action of actions) {
        const { name, target, value } = action

        if (name === 'navigate') await _navigate(target)
        else if (name === 'click') await _click(target)
        else if (name === 'write') await _write(target, value)
      }*/
    }
    console.log('done')
  }

  const form = useForm({
    mode: 'controlled',
    initialValues: {
      userInput: '',
    },
  });
  const length = form.getValues().userInput.length;
  const maxLength = 2;
  const remainingLength = maxLength - length
  const errorMessage = remainingLength < 0 ? true : false;

  const $circle = document.getElementById('circle')
  useEffect(() => {
    if ($circle) {
      if (submitFormStatus === 'idle') $circle.style.fill = 'transparent'
      if (submitFormStatus === 'fetching') $circle.style.fill = '#fbbf24'
    }
  }, [submitFormStatus])

  return (
    <>
      {
        (isPending) ? <Skeleton height="7rem" radius="lg" />
          : (isError) ? <h1 className="text-md text-red-500 mt-4">something went wrong!</h1>
            :
            <div className="fixed z-50 left-0 right-0 m-auto bottom-0 w-[64rem] max-w-[90%] transition-[max-height] duration-500" id="assistant-form" style={{ maxHeight: '28rem' }}>
              <div className="relative h-auto mb-2 mx-[12.5rem]">
                <a role="button"
                  aria-label='hide assistant'
                  className="hidden absolute right-[-2.4rem] top-3 z-10"
                  onClick={hideAssistant}
                >
                  <ChevronsDown size={40} color="#888" />
                </a>

                <div className="absolute left-0 top-[-7.25rem] z-10">
                  {
                    (remainingLength < 0) &&
                    <Alert variant="light" color="red" radius="lg" title="Character Limit Exceeded" icon={<CircleAlert />}>
                      You have entered more than the allowed characters, maximum character is 200
                    </Alert>
                  }
                </div>

                <form onSubmit={form.onSubmit((values) => submit(values))}>
                  <Textarea
                    {...form.getInputProps('userInput')}
                    key={form.key('userInput')}
                    variant="default"
                    size="xl"
                    radius="lg"
                    placeholder={$lang?.how_can_i_assist_you}
                    error={errorMessage}
                    autosize
                    maxRows={8}
                    classNames={{
                      input: 'pr-[3rem]'
                    }}
                    id="assistant-form-textarea"
                  />

                  <div className="absolute right-3 bottom-[.85rem]">
                    <Button
                      type="submit"
                      variant="filled"
                      radius="xl"
                      color={(remainingLength < 0) ? 'red' : '#1a73e8'}
                      classNames={{
                        root: `w-[2rem_!important] h-[2rem_!important] p-[0rem_!important] ${(remainingLength < 0) ? 'bg-[#fa5252_!important] text-[#fff_!important]' : '#1a73e8 text-[#fff_!important]'}`,
                      }}
                      loading={submitFormStatus === 'fetching'}
                      disabled={(length > 0 && remainingLength >= 0) ? false : true}
                      aria-label='ask schooger'
                    >
                      <ArrowUp strokeWidth={3.5} />
                    </Button>
                  </div>
                </form>
              </div>
            </div>
      }
    </>
  )
}

const hideAssistant = (e: any) => {
  e.preventDefault()
  const $assistantForm = document.getElementById('assistant-form')
  if ($assistantForm) $assistantForm.style.maxHeight = '0rem'
}