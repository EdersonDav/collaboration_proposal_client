import GlobalStyled from './style/global';

import { AppRoutes } from './routes';

const App = () => {
  return (
    <main>
      <AppRoutes/>
      <GlobalStyled />
    </main>
    
  );
}

export default App;
