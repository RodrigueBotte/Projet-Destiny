type melee = {titre: string, img: string, desc: string};
type ulti = {titre: string, img: string, desc: string}
type grenade = {titre: string, img: string, desc: string}
type fragment = {titre: string, img: string, desc: string}
type aspect = {titre: string, img: string, desc: string}
export enum Classes{hunter="Chasseur", warlock="Arcaniste", titan="Titan"}
export interface Doctrine{
    classe: Classes|string;
    name: string;
    super: ulti[];
    melee: melee[];
    grenade: grenade[];
    fragment: fragment[];
    aspect: aspect[]
    
}