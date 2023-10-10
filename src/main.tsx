import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import store from "./Redux/store";
import { Provider } from "react-redux";
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>
);
