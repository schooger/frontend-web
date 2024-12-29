import { createRootRoute } from '@tanstack/react-router'
import AppBackground from '@layout/app-background.layout';
import AppHeader from "@layout/app-header.layout"
import AppNavbar from "@layout/app-navbar.layout"
import AppRight from '@layout/app-right.layout';
import AppBody from '@layout/app-body.layout';
import ViewNotFound from "@view/not-found.view"
//import FormAssistant from '@form/assistant.form'

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <AppBackground />
        <AppHeader />
        <AppNavbar />
        <AppRight />
        <AppBody />
      </>
    )
  },
  notFoundComponent: () => <ViewNotFound />,
  wrapInSuspense: true,
})