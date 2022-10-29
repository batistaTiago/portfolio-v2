export declare type Language = 'portuguese' | 'english';

const localStorageLanguage = localStorage.getItem('app-language');

export const currentLanguage = (localStorageLanguage ? localStorageLanguage : 'english') as Language;