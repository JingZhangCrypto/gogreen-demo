import { Button } from '@mui/material'
import { useTranslation } from 'react-i18next'

function OpenAppButton() {
  const { t } = useTranslation('wallet')

  return (
    <Button variant="contained" sx={{ fontWeight: 600 }}>
      <a href="keplrwallet://wcV1?wc:cb4a1255-a708-48c7-a06c-688766254084@1?bridge=https%3A%2F%2Fw.bridge.walletconnect.org&key=9d7c47713246c56e1862a92f73249230ecf13a37a4dcc7b8d84f434b6c4bf220"></a>
      {t('openApp')}
    </Button>
  )
}

export default OpenAppButton
