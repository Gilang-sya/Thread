import React from 'react';
import LoadingBar from 'react-redux-loading-bar';

function Loading() {
  return (
    /* @TODO: use react-redux-loading-bar to show loading bar */
    <div className="Loading">
      <LoadingBar showFastActions />
    </div>
  );
}

export default Loading;
