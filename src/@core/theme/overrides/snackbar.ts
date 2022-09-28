
import { Theme } from '@mui/material/styles'


import { Skin } from 'src/@core/layouts/types'

const Snackbar = (theme: Theme, skin: Skin) => {
  return {
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          ...(skin === 'bordered' && { boxShadow: 'none' }),
          ...(theme.palette.mode === 'light' ? ({
            background: theme.palette.common.white,
            color: theme.palette.common.black,
          }) : ({
            background: theme.palette.grey[100],
            color: theme.palette.common.white,
          }))
        }
      }
    }
  }
}

export default Snackbar
