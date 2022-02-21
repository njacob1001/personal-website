import { FC } from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import { store, persistor } from 'platform/redux'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyled } from 'platform/styled-components'
import { PersistGate } from 'redux-persist/integration/react'
import { Router } from 'core/Router'
import 'platform/i18n'
import 'platform/axios'

const queryClient = new QueryClient()

type ThemeInterface = typeof theme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends ThemeInterface {}
}

const App: FC = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyled />
          <Router />
        </ThemeProvider>
      </QueryClientProvider>
    </PersistGate>
  </Provider>
)
export default App
