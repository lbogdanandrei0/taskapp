import TaskContent from "./Components/TaskContent";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import store from "./Redux/store";
import {Provider} from "react-redux"

function App() {
  return (
    <Provider store={store}>
      <Header />
      <TaskContent />
      <Footer />
    </Provider>
  )

}

export default App;
