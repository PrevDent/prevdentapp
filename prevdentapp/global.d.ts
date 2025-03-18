import { RootStackParamList } from "./Routes/RootStackNavigation";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}