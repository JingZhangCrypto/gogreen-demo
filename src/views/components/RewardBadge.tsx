import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

const RewardBadge = styled(Box)(({ theme }) => ({
  borderRadius: '24px 0 0 24px',
  padding: '8px 12px',
  color: theme.palette.common.white,
  fontWeight: 500,
  backgroundImage: `linear-gradient(98deg, ${theme.palette.customColors.primaryGradient}, ${theme.palette.primary.main} 94%)`,
}))

export default RewardBadge
