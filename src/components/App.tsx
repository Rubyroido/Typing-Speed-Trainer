import styled from 'styled-components';
import Header from './Header';
import Main from './Main';
import { generateText } from '../utils/textGenerator';


function App() {
  const App = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
  `;

  return (
    <App>
      <Header />
      <Main />
    </App>
  );
}

export default App;
