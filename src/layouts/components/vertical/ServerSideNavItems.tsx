import { useEffect, useState } from 'react'
import * as Icons from 'mdi-material-ui'
import axios from 'axios'


import { VerticalNavItemsType } from 'src/@core/layouts/types'

const ServerSideNavItems = () => {
  // ** State
  const [menuItems, setMenuItems] = useState<VerticalNavItemsType>([])

  useEffect(() => {
    axios.get('/api/vertical-nav/data').then(response => {
      const menuArray = response.data

      /**
       *  Replace the icon string with the component
       *  If you don't want to import the whole icon library
       *  you can create a static object and replace the icons using that object
       */

      const finalMenuArray = (items: VerticalNavItemsType) => {
        return items.map((item: any) => {
          if (item.icon) {
            // @ts-ignore
            item.icon = (Icons as any)[item.icon]

            if (item.children) {
              finalMenuArray(item.children)
            }

            return item
          }

          return item
        })
      }

      setMenuItems(finalMenuArray(menuArray))
    })
  }, [])

  return menuItems
}

export default ServerSideNavItems
