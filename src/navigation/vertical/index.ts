import { WalletOutline, RecycleVariant } from 'mdi-material-ui'
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined'
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined'
import ManageSearchIcon from '@mui/icons-material/ManageSearch'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import { useTranslation } from 'react-i18next'

import { VerticalNavItemsType } from 'src/@core/layouts/types'
import { ROUTE_PATH } from 'src/constants/routePath'

export const useVerticalNavigationItems = (): VerticalNavItemsType => {
  const { t } = useTranslation('common')

  return [
    {
      title: t('home'),
      icon: WalletOutline,
      path: ROUTE_PATH.HOME,
    },
    {
      title: t('wallet'),
      icon: WalletOutline,
      path: ROUTE_PATH.WALLET,
    },
    {
      title: t('rewards'),
      icon: CurrencyExchangeOutlinedIcon,
      path: ROUTE_PATH.REWARDS,
    },
    {
      title: t('recycle'),
      icon: RecycleVariant,
      path: ROUTE_PATH.RECYCLE,
    },
    {
      title: t('history'),
      icon: ManageSearchIcon,
      path: ROUTE_PATH.HISTORY,
    },
    {
      title: t('contact'),
      icon: ContactPageOutlinedIcon,
      path: ROUTE_PATH.CONTACT,
    },
    {
      title: t('faq'),
      icon: HelpOutlineOutlinedIcon,
      path: ROUTE_PATH.FAQ,
    },
  ]
}
