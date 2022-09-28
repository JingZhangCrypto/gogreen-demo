import { Fragment, SyntheticEvent, useState } from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import Translate from 'mdi-material-ui/Translate'
import { useTranslation } from 'react-i18next'

import { Settings } from 'src/@core/context/settingsContext'
import { Lang, LangEnum } from 'src/utils/i18n'

interface Props {
  settings: Settings
  saveSettings: (values: Settings) => void
}

const LanguageDropdown = ({ settings, saveSettings }: Props) => {
  // ** State
  const [anchorEl, setAnchorEl] = useState<any>(null)

  // ** Hook
  const { i18n } = useTranslation()

  // ** Vars
  const { layout, direction } = settings

  const handleLangDropdownOpen = (event: SyntheticEvent) => {
    setAnchorEl(event.currentTarget)
  }

  const handleLangDropdownClose = () => {
    setAnchorEl(null)
  }

  const handleLangItemClick = (lang: Lang) => {
    i18n.changeLanguage(lang)
    handleLangDropdownClose()
  }

  return (
    <Fragment>
      <IconButton
        color="inherit"
        aria-haspopup="true"
        aria-controls="customized-menu"
        onClick={handleLangDropdownOpen}
        sx={layout === 'vertical' ? { mr: 0.75 } : { mx: 0.75 }}
      >
        <Translate />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleLangDropdownClose}
        sx={{ '& .MuiMenu-paper': { mt: 4, minWidth: 130 } }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: direction === 'ltr' ? 'right' : 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: direction === 'ltr' ? 'right' : 'left',
        }}
      >
        <MenuItem
          sx={{ py: 2 }}
          selected={i18n.language === LangEnum.En}
          onClick={() => {
            handleLangItemClick(LangEnum.En)
            saveSettings({ ...settings, direction: 'ltr' })
          }}
        >
          English
        </MenuItem>
      </Menu>
    </Fragment>
  )
}

export default LanguageDropdown
