import { useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import { styled } from '@mui/material/styles'
import {
  Card,
  CardHeader,
  Box,
  CardContent,
  Typography,
  Button,
  Dialog,
  DialogTitle,
} from '@mui/material'

import { ROUTE_PATH } from 'src/constants/routePath'
import MachineMockData from 'src/mock/machine.json'
import EstimateRewardsMockData from 'src/mock/estimateRewards.json'
import { StartWithUppercase } from 'src/utils/stringHelpers'
import { addBalance } from 'src/constants/token'

const StyledCardHeader = styled(CardHeader)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
}))
const StyledCardContent = styled(CardContent)(() => ({
  padding: '24px !important',
}))


function Recycle() {
  const router = useRouter()
  const [isOpenRewardDialog, setIsOpenRewardDialog] = useState(false)

  const handleCommit = useCallback(() => {
    setIsOpenRewardDialog(true)
  }, [])

  const closeRewardDialog = useCallback(() => {
    setIsOpenRewardDialog(false)
  }, [])

  const handleConfirm = useCallback(() => {
    setIsOpenRewardDialog(false)
    router.push({
      pathname: ROUTE_PATH.WALLET,
    })
    addBalance('1000')
  }, [router])

  return (
    <Box>
      {MachineMockData.result.data.collections.map(collection => (
      <Card key={collection.type} sx={{
        marginBottom: '24px',
        ':last-child': {
          marginBottom: 0,
        },
      }}>
        <StyledCardHeader title={StartWithUppercase(collection.type)}></StyledCardHeader>
          <StyledCardContent>
          <Box
            sx={{
              ml: 3,
              display: 'flex',
              alignItems: 'flex-start',
              flexDirection: 'column',
              marginBottom: '24px',
              ':last-child': {
                marginBottom: 0,
              },
            }}
          >
            <Typography sx={{ fontWeight: 600 }}>Quantity: </Typography>
            <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
              {collection.quantity}
            </Typography>
          </Box>
          <Box
            sx={{
              ml: 3,
              display: 'flex',
              alignItems: 'flex-start',
              flexDirection: 'column',
            }}
          >
            <Typography sx={{ fontWeight: 600 }}>Weight: </Typography>
            <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
              {collection.weight}{collection.weightUnit}
            </Typography>
          </Box>
        </StyledCardContent>
      </Card>
      ))}
      <Dialog open={isOpenRewardDialog} onClose={closeRewardDialog}>
        <DialogTitle>Token Rewards</DialogTitle>
        <Box
          sx={{
            width: '360px',
          }}
        >
          You will receive <Typography sx={theme => ({ fontWeight: 600, color: theme.palette.primary.main})} component="span">{EstimateRewardsMockData.result.data.estimation.quantity} {EstimateRewardsMockData.result.data.estimation.token.name}</Typography> as rewards.
        </Box>
        <Button variant="contained" sx={{mt: '16px'}} onClick={handleConfirm}>confirm</Button>
      </Dialog>
      <Button variant="contained" onClick={handleCommit}>Commit</Button>
    </Box>
  )
}

export default Recycle
