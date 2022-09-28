import { Theme } from '@mui/material/styles'

import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'
import themeConfig from 'src/configs/themeConfig'

const Button = (theme: Theme) => {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          borderRadius: 5,
          lineHeight: 1.71,
          letterSpacing: '0.3px',
          padding: `${theme.spacing(1.875, 3)}`,
        },
        contained: {
          boxShadow: theme.shadows[3],
          padding: `${theme.spacing(1.875, 5.5)}`,
        },
        outlined: {
          padding: `${theme.spacing(1.625, 5.25)}`,
        },
        sizeSmall: {
          padding: `${theme.spacing(1, 2.25)}`,
          '&.MuiButton-contained': {
            padding: `${theme.spacing(1, 3.5)}`,
          },
          '&.MuiButton-outlined': {
            padding: `${theme.spacing(0.75, 3.25)}`,
          },
        },
        sizeLarge: {
          padding: `${theme.spacing(2.125, 5.5)}`,
          '&.MuiButton-contained': {
            padding: `${theme.spacing(2.125, 6.5)}`,
          },
          '&.MuiButton-outlined': {
            padding: `${theme.spacing(1.875, 6.25)}`,
          },
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: themeConfig.disableRipple,
      },
    },
    MuiLoadingButton: {
      styleOverrides: {
        root: {
          '&.MuiLoadingButton-loading': {
            backgroundColor: hexToRGBA(theme.palette.grey[100], 0.9),
          },
        },
        loadingIndicator: {
          color: hexToRGBA(theme.palette.primary.main, 0.9),
        },
      },
    },
  }
}

export default Button
