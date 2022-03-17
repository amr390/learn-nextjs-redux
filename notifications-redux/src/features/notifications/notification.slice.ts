import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

import type { Notification } from './components/Notifications'
import type { RootState } from '@redux/store'
import { useAppSelector } from '@redux/hooks'

type NotificationsState = {
  notifications: Notification[]
}

const initialState: NotificationsState = {
  notifications: [],
}

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (
      state,
      { payload }: PayloadAction<Omit<Notification, 'id'>>
    ) => {
      const notification: Notification = {
        id: nanoid(),
        ...payload,
      }

      state.notifications.push(notification)
    },
  },
})

const { reducer, actions } = notificationsSlice

export const { addNotification } = actions

const selectNotifications = (state: RootState) =>
  state.notifications.notifications

export const useNotifications = () => useAppSelector(selectNotifications)

export default reducer
