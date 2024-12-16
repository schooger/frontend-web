import { createRootRoute } from '@tanstack/react-router'
import AppHeader from "@layout/app-header.layout"
import AppNavbar from "@layout/app-navbar.layout"
import AppBody from '@layout/app-body.layout';
import ViewNotFound from "@view/not-found.view"

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <img
          src="/background.svg"
          className="fixed top-0 left-0 w-full h-full z-[-1]"
          style={{ filter: 'blur(100px)' }}
        />

        <AppHeader />
        <AppNavbar />
        <AppBody />
      </>
    )
  },
  notFoundComponent: () => <ViewNotFound />,
  wrapInSuspense: true,
})