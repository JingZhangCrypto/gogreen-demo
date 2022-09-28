import Box from '@mui/material/Box'

import { HorizontalNavItemsType } from 'src/@core/layouts/types'
import themeConfig from 'src/configs/themeConfig'

import HorizontalNavItems from './HorizontalNavItems'


interface Props {
  horizontalNavItems?: HorizontalNavItemsType
}

const Navigation = (props: Props) => {  
  return (
    <Box
      className='menu-content'
      sx={{
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        '& > *': {
          '&:not(:last-child)': { mr: 2 },
          ...(themeConfig.menuTextTruncate && { maxWidth: 220 })
        }
      }}
    >
      <HorizontalNavItems {...props} />
    </Box>
  )
}

export default Navigation
