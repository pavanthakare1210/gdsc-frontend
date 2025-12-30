export interface NotificationItem {
  title: string;
  message: string;
  time: string;
  read: boolean;
    // ADD THESE
  color?: string;
  icon?: string;
}
