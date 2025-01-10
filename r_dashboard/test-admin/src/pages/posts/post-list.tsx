import { 
    Datagrid, 
    FunctionField, 
    List, 
    ReferenceField, 
    TextField, 
    useRecordContext
} from 'react-admin';

const PostPanel = () =>{
    const record = useRecordContext();
    return <div>{record?.body}</div>;
}

 const PostList  = () => (
    <List>
       
        <Datagrid
        expand={<PostPanel/>}

         sx={{
            ".RaDatagrid-headerCell": {
                padding: '16px', 
                background: '#155E95',
                color: '#F6C794'
            }, 
            ".RaDatagrid-tbody": {
                background: '#6A80B9', 
                color: '#FFF6B3'
            }
            }}>

            <TextField source="id"  />
            <TextField source="title" label="Post Title" />
            <FunctionField 
            label="Excerpt"
            render={(record) => `${record.body.substring(0, 50)}...`}/>
            <ReferenceField source="userId" reference="users" />
        </Datagrid>
    </List>
);

export default PostList 