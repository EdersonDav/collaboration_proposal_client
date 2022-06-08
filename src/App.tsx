import GlobalStyled from './style/global';
import { ResumeModal } from './components/ResumeModal'
import { AppRoutes } from './routes';

const App = () => {
  return (
    <main>
      <AppRoutes/>
      <ResumeModal/>
      <GlobalStyled />
    </main>
    
  );
}

export default App;
