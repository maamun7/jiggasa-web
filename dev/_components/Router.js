import PropTypes from 'prop-types';
import React from 'react';

/*const propTypes = {
  router: PropTypes.shape({
    route: PropTypes.shape({
      path: PropTypes.string,
    }),
  }).isRequired,
  routes: PropTypes.shape({}).isRequired,
};*/

const Router = ({ router, routes }) => {

    console.log("In component router : ", router);
    console.log("In component routes : ", routes);

  const { path } = router.route;
  if (path in routes) {
    const Component = routes[path];
    return <Component />;
  }

  return null;
};

/*Router.propTypes = propTypes;*/

export default Router;
