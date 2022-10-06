import { styled } from '@mui/material/styles'
import {
  Card,
  CardHeader,
  Box,
  CardContent,
  Typography,
} from '@mui/material'

import MachineMockData from 'src/mock/machine.json'
import { StartWithUppercase } from 'src/utils/stringHelpers'

const StyledCardHeader = styled(CardHeader)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
}))
const StyledCardContent = styled(CardContent)(() => ({
  padding: '24px !important',
}))


function Recycle() {
  return (
    <Box sx={{ display: 'flex', gap: 8, margin: '0 0 24px 0' }}>
      {MachineMockData.result.data.collections.map(collection => (
      <Card key={collection.type}>
        <StyledCardHeader title={StartWithUppercase(collection.name)}></StyledCardHeader>
          <StyledCardContent>
          {collection.quantity && <Box
            sx={{
              ml: 3,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              margin: '0px 0px 8px 0',
              ':last-child': {
                marginBottom: 0,
              },
            }}
          >
            <Typography sx={{ fontWeight: 600 }}>Quantity: </Typography>
            <Typography variant="body2" sx={{ fontSize: '0.9rem', fontWeight: 500 }}>
              {collection.quantity}
            </Typography>
          </Box>}
          {collection.weight && <Box
            sx={{
              ml: 3,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              margin: '0px 0px 8px 0 ',
              ':last-child': {
                marginBottom: 0,
              },
            }}
          >
            <Typography sx={{ fontWeight: 600 }}>Weight: </Typography>
            <Typography variant="body2" sx={{ fontSize: '0.9rem', fontWeight: 500 }}>
              {collection.weight}{collection.weightUnit}
            </Typography>
          </Box>}
        </StyledCardContent>
      </Card>
      ))}
    </Box>
  )
}

export default Recycle
