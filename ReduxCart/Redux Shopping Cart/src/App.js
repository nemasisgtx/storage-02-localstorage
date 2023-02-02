import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { Fragment, useEffect } from "react";
import { uiActions } from "./components/store/ui-slice";
import Notification from "./components/UI/Notification";

let isInitialized = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending!",
          title: "Sending...",
          message: "Sending Cart Data!",
        })
      );
      const response = await fetch(
        "https://react-project-http-352bf-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );
      if (!response.ok) {
        throw new Error("Sending Cart data failed");
      }
      dispatch(
        uiActions.showNotification({
          status: "Success!",
          title: "Success!",
          message: "Sent Cart Data Successfully!",
        })
      );
    };

    if (isInitialized) {
      isInitialized = false;
      return;
    }

    sendCartData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending Cart data failed",
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
