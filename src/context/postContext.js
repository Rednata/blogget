import React from 'react';
import {useBestPosts} from '../hooks/useBestPosts';
import PropTypes from 'prop-types';

export const postContext = React.createContext([]);

export const PostContextProvider = ({children}) => {
  const [bestPosts] = useBestPosts();

  return (
    <postContext.Provider value={[bestPosts]}>
      {children}
    </postContext.Provider>
  );
};

PostContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
