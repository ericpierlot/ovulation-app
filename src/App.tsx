import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import RelativeTime from "dayjs/plugin/relativeTime";
import Home from "./pages/Home";

dayjs.extend(LocalizedFormat);
dayjs.extend(RelativeTime);

const App = () => {
  return <Home />;
};

export default App;
