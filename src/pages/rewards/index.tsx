import { Grid, Box, Typography } from '@mui/material'

import RewardCard from 'src/views/components/RewardCard'

const NFT_REWARDS = [
  {
    name: 'Cruiser #5454',
    price: '550,000',
    imageUrl:
      'https://images.minted.network/?image=273b055f8716599bcc5f68d19b675023021697f52de61e555486b19c94585378&width=1080&quality=75',
    originLink:
      'https://minted.network/collections/cronos/0xd25358e2cad3e1fd165887569892a99fffa674ac/5454',
  },
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
    name: 'Boomer Squad #2547',
    price: '100000',
    imageUrl:
      'https://images.minted.network/?image=656401f3be69ba369486d09a826b260eaf783df972efe8080ab238649e24ab57&width=1080&quality=75',
    originLink:
      'https://minted.network/collections/cronos/0xb650279e3d726b0c75c984caa55341cb87a7f501/2547',
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
    name: 'Argonauts #7415',
    price: '100,000',
    imageUrl:
      'https://images.minted.network/?image=bdd8e84c7630de29b48ab8719ada4b6d2bae19b966895d61ed08837d17a57ae3&width=1080&quality=75',
    originLink:
      'https://minted.network/collections/cronos/0xa996ad2b9f240f78b063e47f552037658c4563d1/7415',
  },
]

const REAL_REWARDS = [
  {
    name: 'Plant A Real Tree',
    price: '550,000',
    imageUrl: 'https://3axis.co/user-images/pok6wk7j.jpg',
    originLink: '',
    badge: 'Crypto.com',
  },
  {
    name: 'Supermarket Gift Card',
    price: '550,000',
    imageUrl:
      'https://previews.123rf.com/images/sanek13744/sanek137441708/sanek13744170800392/84420099-gift-card-icon-business-concept-discount-pictogram-vector-illustration-on-green-background-with-long.jpg',
    originLink: '',
    badge: 'Crypto.com',
  },
]

function Rewards() {
  return (
    <Box>
      <Box>
        <Typography variant="h5" mb={'32px'} mt={'16px'}>
          Real Rewards
        </Typography>
        <Grid container spacing={2} rowSpacing={7}>
          {REAL_REWARDS.map(reward => (
            <Grid key={reward.name} item xs={3}>
              <RewardCard isRedeemVisible {...reward} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box>
        <Typography variant="h5" mb={'32px'} mt={'32px'}>
          NFT Rewards
        </Typography>
        <Grid container spacing={2} rowSpacing={7}>
          {NFT_REWARDS.map(reward => (
            <Grid key={reward.name} item xs={3}>
              <RewardCard isRedeemVisible {...reward} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default Rewards
