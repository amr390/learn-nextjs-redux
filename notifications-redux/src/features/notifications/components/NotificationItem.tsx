import { useAppDispatch } from "@redux/hooks"
import { Notification } from "@features/notifications/components/Notifications"


type Props = {
  notification: Notification
}

export const NotificationItem = ({
  notification: Notification,
}: Props) => {
  // const dispatch = useAppDispatch()

  return (
    <h1> Notification Item </h1>
  )
}
