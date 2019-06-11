export class BTAnimationManager {

    private constructor() { }

    private static instance: BTAnimationManager;

    public static getInstance(): BTAnimationManager {
        
        if (BTAnimationManager.instance === undefined) {
            BTAnimationManager.instance = new BTAnimationManager()
        }
        return BTAnimationManager.instance
    }

    private static headerHasBeenAnimated: boolean = false    

    public shouldAnimateHeader(): boolean {
        return !BTAnimationManager.headerHasBeenAnimated;
    }

    private static heroPageHasBeenAnimated: boolean = false
    public shouldAnimateHeroPage(): boolean {
        return !BTAnimationManager.heroPageHasBeenAnimated;
    }
    private static contactPageHasBeenAnimated: boolean = false
    public shouldAnimateContactPage(): boolean {
        return !BTAnimationManager.contactPageHasBeenAnimated
    }

    public animationDidFinish(event: AnimationEvent) {
        const target = <HTMLElement>event.target
        if (target.classList.contains('titles-container-animation')) {
            BTAnimationManager.heroPageHasBeenAnimated = true
        } else if (target.classList.contains('form-animation')) {
            BTAnimationManager.contactPageHasBeenAnimated = true
        }
    }
}