import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { styled } from '@mui/material/styles'

const StyledContainer = styled(Box)(({ theme }) => ({
  paddingBottom: '64px',
  marginBottom: '32px',
  backgroundImage: `linear-gradient(98deg, ${theme.palette.customColors.primaryGradient}, ${theme.palette.primary.main} 94%)`,
}))

const StyledTitle = styled('div')(({ theme }) => ({
  fontWeight: 600,
  fontSize: '24px',
  textAlign: 'center',
  padding: '64px 0 24px 0',
  color: theme.palette.common.white,
}))

const StyledContent = styled('p')(({ theme }) => ({
  fontWeight: 500,
  fontSize: '16px',
  padding: '0 96px',
  textIndent: 4,
  color: theme.palette.common.white,
}))

const StyledLink = styled('a')(({ theme }) => ({
  color: theme.palette.info.dark,
}))

function Home() {
  const { t } = useTranslation('home')

  return (
    <Box>
      <StyledContainer>
        <StyledTitle>{t('whatAreGreenOrbs')}</StyledTitle>
        <StyledContent>
          These green orbs are a kind of celestial sphere and they are powerful
          and mighty when they come together. It can’t serve its purpose if
          there isn’t much orbs collected. These orbs are heavily needed to
          restore the rightful planet we called home (Earth) and make a greener
          home all of us treasure. In return with these orbs we allow these to
          be exchanged for rewards if you have the desired amount we wanted in
          the rewards list.
        </StyledContent>
      </StyledContainer>
      <StyledContainer>
        <StyledTitle>Why CrononGoGreen ?</StyledTitle>
        <StyledContent>
          The GoGreen program is part of a bigger picture of{' '}
          <StyledLink href="http://crypto.com/" target="_blank">
            Crypto.com
          </StyledLink>
          ’s{' '}
          <StyledLink
            href="https://blog.crypto.com/crypto-coms-climate-commitment/"
            target="_blank"
          >
            Climate Commitment
          </StyledLink>
          .
        </StyledContent>
        <StyledContent>
          Climate change is already impacting human health such as inappropriate
          disposal and mishandling of plastic waste and e-waste which lead to
          ocean temperatures rising, leading to higher incidences of flooding,
          and chemical hazards.
        </StyledContent>
        <StyledContent>
          Recycling is essential in our daily life to reduce our carbon
          emissions to bring about a greener home that we live in, use less
          energy on sourcing and processing new raw materials which produce
          lower carbon emissions. Overall, reducing carbon dioxide and other
          greenhouse gasses being emitted into the atmosphere.
        </StyledContent>
        <StyledContent>
          Join us in this recycling journey, together we can make an impact.{' '}
        </StyledContent>
      </StyledContainer>
      <StyledContainer>
        <StyledTitle>Plastic Problem Today.</StyledTitle>
        <StyledContent>
          While plastic has many valuable uses, we have become addicted to
          single use plastics products which come with environmental, social,
          and health consequences. Most types of plastic are in fact recyclable,
          but most municipal governments do not have the infrastructure in place
          to carry out this energy-intensive process.
        </StyledContent>
        <StyledContent>
          The COVID-19 pandemic has led to an increased demand for single-use
          plastic that intensifies pressure on an already out-of-control global
          plastic waste problem such as in the F&B and fast fashion industry.
        </StyledContent>
        <StyledContent>
          Each year, approximately eight million tonnes of plastic end up in our
          oceans. Some researchers predict that this figure could double by
          2025. while others suggest there could be more plastic than sea
          creatures in our oceans by 2050. This plastic pollution in our ocean
          make it easily swallowed by marine lives.
        </StyledContent>
        <StyledContent>as of 2019</StyledContent>
        <Box px={'96px'}>
          <img src="/images/plastic_data.png" alt="plastic data" />
        </Box>
      </StyledContainer>
    </Box>
  )
}

export default Home
