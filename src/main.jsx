import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core'
import App from './app'

ReactDOM.createRoot(document.getElementById('root')).render(
  <MantineProvider defaultColorScheme="light">
    <App />
  </MantineProvider>
)
