import * as Bowser from 'bowser'

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

export class BTBrowserDetector {
    private static supportedBrowsers: string[] = ['chrome', 'firefox', 'opera']

    public static parser = Bowser.getParser(window.navigator.userAgent);

    public static browserIsSupported(): boolean {
        const browserName = BTBrowserDetector.parser.getBrowserName().toLowerCase()
        return BTBrowserDetector.supportedBrowsers.includes(browserName)
    }

}