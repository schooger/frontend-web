import { useState } from "react";
import { Badge, Button, Textarea } from "@mantine/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function App() {
  const [value, setValue] = useState('');
  const [isFocus, _isFocus] = useState('');
  const maxLength = 8;
  const remainingLength = maxLength - value.length
  const errorMessage = remainingLength < 0 ? true : false;
  console.log('app')
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <div className="text-[5rem] font-bold">
        <span className="text-amber-400">schoo</span>
        <span className="text-[#1a73e8]">ger</span>
      </div>
      <div className="relative w-[40rem] h-auto">
        <Textarea
          variant="default"
          size="xl"
          radius="lg"
          placeholder="speak with schooger..."
          onChange={(event) => setValue(event.target.value)}
          onFocus={() => _isFocus(true)}
          onBlur={() => _isFocus(false)}
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
            variant="filled"
            radius="xl"
            color="#1a73e8"
            classNames={{
              root: `w-[2rem_!important] h-[2rem_!important] p-[0rem_!important]`,
            }}
          >
            <FontAwesomeIcon icon={faArrowUp} className="text-xl font-bold" />
          </Button>
        </div>
      </div>
    </div>
  )
}