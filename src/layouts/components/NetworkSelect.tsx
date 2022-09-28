// import { SyntheticEvent, useCallback, useEffect, useState } from 'react'

// import TextSelect, { TextSelectOption } from 'src/components/TextSelect'
// import {
//   CHAIN_NETWORK_MAP,
//   Network,
//   NETWORK_OPTIONS,
// } from 'src/constants/network'

function NetworkSelect() {
  // const [network, setNetwork] = useState(curNetwork)

  // const handleChange = useCallback(
  //   (e: SyntheticEvent, option: TextSelectOption<Network>) => {
  //     setNetwork(option.value)
  //     connect(CHAIN_NETWORK_MAP[option.value]).catch(() => {
  //       setNetwork(curNetwork)
  //     })
  //   },
  //   [connect, curNetwork]
  // )

  // useEffect(() => {
  //   setNetwork(curNetwork)
  // }, [curNetwork])

  // return (
  //   network && (
  //     <TextSelect
  //       value={network}
  //       options={NETWORK_OPTIONS}
  //       onChange={handleChange}
  //     />
  //   )
  // )

  return null
}

export default NetworkSelect
