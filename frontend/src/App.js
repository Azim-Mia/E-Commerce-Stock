import {
  RouterProvider,
} from "react-router-dom";
import './App.css';
import router from '../src/routingAllPage/routingPage';
import Websoket from '../src/webSocket.js';
function App() {
  return (
    <div>
    <RouterProvider router={router} />
<Websoket />
    </div>
  );
}

export default App;
