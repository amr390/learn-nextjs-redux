import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const NotificationList = ({ children }: Props) => {
  return <>{children}</>
}
