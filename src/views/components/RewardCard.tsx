import Link from 'next/link'
import Image from 'next/image'
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material'

import RewardBadge from 'src/views/components/RewardBadge'

interface RewardCardProps {
  name: string
  price: string
  imageUrl: string
  originLink: string
  badge?: string
  isRedeemVisible?: boolean
}

function RewardCard({
  name,
  price,
  imageUrl,
  originLink,
  badge,
  isRedeemVisible,
}: RewardCardProps) {
  return (
    <Card sx={{ maxWidth: 300, position: 'relative' }}>
      {badge && (
        <RewardBadge position="absolute" top="20px" right={0}>
          {badge}
        </RewardBadge>
      )}
      <CardMedia
        component="img"
        height="300"
        image={imageUrl}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography fontWeight={500}>
          <Box component="span" mr={'8px'} sx={{ verticalAlign: 'middle' }}>
            <Image
              style={{ borderRadius: '50%' }}
              src="/images/GGR_token.jpg"
              alt="GGR"
              width={30}
              height={30}
            />
          </Box>
          Price: {price} GGR
        </Typography>
      </CardContent>
      <CardActions sx={{ px: 1 }}>
        {isRedeemVisible && <Button size="small">Redeem</Button>}
        <Link href={originLink}>
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default RewardCard
