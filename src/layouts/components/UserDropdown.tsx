import React, { useCallback, useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import { Button, Box, Dialog, DialogTitle, useTheme } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { Translation, useTranslation } from 'react-i18next'
import { Connector } from '@web3-react/types'
import { useWeb3React } from '@web3-react/core'

import { retainFL6Digits } from 'src/utils/stringHelpers'
import WalletIcon from 'src/assets/icons/Wallet.svg'
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'
import { useSettings } from 'src/@core/hooks/useSettings'
import { isMobileDevice } from 'src/utils/device'
import { metaMask } from 'src/connectors/metaMask'
import { walletConnect } from 'src/connectors/walletConnect'
import MetamaskIcon from 'src/assets/icons/Metamask.svg'
import DefiWallet from 'src/assets/icons/DefiWallet.svg'

const WALLETS: Array<{
  name: string
  icon: string | React.ReactNode
  connector: Connector
}> = [
  {
    name: 'Crypto.com Defi Wallet',
    icon: <DefiWallet />,
    connector: metaMask,
  },
  {
    name: 'Metamask',
    icon: <MetamaskIcon />,
    connector: metaMask,
  },
  {
    name: 'WalletConnect',
    icon: 'https://docs.walletconnect.com/img/favicon.ico',
    connector: walletConnect,
  },
]

const UserDropdown = () => {
  const { account, isActive, isActivating, connector } = useWeb3React()

  const theme = useTheme()
  const {
    settings: { layout },
  } = useSettings()
  const [isOpenWalletDialog, setIsOpenWalletDialog] = useState(false)

  const { t } = useTranslation('wallet')

  const handleConnect = useCallback(() => {
    if (isMobileDevice(window.navigator.userAgent) || layout === 'vertical') {
      walletConnect.activate()
    } else {
      setIsOpenWalletDialog(true)
    }
  }, [layout])

  const handleDisconnect = useCallback(
    () => connector?.deactivate?.(),
    [connector]
  )

  const handleWalletClick = useCallback(
    (connector: Connector) => {
      return () => {
        !isActive && connector.activate()
      }
    },
    [isActive]
  )

  const closeWalletDialog = useCallback(() => {
    setIsOpenWalletDialog(false)
  }, [])

  useEffect(() => {
    if (!isActive) return
    setIsOpenWalletDialog(false)
  }, [isActive])

  return (
    <>
      <LoadingButton
        loading={isActivating}
        variant="outlined"
        sx={{
          borderRadius: '24px',
          maxWidth: '164px',
          paddingX: '24px',
          ...(isActive
            ? {
                backgroundImage: `linear-gradient(98deg, ${theme.palette.customColors.primaryGradient}, ${theme.palette.primary.main} 94%)`,
                color: '#fff',
                '&:hover': {
                  backgroundColor: hexToRGBA(theme.palette.primary.main, 0.8),
                },
              }
            : {}),
        }}
        onClick={handleConnect}
        startIcon={
          isActive && <WalletIcon color={theme.palette.primary.main} />
        }
      >
        <Typography color={isActive ? '#fff' : 'inherit'}>
          <Translation ns="wallet">
            {t => (isActive ? retainFL6Digits(account ?? '') : t('connect'))}
          </Translation>
        </Typography>
      </LoadingButton>
      <Dialog open={isOpenWalletDialog} onClose={closeWalletDialog}>
        <DialogTitle>{t('connectWallet')}</DialogTitle>
        <Box
          sx={{
            width: '360px',
          }}
        >
          {WALLETS.map(wallet => (
            <Box
              sx={theme => ({
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                background: hexToRGBA(theme.palette.primary.dark, 0.05),
                mb: '16px',
                cursor: 'pointer',
              })}
              key={wallet.name}
              onClick={handleWalletClick(wallet.connector)}
            >
              {typeof wallet.icon === 'string' ? (
                <img
                  width={32}
                  height={32}
                  src={wallet.icon}
                  alt={wallet.name}
                />
              ) : (
                wallet.icon
              )}
              <Typography sx={{ ml: '24px' }}>{wallet.name}</Typography>
            </Box>
          ))}
        </Box>
        {isActive && (
          <Button variant="outlined" onClick={handleDisconnect}>
            Disconnect
          </Button>
        )}
      </Dialog>
    </>
  )
}

export default UserDropdown
