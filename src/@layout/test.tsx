import { useState } from "react";
import { Badge, Button, Textarea } from "@mantine/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useForm } from "@mantine/form";

export default function App() {
  const form = useForm({
    mode: 'controlled',
    initialValues: {
      userInput: '',
    },
  });
  const [isFocus, _isFocus] = useState(false);

  const length = form.getValues().userInput.length;
  const maxLength = 1000;
  const remainingLength = maxLength - length
  const errorMessage = remainingLength < 0 ? true : false;

  console.log('app', remainingLength)

  return (
    <div className="flex justify-center items-center flex-col h-screen pb-[12rem]">

      <div className="text-[2.4rem] font-bold mb-4">
        <span className="text-[#444]">ask schooger</span>
      </div>
      <div className="relative w-[90%] max-w-[40rem] h-auto">
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Textarea
            {...form.getInputProps('userInput')}
            key={form.key('userInput')}
            onFocus={() => _isFocus(true)}
            onBlur={() => _isFocus(false)}

            variant="default"
            size="xl"
            radius="lg"
            placeholder="chat with schooger..."
            error={errorMessage}
            autosize
            maxRows={8}
            classNames={{
              input: 'pb-[4rem_!important]',
            }}
          />

          <div className="absolute left-4 bottom-2">
            {
              (isFocus || remainingLength < 0) &&
              <Badge variant="light" color={remainingLength < 0 ? 'red' : remainingLength < 4 ? 'yellow' : 'blue'}>
                {
                  remainingLength
                }
              </Badge>
            }
          </div>

          <div className="absolute right-2 bottom-2">
            <Button
              type="submit"
              variant="filled"
              radius="xl"
              color={(remainingLength < 0) ? 'red' : '#1a73e8'}
              classNames={{
                root: `w-[2rem_!important] h-[2rem_!important] p-[0rem_!important] ${(remainingLength < 0) ? 'bg-[#fa5252_!important] text-[#fff_!important]' : '#1a73e8 text-[#fff_!important]'}`,
              }}
              disabled={(length > 0 && remainingLength >= 0) ? false : true}
            >
              <FontAwesomeIcon icon={faArrowUp} className="text-xl font-bold" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}