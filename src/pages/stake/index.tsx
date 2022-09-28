import { useTranslation } from 'react-i18next'

function Stake() {
  const { t } = useTranslation('common')

  return <div>{t('stake')}</div>
}

export default Stake
