import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import AppHeader from "@layout/app-header.layout"
import AppNavbar from "@layout/app-navbar.layout"

export const Route = createRootRoute({
  component: () => (
    <>
      <img
        src="/background.svg"
        className="fixed top-0 left-0 w-full h-full z-[-1]"
        style={{ filter: 'blur(100px)' }}
      />

      <AppHeader />
      <AppNavbar />

      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})