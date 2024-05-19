import Notification from "./components/Notification";
import useNotification from "./hooks/use-notifications";

const App = () => {
  const { triggerNotification, NotificationComponent } =
    useNotification("top-right");

  return (
    <div>
      <button
        onClick={() =>
          triggerNotification({
            type: "info",
            message: "Hello",
            duration: 3000,
          })
        }
      >
        Trigger
      </button>
      {NotificationComponent}
    </div>
  );
};

export default App;
