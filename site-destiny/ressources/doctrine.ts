export enum Classes{hunter="Chasseur", warlock="Arcaniste", titan="Titan"}
export interface Doctrine{
    classe: Classes|string;
    name: string;
    super: string[];
    melee: string[];
    grenade: string[];
    fragment: string[];
    aspect: string[]

}