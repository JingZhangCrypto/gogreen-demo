import { SearchOutlined } from '@mui/icons-material'
import {
  DialogContent,
  DialogTitle,
  Input,
  InputAdornment,
} from '@mui/material'
import { useTranslation } from 'react-i18next'

// import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'
// import { assertKeplr } from 'src/utils/assert'
// import { TokensPersist } from 'src/utils/localStorage'

// interface TokenItemProps {
//   token: TokenWrapper<Token>
//   onAdded: () => void
// }
// function TokenItem({ token, onAdded }: TokenItemProps) {
//   const suggestToken = async () => {
//     if (!accountInfo || !network) return
//     assertKeplr()

//     window.keplr
//       ?.suggestToken(
//         accountInfo.chainId as string,
//         (token.token || token.denom) as string
//       )
//       .then(() => {
//         const localTokens = TokensPersist.get()
//         const tokens = localTokens
//           ? JSON.parse(localTokens)
//           : {
//               [network]: {
//                 ibc: [],
//                 cw20: [],
//               },
//             }

//         tokens[network][token.protocol ? 'cw20' : 'ibc'].push(token)
//         TokensPersist.set(JSON.stringify(tokens))
//         onAdded()
//         refetchTokenBalances()
//       })
//   }

//   return (
//     <Box
//       py="12px"
//       borderBottom={theme => `1px solid ${theme.palette.divider}`}
//       sx={theme => ({
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         ':hover': {
//           backgroundColor: hexToRGBA(theme.palette.primary.dark, 0.05),
//         },
//         paddingX: '12px',
//       })}
//     >
//       <Box
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//         }}
//       >
//         <Avatar src={token.icon} sx={{ width: '24px', height: '24px' }} />
//         <Box
//           sx={{
//             ml: 3,
//             display: 'flex',
//             alignItems: 'flex-start',
//             flexDirection: 'column',
//           }}
//         >
//           <Typography sx={{ fontWeight: 600 }}>{token.symbol}</Typography>
//           <Typography variant="body2" sx={{ fontSize: '12px' }}>
//             {token.name}
//           </Typography>
//         </Box>
//       </Box>
//       {token.added ? (
//         <CheckCircle color="primary" />
//       ) : (
//         <Add color="info" sx={{ cursor: 'pointer' }} onClick={suggestToken} />
//       )}
//     </Box>
//   )
// }

function AddTokenPanel() {
  const { t } = useTranslation('wallet')

  return (
    <>
      <DialogTitle align="center">{t('manageTokenList')}</DialogTitle>
      <DialogContent sx={{ width: '440px' }}>
        <Input
          fullWidth
          startAdornment={
            <InputAdornment position="start">
              <SearchOutlined />
            </InputAdornment>
          }
        />
        {/* {tokens?.map(token => (
          <TokenItem key={token.symbol} token={token} onAdded={refetchTokens} />
        ))} */}
      </DialogContent>
    </>
  )
}

export default AddTokenPanel
