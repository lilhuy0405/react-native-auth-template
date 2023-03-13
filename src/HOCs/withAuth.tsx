import { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { appRouters } from "../routers";
import Toast from "react-native-toast-message";

const withAuth = (WrappedComponent: any) => {
  return (props: any) => {
    const route = useRoute();
    const isLoggedIn = true;
    useEffect(() => {
      //get current screen name
      if (!route.name) return;
      const currentScreen = route.name;

      const currentRouterKey = Object.keys(appRouters).find((key: string) => {
        return appRouters[key].name === currentScreen;
      });
      if (!currentRouterKey) return;
      const router = appRouters[currentRouterKey];
      if (router.requireLogin && !isLoggedIn) {
        // navigate to home screen
        props.navigation.navigate(appRouters.home.name);
        //show error message
        Toast.show({
          type: "error",
          text1: "Please login to continue"
        });
      }
    }, [isLoggedIn, route]);
    return (
      <WrappedComponent {...props} />
    );
  };

};

export default withAuth;
