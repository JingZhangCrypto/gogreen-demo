import { useRouter } from 'next/router'

import Home from 'src/views/pages/home'

/**
 *  Set Home URL is default as /wallet
 */
export const getHomeRoute = () => {
  return '/'
}

const HomePage = () => {
  const router = useRouter()

  router.push('/home')

  return <Home />
}

export default HomePage
