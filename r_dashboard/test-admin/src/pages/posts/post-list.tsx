import { 
    Datagrid, 
    EditButton,
    FunctionField, 
    List, 
    ReferenceField,
    ReferenceInput,
    TextField, 
    TextInput,
    // useRecordContext,
} from 'react-admin';

// const PostPanel = () =>{
//     const record = useRecordContext();
//     return <div>{record?.body}</div>;
// }

const PostList  = () =>{ 
    
    const postFilters = [
        <TextInput source='q' label='Search' alwaysOn/>,
        <ReferenceInput source='userID' label='User' reference='users'/>
       ];

       return(

           <List filters={postFilters}>
       
        <Datagrid
        // expand={<PostPanel/>}
        
        sx={{
            ".RaDatagrid-headerCell": {
                padding: '16px', 
                background: '#155E95',
                
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
            <EditButton/>
        </Datagrid>
    </List>
        )
};

export default PostList 