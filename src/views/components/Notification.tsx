import { Slide, Snackbar, Alert, AlertColor } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'

const defaultAutoHideDuration = 1500

interface NotificationProps {
  open: boolean
  type: AlertColor
  message: string
  autoHideDuration?: number
  onClose?: () => void
}

function Notification({
  open,
  type,
  message,
  autoHideDuration = defaultAutoHideDuration,
  onClose,
}: NotificationProps) {
  const [notificationVisible, setNotificationVisible] = useState(open)

  const closeNotification = useCallback(() => {
    onClose?.()
    setNotificationVisible(false)
  }, [onClose])

  useEffect(() => {
    setNotificationVisible(open)
  }, [open])

  return (
    <Slide in={notificationVisible} direction="left">
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        onClose={closeNotification}
        autoHideDuration={autoHideDuration}
        open={notificationVisible}
      >
        <Alert severity={type}>{message}</Alert>
      </Snackbar>
    </Slide>
  )
}

export default Notification
