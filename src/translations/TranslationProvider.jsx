import React from 'react'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

import global_es from "./es/global.json"
import global_en from "./en/global.json"

i18next.init({
    interpolation: {escapeValue:false},
    lng:"es",
    resources:{
        es:{
            global: global_es,
        },
        en:{
            global: global_en,
        }
    }
})

export const TranslationProvider = ({children}) => {
    return (
        <I18nextProvider i18n={i18next}>
            {children}
        </I18nextProvider>
    )
}
