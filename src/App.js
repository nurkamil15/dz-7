import {Route, Routes} from "react-router-dom";
import Pageposts from "./pages/Pageposts";
import PostPage from "./pages/PostPage";


function App() {
  return (
    <div>
      <Routes>
          <Route index element={<Pageposts/>}/>
          <Route path='post/:id' element={<PostPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
