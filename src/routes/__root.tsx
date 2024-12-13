import { createRootRoute, Outlet, useMatchRoute } from '@tanstack/react-router'
import AppHeader from "@layout/app-header.layout"
import AppNavbar from "@layout/app-navbar.layout"
import { Loader } from '@mantine/core';

export const Route = createRootRoute({
  component: () => {
    const matchRoute = useMatchRoute();
    const isPending = matchRoute({ pending: true });

    return (
      <>
        <img
          src="/background.svg"
          className="fixed top-0 left-0 w-full h-full z-[-1]"
          style={{ filter: 'blur(100px)' }}
        />

        <AppHeader />
        <AppNavbar />

        {isPending ? (
          <div className="flex justify-center flex-col items-center w-full py-8">
            <Loader color="#444" size="md" type="dots" />
          </div>
        ) : (
          <Outlet />
        )}

      </>
    )
  },
  wrapInSuspense: true,
})