import React from 'react';
import {Container} from './styles';
import PostsTable from '../PostsTable';
import {NewPost} from '../NewPost';

export function Dashboard() {

    return (
        <Container>
            <NewPost/>
            <PostsTable/>
        </Container>

    );
}

export default Dashboard;