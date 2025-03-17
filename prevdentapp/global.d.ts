import { RootStackParamList } from "./Routes/RootStack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}