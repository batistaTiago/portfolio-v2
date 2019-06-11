export class AnimationManager {

    private constructor() { }

    private instance: AnimationManager;
    public static getInstance(): AnimationManager {
        
        if (this.instance === undefined) {
            this.instance = new AnimationManager()
        }
        return this.instance
    }

    private static headerHasBeenAnimated: boolean = false    

    public shouldAnimateHeader(): boolean {
        return !AnimationManager.headerHasBeenAnimated;
    }





    private heroPageHasBeenAnimated: boolean = false
    public shouldAnimateHeroPage(): boolean {
        return !AnimationManager.heroPageHasBeenAnimated;
    }
    private contactPageHasBeenAnimated: boolean = false
    public shouldAnimateContactPage(): boolean {
        return !AnimationManager.contactPageHasBeenAnimated
    }

    public animationDidFinish(event: AnimationEvent) {
        const target = <HTMLElement>event.target
        if (target.classList.contains('titles-container-animation')) {
            AnimationManager.heroPageHasBeenAnimated = true
        } else if (target.classList.contains('form-animation')) {
            AnimationManager.contactPageHasBeenAnimated = true
        }
    }
}