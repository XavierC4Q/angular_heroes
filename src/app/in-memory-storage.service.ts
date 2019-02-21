import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../classes/hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryStorageService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Galticus', power: 'Shrink and Grow' },
      { id: 2, name: 'Mera', power: 'Invisibility' },
      { id: 3, name: 'Rigax', power: 'Metal skin' },
      { id: 4, name: 'Xavi', power: 'Flames and Flight' },
      { id: 5, name: 'Je-Tali', power: 'Possession' },
      { id: 6, name: 'Mug', power: 'Read thoughts' },
      { id: 7, name: 'Sorel', power: 'Mind control' },
      { id: 8, name: 'Zanzibaar', power: 'Controls sand' },
      { id: 9, name: 'Asur', power: 'Animal control' },
      { id: 10, name: 'Vagary', power: 'Rubber body' },
      { id: 11, name: 'Loki', power: 'Fear inducing' },
      { id: 12, name: 'Omega', power: 'Super strength and speed' },
      { id: 13, name: 'Uil', power: 'Ice' },
    ];

    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

}
