import {
  Admin,
  Resource,
  // EditGuesser,
  // ListGuesser
  // ShowGuesser,
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import PostList from "./pages/posts/post-list";
import { UserList } from "./pages/users/user-list";
import { PostShow } from "./pages/posts/post-show";
import { UserShow } from "./pages/users/user-show";
import { PostEdit } from "./pages/posts/post-edit";
import  PostCreate  from "./pages/posts/post-create";
import { Homepage } from "./pages/homepage";
import { authProvider } from "./authProvider";

import ArticleIcon from '@mui/icons-material/Article'
import PersonIcon from '@mui/icons-material/Person'



export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider} authProvider={authProvider} dashboard={Homepage} >
    <Resource name="posts" icon={ArticleIcon} list={PostList} show={PostShow} edit={PostEdit} create={PostCreate}/>
    <Resource name="users" icon={PersonIcon} list={UserList} show={UserShow}/>
    {/* <Resource name="comments" list={ListGuesser}/>
    <Resource name="albums" list={ListGuesser} />
    <Resource name="photos" list={ListGuesser}/>
    <Resource name="todos" list={ListGuesser} />
     */}
  </Admin>
);
