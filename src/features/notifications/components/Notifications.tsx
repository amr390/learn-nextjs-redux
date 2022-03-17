import { ReactNode } from 'react'
import { useNotifications } from '../notification.slice'
import { NotificationItem } from './NotificationItem'
import { NotificationList } from './NotificationList'

export type NotificationTypes = 'success' | 'error' | 'warning' | 'info'

export type Notification = {
  id: string
  message: string
  type?: NotificationTypes
  onClose?: () => void
  acion?: ReactNode
}

export const Notifications = () => {
  const notifications = useNotifications()

  return (
    <NotificationList>
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </NotificationList>
  )
}
