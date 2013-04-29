import Telescope = module ('Telescope');
export class AutoScope extends Telescope.Telescope {
    public name: string;
    constructor(name?: string);
    public start(): AutoScope;
    private bootup();
}
