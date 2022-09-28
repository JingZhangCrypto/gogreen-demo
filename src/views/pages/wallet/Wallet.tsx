// import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { ArrowURightTop } from 'mdi-material-ui'
import { styled } from '@mui/material/styles'
import {
  Card,
  Grid,
  CardHeader,
  Box,
  CardContent,
  Typography,
  Button,
} from '@mui/material'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined'
import { useMemo } from 'react'

import RewardCard from 'src/views/components/RewardCard'
import { TOKEN } from 'src/constants/token'

// import { ROUTE_PATH } from 'src/constants/routePath'

const StyledCardHeader = styled(CardHeader)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
}))
const StyledCardContent = styled(CardContent)(() => ({
  padding: '24px !important',
}))

const LEVEL = 3

const REWARDS = [
  {
    name: 'VVS Miner Mole #1166',
    price: '550,000',
    badge: 'Cronos',
    imageUrl:
      'https://images.minted.network/?image=1d8fad17230449653240c7c1b6fa86ab51423ad5d2dc82f2761f1ac2654f5585&width=1080&quality=75',
    originLink:
      'https://minted.network/collections/cronos/0x06596ed89ac4609de47a21af7e36b38b2df57c26/1166',
  },
  {
    name: 'Cronos Apes #2753',
    price: '100000',
    badge: 'Cronos',
    imageUrl:
      'https://images.minted.network/?image=e52aee0b63fd4fcfa465ad7bfa0dc9a62769904e1f5b78b096a270156518ec64&width=1080&quality=75',
    originLink:
      'https://minted.network/collections/cronos/0x5cb9a12d31cf751acc58b12b47cc4e093a6ab580/2753',
  },
  {
    name: 'CRO Home#2956',
    price: '100,000',
    badge: 'Cronos',
    imageUrl:
      'https://images.minted.network/?image=fd582794d39ce219e31c35107acc87ab67dc4ce2867c397ea12b0a0df9b84b24&width=3840&quality=75',
    originLink:
      'https://minted.network/collections/cronos/0x59b554b12b80cac8629bf541a2d6359639af2a63/2956',
  },
  {
    name: 'Plant A Real Tree',
    price: '550,000',
    imageUrl: 'https://3axis.co/user-images/pok6wk7j.jpg',
    originLink: '',
  },
]

function Wallet() {
  const { t } = useTranslation('wallet')
  const { query } = useRouter()

  const balance = useMemo(
    () =>
      query.token ? Number(TOKEN.balance) + Number(query.token) : TOKEN.balance,
    [query.token]
  )

  return (
    <Box>
      <Grid container spacing={6}>
        <Grid item md={7} xs={12}>
          <Card>
            <StyledCardHeader title={t('coins')}></StyledCardHeader>
            <StyledCardContent>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '24px',
                  ':last-child': {
                    marginBottom: 0,
                  },
                }}
              >
                <Box sx={{ display: 'flex' }}>
                  <Box>
                    <Image
                      style={{ borderRadius: '50%' }}
                      src="/images/GGR_token.jpg"
                      alt="GGR"
                      width={30}
                      height={30}
                    />
                  </Box>
                  {/* <Avatar src={''} sx={{ width: '2.5rem', height: '2.5rem' }} /> */}
                  <Box
                    sx={{
                      ml: 3,
                      display: 'flex',
                      alignItems: 'flex-start',
                      flexDirection: 'column',
                    }}
                  >
                    <Typography sx={{ fontWeight: 600 }}>GGR</Typography>
                    <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
                      {balance}
                    </Typography>
                  </Box>
                </Box>
                <Button startIcon={<ArrowURightTop />}>{t('send')}</Button>
              </Box>
            </StyledCardContent>
          </Card>
        </Grid>
        <Grid item md={5} xs={12}>
          <Card>
            <StyledCardHeader title={'My Level'}></StyledCardHeader>
            <StyledCardContent>
              <Box>
                <Typography sx={{ fontWeight: 600 }}>Level: {LEVEL}</Typography>
                <Box sx={{ color: theme => theme.palette.primary.light }}>
                  {Array(LEVEL)
                    .fill(null)
                    .map((item, i) => (
                      <StarOutlinedIcon key={i} />
                    ))}
                </Box>
              </Box>
            </StyledCardContent>
          </Card>
        </Grid>
      </Grid>
      <Box>
        <Typography variant="h5" my={'40px'}>
          My Achievements
        </Typography>
        <Grid container spacing={2} rowSpacing={7}>
          {REWARDS.map(reward => (
            <Grid key={reward.name} item xs={3}>
              <RewardCard {...reward} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default Wallet
