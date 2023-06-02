import { Request, Response } from 'express';
import { Pet } from '../models/pet';
import { createMenuObject } from '../helpers/createMenuObjects';

export const home = (req: Request, res: Response) => {
    // ► Chamada da função de Models line: 135
    let list = Pet.getAll();

    let time: number = new Date().getFullYear();

    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos animais do site',
            background: 'allanimals.jpg',
        },
        list,
        time
    });
};

export const dogs = (req: Request, res: Response) => {
    // ► Filtragem → (Models)
    let list = Pet.getFromType('dog');
    res.render('pages/page', {
        menu: createMenuObject('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg',
        },
        list,
    });
};

export const cats = (req: Request, res: Response) => {
    // ► // ► Filtragem → (Models)
    let list = Pet.getFromType('cat');

    res.render('pages/page', {
        menu: createMenuObject('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg',
        },
        list,
    });
};

export const fishes = (req: Request, res: Response) => {
    // ► Filtragem → (Models)
    let list = Pet.getFromType('fish');

    res.render('pages/page', {
        menu: createMenuObject('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg',
        },
        list,
    });
};
