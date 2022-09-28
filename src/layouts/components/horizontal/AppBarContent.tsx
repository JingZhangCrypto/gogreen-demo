import Box from '@mui/material/Box'

import { Settings } from 'src/@core/context/settingsContext'
import ModeToggler from 'src/@core/layouts/components/shared-components/ModeToggler'
import UserDropdown from 'src/layouts/components/UserDropdown'
import LanguageDropdown from 'src/layouts/components/LanguageDropdown'

// import NetworkSelect from '../NetworkSelect'

interface Props {
  settings: Settings
  saveSettings: (values: Settings) => void
}
const AppBarContent = (props: Props) => {
  // ** Props
  const { settings, saveSettings } = props

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {/* <NetworkSelect /> */}
      <LanguageDropdown settings={settings} saveSettings={saveSettings} />
      <ModeToggler settings={settings} saveSettings={saveSettings} />
      <UserDropdown />
    </Box>
  )
}

export default AppBarContent
