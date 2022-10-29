export class BTAnimationManager {
    private static heroPageHasBeenAnimated: boolean = false
    private static headerHasBeenAnimated: boolean = false    
    private static contactPageHasBeenAnimated: boolean = false

    private constructor() { }

    private static instance: BTAnimationManager;

    public static getInstance(): BTAnimationManager {
        if (BTAnimationManager.instance === undefined) {
            BTAnimationManager.instance = new BTAnimationManager()
        }
        return BTAnimationManager.instance
    }

    public shouldAnimateHeader(): boolean {
        return !BTAnimationManager.headerHasBeenAnimated;
    }

    public shouldAnimateHeroPage(): boolean {
        return !BTAnimationManager.heroPageHasBeenAnimated;
    }
    
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