import { Routes, Route } from "react-router-dom";

import Layout from "./components/shared/Layout";
import Home from "./pages/Home";
import Groups from "./pages/Groups";
import AddGroup from "./pages/AddGroup";
import GroupDetails from "./pages/GroupDetails";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="groups" element={<Groups />} />
        <Route path="groups/create" element={<AddGroup />} />
        <Route path="groups/:id" element={<GroupDetails />} />
      </Routes>
    </Layout>
  );
}

export default App;
