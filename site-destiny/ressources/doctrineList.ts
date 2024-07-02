import { Doctrine, Classes } from "./doctrine";

export const DOCTRINE: Doctrine[] = [
    {
        classe: Classes.warlock,
        name: "Abyssal",
        super: [
            {titre: "Distorsion Nova", img: "distorsion.png", 
                desc: `Réduction de dégats: 90%.
                        Durée de basse: 24.5s, ou draine 4.1% de super par seconde.
                        
                        Attaque légère:
                        Draine 5% du super.
                        Inflige 776 de dégats sur 5m. L'attaque peut être chargé pendant 0.6s, augmentant de façon linéaire les dégats jusqu'à 120%, rend les cibles volatiles et augmente la distance de dégats. Une fois chargé au maximum, le drain du super augmente et la vitesse de déplacement est diminuée.

                        Attaque Lourde/Sprint:
                        Effectue un dash, drainant 3.5% du super pour accélérer rapidement l’accélération vers la direction d’entrée actuelle, sinon en arrière si aucune n’est entrée.
                        `},          
            {titre: "Bombe Nova: Vortex", img: "vortex.png", 
                desc: `Réduction de dégats: 90%.
                        Réalise un mouvement rapide, tire en arc de cercle une bombe Nova qui explose à l'impact, infligeant 4290 dégats sur une certaine distance.
                        Créé une Singularité après 0.43 secondes suivant la détonation, et attire instannément les ennemis.
                        La Singularité inflige 75 dégats toutes les 0.13 secondes pendant 10 secondes sur une certaine distance.`},          
            {titre: "Bombe Nova: Cataclisme", img: "cataclisme.png", 
                desc: `Réduction de dégats: 90%. 
                        Réalise un mouvement ralenti, la bombe Nova traque et explose à l'impact, ou peut être déclenché, infligeant 4680 de dégats sur un certaine distance.
                        Puis se divise en 6 petites nova traqueueses, qui se déplacent lentement, infligeant 936 dégats sur un petit rayon.
                        Les deux peuvent être détruit dans les airs`},          

        ],
        melee: [
            {titre: "Singularité de Poche", img: "singularite.png", desc: "Lance une boule instable d'énergie abyssal. Singularité va azu contact de l'ennemi le plus proche sur 2 metre, explose au contact. L’explosion frappe les ennemis à moins de 3,75 mètres de l’explosion, inflige 353 dégats et applique Volatile."},
        ],
        grenade: [
            {titre: "Grenade à Vortex", img: "greVortex.png", desc: "blablablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},
            {titre: "Décharge d'Axions", img: "greAxion.png", desc: "blablablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},
            {titre: "Grenade Magnétique", img: "greMagne.png", desc: "blablablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},
            {titre: "Grenade à Dispersion", img: "greDisper.png", desc: "blablablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},
            {titre: "Grenade Incapacitante", img: "greIncapa.png", desc: "blablablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},
            {titre: "Mur Abyssal", img: "murAbyssal.png", desc: "blablablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},
            {titre: "Pic Abyssal", img: "picAbyssal.png", desc: "blablablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},
        ],
        fragment: [
            {titre: "Abysse Rassasié", img: "AbysseRass.png", desc: "blablablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},          
            {titre: "Catalyse du Chaos", img: "catalyse.png", desc: "blablablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},          
            {titre: "Enfant des Dieux Anciens", img: "enfantDieu.png", desc: "blablablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},          

        ],
        aspect: [
            {titre: "Echo de Famine", img: "famine.png", desc: "blablablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},          
            {titre: "Echo d'Obscurité", img: "obscurite.png", desc: "blablablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},          
            {titre: "Echo de Récolte", img: "recolte.png", desc: "blablablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},          
            {titre: "Echo d'Instabilité", img: "instabilite.png", desc: "blablablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},          
            {titre: "Echo de Dilatation", img: "dilatation.png", desc: "blablablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},          
            {titre: "Echo d'autorité", img: "autorite.png", desc: "blablablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},          
            {titre: "Echo de Parasite", img: "parasite.png", desc: "blablablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},          
            {titre: "Echo de Persévérence", img: "perseverence.png", desc: "blablablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},          
            {titre: "Echo de Démoralisation", img: "demoralisation.png", desc: "blablablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},          
            {titre: "Echo de Représailles", img: "represaille.png", desc: "blablablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},          
            {titre: "Echo de Vestiges", img: "vestige.png", desc: "blablablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},          
            {titre: "Echo d'Echange", img: "echange.png", desc: "blablablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},          
            {titre: "Echo de Provision", img: "provision.png", desc: "blablablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},          
            {titre: "Echo d'Expulsion", img: "expulsion.png", desc: "blablablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},          
            {titre: "Echo de Cessation", img: "cessation.png", desc: "blablablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},          
            {titre: "Echo de Vigilance", img: "vigilance.png", desc: "blablablaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},          

        ]
    },
    {
        classe: Classes.warlock,
        name: "Solaire",
        super: [
            
        ],
        melee: [
            
        ],
        grenade: [
            

        ],
        fragment: [
            
        ],
        aspect: [
            
        ]
    },
    {
        classe: Classes.warlock,
        name: "Cryo-Electrique",
        super: [
            
        ],
        melee: [
            
        ],
        grenade: [
            

        ],
        fragment: [
            
        ],
        aspect: [
            
        ]
    }
]