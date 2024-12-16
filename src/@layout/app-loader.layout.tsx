import { Loader } from "@mantine/core"

export default function View() {
  return (
    <div className="flex justify-center flex-col items-center w-full py-8">
      <Loader color="#444" size="md" type="dots" />
    </div>
  )
}

/*
function Loader() {
  return (
    <div className="flex justify-center align-center w-full mt-8">
      <div className="w-[50%] inline-block align-top mt-1 ml-2">
        <Skeleton height={24} mt={12} radius="xl" />
        <Skeleton height={24} mt={12} width="90%" radius="xl" />
        <Skeleton height={24} mt={12} width="70%" radius="xl" />
        <Skeleton height={24} mt={12} width="90%" radius="xl" />
        <Skeleton height={24} mt={12} width="80%" radius="xl" />
        <Skeleton height={24} mt={12} width="50%" radius="xl" />
      </div>
    </div>
  )
}
*/