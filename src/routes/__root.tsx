import { createRootRoute } from '@tanstack/react-router'
import AppHeader from "@layout/app-header.layout"
import AppNavbar from "@layout/app-navbar.layout"
import AppBody from '@layout/app-body.layout';
import ViewNotFound from "@view/not-found.view"
import AppBackground from '@layout/app-background.layout';

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <AppBackground />
        <AppHeader />
        <AppNavbar />
        <AppBody />
      </>
    )
  },
  notFoundComponent: () => <ViewNotFound />,
  wrapInSuspense: true,
})