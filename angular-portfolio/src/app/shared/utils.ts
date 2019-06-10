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