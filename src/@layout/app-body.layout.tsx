import { Outlet, useMatchRoute } from '@tanstack/react-router'
import { Loader } from '@mantine/core';

export default function AppBody() {
  console.log('app-body')
  const matchRoute = useMatchRoute();
  const isPending = matchRoute({ pending: true });

  return (
    <>
      {isPending ? (
        <div className="flex justify-center flex-col items-center w-full py-8">
          <Loader color="#444" size="md" type="dots" />
        </div>
      ) : (
        <Outlet />
      )}
    </>
  )
}
