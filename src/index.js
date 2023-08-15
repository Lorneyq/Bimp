import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles/global.scss';

import { I18nextProvider } from 'react-i18next';
import i18n from './18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <I18nextProvider i18n={i18n}>
    <div className="relative mx-auto my-0 h-full max-w-12xl px-4 py-0">
      <App />
    </div>
  </I18nextProvider>,
);
