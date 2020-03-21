import React from 'react';
import { Suspense } from 'react';
import { graphql } from '@gqless/react'
import { query } from './graphql';

const Author = graphql(() => {
  const user = query.getFirstUsers;
  return (
    <div>
      <h1>{ user.id }: { user.username }</h1>
      <PagePosts user={user} />
    </div>
  )
})

const PagePosts = graphql(({ user }) => {
  const args = {
    where: {
      sql: 'publish=? and users_id=?',
      val: [ String(1), String(user.id) ]
    }
  };
  const items = user.posts(args).items;
  return (
    <div>
      { items.map(post => 
        <h2>{ post.id }: { post.title }</h2>
      ) }
    </div>
  )
})

function App() {
  return (
    <Suspense fallback={<span>loading...</span>}>
      <Author />
    </Suspense>
  );
}

export default App;
