import React from 'react';
import { useQuery } from './generated/graphql';

function Example() {
  const { getPageUsers, $state } = useQuery({
    prepare({ prepass, query }) {
      prepass(query.getPageUsers, 'items.id', 'items.username', 'total');
    }
  });

  if ($state.isLoading) return <p>Loading...</p>;

  return (
    <>
      {getPageUsers.items.map(({ id, username }) => {
        return (
          <p key={id}>
            Name: {username}
            <br />
            Dogs:
            <br />
          </p>
        );
      })}
    </>
  );
}

export default Example;
