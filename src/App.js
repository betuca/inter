import React from 'react';
import { useTranslation } from "react-i18next";
import './i18n';

const App = () => {

    const { t, i18n } = useTranslation();
    // i18next.changeLanguage('jap', (err, t) => {
    //     if (err) return console.log('something went wrong loading', err);
    //     console.log(t('title')); // -> same as i18next.t
    // });
    return (
        <div>
            <h1>{t("title")}</h1>
            <img src="./japan.png"></img>
            <p>{t("main text")}</p>
            <button onClick={() => i18n.changeLanguage('jap')}>de</button>
            <button onClick={() => i18n.changeLanguage('en')}>en</button>
        </div>
    );
}

export default App;


