import {
  Admin,
  Resource,
  // EditGuesser,
  // ShowGuesser,
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import PostList from "./pages/posts/post-list";

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} />
    {/* <Resource name="comments" list={ListGuesser}/>
    <Resource name="albums" list={ListGuesser} />
    <Resource name="photos" list={ListGuesser}/>
    <Resource name="todos" list={ListGuesser} />
    <Resource name="users" list={ListGuesser}/> */}
  </Admin>
);
