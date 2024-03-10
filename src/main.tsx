import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/Store.ts'
import { I18nextProvider } from 'react-i18next'
import i18n from './Internationalization/Internationalization.ts'
import { initSentry } from './Utils/SentryUtil.ts'
initSentry();


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </Provider>
)
