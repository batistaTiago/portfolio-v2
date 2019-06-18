export class BTMobileDetector {

    private static isAndroid(): any {
        return navigator.userAgent.match(/Android/i);
    }

    private static isBlackBerry() {
        return navigator.userAgent.match(/BlackBerry/i);
    }

    private static isIOS() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    }

    private static isOpera() {
        return navigator.userAgent.match(/Opera Mini/i);
    }

    private static isWindowsPhone() {
        return navigator.userAgent.match(/IEMobile/i);
    }

    public static isMobile() {
        return (
            BTMobileDetector.isAndroid() || BTMobileDetector.isBlackBerry() || BTMobileDetector.isIOS() || BTMobileDetector.isOpera() || BTMobileDetector.isWindowsPhone()
        )
    }

    public static isDesktop() {
        return !this.isMobile()
    }

}

export enum Browser {
    CHROME = 'chrome',
    FIREFOX = 'firefox',
    OPERA = 'opera',
    SAFARI = 'safari',
    INTERNET_EXPLORER = 'internet-explorer',
    EDGE = 'edge',
    BLINK = 'blink'
}

export class BTBrowserDetector {


    private static isChrome = !!window['chrome'] && (!!window['chrome'].webstore || !!window['chrome'].runtime);
    private static isFirefox = typeof window['InstallTrigger'] !== 'undefined';
    private static isOpera = (!!window['opr'] && !!window['opr'].addons) || !!window['opera'] || navigator.userAgent.indexOf(' OPR/') >= 0;
    private static isSafari = /constructor/i.test(window['HTMLElement']) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof window['safari'] !== 'undefined' && window['safari'].pushNotification));
    private static isIE = /*@cc_on!@*/false || !!document['documentMode'];
    private static isEdge = !BTBrowserDetector.isIE && !!window['StyleMedia'];
    
    private static isBlink = (BTBrowserDetector.isChrome || BTBrowserDetector.isOpera) && !!window['CSS'];

    private static supportedBrowsers: Browser[] = [Browser.CHROME, Browser.FIREFOX, Browser.OPERA]

    public static browserIsSupported() {
        // const browser = BTBrowserDetector.getBrowser()
        // console.log(browser)
        // return BTBrowserDetector.supportedBrowsers.includes(browser)
        return BTBrowserDetector.supportedBrowsers.includes(BTBrowserDetector.getBrowser())
    }

    private static getBrowser(): Browser {
        if (BTBrowserDetector.isOpera) {
            return Browser.OPERA
        }

        if (BTBrowserDetector.isFirefox) {
            return Browser.FIREFOX
        }

        if (BTBrowserDetector.isSafari) {
            return Browser.SAFARI
        }

        if (BTBrowserDetector.isIE) {
            return Browser.INTERNET_EXPLORER
        }

        if (BTBrowserDetector.isEdge) {
            return Browser.EDGE
        }

        if (BTBrowserDetector.isChrome) {
            return Browser.CHROME
        }

        if (BTBrowserDetector.isBlink) {
            return Browser.BLINK
        }

        return null
    }
}