import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledLink = styled('a')(({ theme }) => ({
  color: theme.palette.info.dark,
  textDecoration: 'none',
}))

function Corporation() {
  return (
    <Box>
      <Typography>
        Contact us by{' '}
        <StyledLink href="mailto:gogreen@crypto.com" target="_blank">
          gogreen@crypto.com
        </StyledLink>
      </Typography>
    </Box>
  )
}

export default Corporation
