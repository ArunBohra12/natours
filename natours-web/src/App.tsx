import { useTranslation } from 'react-i18next';

import './App.css';

const App = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className='text-sm text-green-800'>{t('key')}</div>
    </div>
  );
};

export default App;
