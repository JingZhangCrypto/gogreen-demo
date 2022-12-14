
import { ReactNode } from 'react'
import { deepmerge } from '@mui/utils'
import { Theme , ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'


import { Settings } from 'src/@core/context/settingsContext'
import themeConfig from 'src/configs/themeConfig'
import Direction from 'src/layouts/components/Direction'
import UserThemeOptions from 'src/layouts/UserThemeOptions'

import overrides from './overrides'
import typography from './typography'
import themeOptions from './ThemeOptions'
import GlobalStyling from './globalStyles'

interface Props {
  settings: Settings
  children: ReactNode
}

const ThemeComponent = (props: Props) => {
  // ** Props
  const { settings, children } = props

  // ** Merged ThemeOptions of Core and User
  const coreThemeConfig = themeOptions(settings)

  // ** Pass ThemeOptions to CreateTheme Function to create partial theme without component overrides
  let theme = createTheme(coreThemeConfig)

  // ** Deep Merge Component overrides of core and user
  const mergeComponentOverrides = (theme: Theme, settings: Settings) =>
    deepmerge({ ...overrides(theme, settings) }, UserThemeOptions()?.components)

  // ** Deep Merge Typography of core and user
  const mergeTypography = (theme: Theme) => deepmerge(typography(theme), UserThemeOptions()?.typography)

  // ** Continue theme creation and pass merged component overrides to CreateTheme function
  theme = createTheme(theme, {
    components: { ...mergeComponentOverrides(theme, settings) },
    typography: { ...mergeTypography(theme) }
  })

  // ** Set responsive font sizes to true
  if (themeConfig.responsiveFontSizes) {
    theme = responsiveFontSizes(theme)
  }

  return (
    <ThemeProvider theme={theme}>
      <Direction direction={settings.direction}>
        <CssBaseline />
        <GlobalStyles styles={() => GlobalStyling(theme, settings) as any} />
        {children}
      </Direction>
    </ThemeProvider>
  )
}

export default ThemeComponent
