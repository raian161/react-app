import { Fragment, useState } from "react";
import "./App.scss";
import Bigbox from "./components/Bigbox";
import Header from "./components/Header";

function App() {
  const [data, setData] = useState("");
  const [posts, setPosts] = useState([]);
  return (
    <Fragment>
      <Header posts={posts} />
      <Bigbox
        theme={"green"}
        title={"First Box"}
        data={data}
        setData={setData}
        posts={posts}
        setPosts={setPosts}
      />
    </Fragment>
  );
}

export default App;
