import { Typography, Box } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledTitle = styled(Typography)({
  lineHeight: '40px',
})

const StyledSubtitle = styled(Typography)({
  lineHeight: '32px',
  fontSize: '18px',
  fontWeight: 500,
})

function FAQ() {
  return (
    <Box>
      <Typography variant="h5" textAlign={'center'} my="32px">
        Cronos GoGoreen Recycling Program FAQs
      </Typography>
      <StyledTitle variant="h6">
        1. What can or cannot be recycled ?
      </StyledTitle>
      <StyledSubtitle>OK for recycling.</StyledSubtitle>
      <ul>
        <li>Beverage Bottles.</li>
        <li>Shampoo, and Detergent Bottles.</li>
        <li>Reusable Containers.</li>
        <li>Takeout Containers, Disposable Plastics.</li>
      </ul>
      <StyledSubtitle>NOT OK for recycling.</StyledSubtitle>
      <ul>
        <li>Packaging with Foil.</li>
        <li>Melamine Products.</li>
        <li>Plastic Packaging Contaminated with food.</li>
        <li>Toys.</li>
      </ul>
      <StyledTitle variant="h6">
        2. Can I recycle bottles and containers that are empty, but haven’t been
        rinsed ?
      </StyledTitle>
      <ul>
        <li>
          Yes, unless there are food or liquid remnants that need to be removed
          by rinsing.
        </li>
      </ul>
      <StyledTitle variant="h6">
        3. Where can I deposit my recyclables ?
      </StyledTitle>
      <ul>
        <li>
          You may deposit your recyclables into the CronosGoGreen recycling
          machine upon presenting your ERC20 QR code on the scanner.
        </li>
      </ul>
      <StyledTitle variant="h6">
        4. Different plastics have different numbers and symbols printed on
        them. Which of these can be recycled ?
      </StyledTitle>
      <ul>
        <li>
          These numbers are resin identification Codes used by manufacturers and
          recyclers. They do not inform consumers whether they can be recycled
          or not. To find out what plastic items can be recycled, please refer
          to the list at this link.
        </li>
      </ul>
      <StyledTitle variant="h6">5. here can I recycle e-waste ?</StyledTitle>
      <ul>
        <li>
          You can find out the locations of e-waste recycling points at this
          link.
        </li>
      </ul>
      <StyledTitle variant="h6">
        6. Are my recycling GoGreen (GGR) points transferable ?
      </StyledTitle>
      <ul>
        <li>
          You, any ERC20 wallet address is transferable. please do not key in
          any non ERC20 wallet addresses which will result in a lost transfer
          and unable to revert it back.
        </li>
      </ul>
      <StyledTitle variant="h6">
        7. Where can I see how much I have recycled ?
      </StyledTitle>
      <ul>
        <li>
          You have to connect your ERC20 wallet address first then go under
          history tab to view it.
        </li>
      </ul>
    </Box>
  )
}

export default FAQ
