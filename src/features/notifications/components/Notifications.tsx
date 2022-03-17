import { ReactNode } from 'react'

export type NotificationTypes = 'success' | 'error' | 'warning' | 'info'

export type Notification = {
  id: string
  message: string
  type?: NotificationTypes
  onClose?: () => void
  acion?: ReactNode
}
