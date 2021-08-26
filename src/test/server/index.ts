export const initMocks = () => {
  if (!!process.env.REACT_APP_API_MOCKING === true) {
    // Run on Node, usually with tests. In this project we use Jest.
    if (typeof window === 'undefined') {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const { server } = require('./server');
      server.listen();
    } else {
      // Run on Browser.
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const { worker } = require('./browser');
      worker.start();
    }
  }
};
