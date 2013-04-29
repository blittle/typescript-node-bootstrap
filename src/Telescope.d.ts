export interface TelescopeInterface {
    start(): TelescopeInterface;
    stop(): TelescopeInterface;
    isOn(): bool;
}
export class Telescope implements TelescopeInterface {
    public name: string;
    private on;
    constructor(name: string);
    public start(): Telescope;
    public stop(): Telescope;
    public isOn(): bool;
    static getZenith(date?: Date): Object;
    private static getCoord(date);
}
