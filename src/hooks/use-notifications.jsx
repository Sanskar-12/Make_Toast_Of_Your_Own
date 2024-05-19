import { useState } from "react";
import Notification from "../components/Notification";

const useNotification = (position) => {
  const [notification, setNotification] = useState(null);

  const triggerNotification = (notificationProps) => {
    setNotification(notificationProps);
    setTimeout(() => {
      setNotification(null);
    }, notificationProps?.duration);
  };

  const NotificationComponent = notification ? (
    <div>
      <Notification {...notification} />
    </div>
  ) : null;

  return { triggerNotification, NotificationComponent };
};

export default useNotification;
