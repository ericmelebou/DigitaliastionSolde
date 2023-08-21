import { Injectable } from '@angular/core';
import { IEtat } from '../_interfaces/etat';
import { IPrestation } from '../_interfaces/prestation';
import { IReclamation } from '../_interfaces/reclammation';
import { IStructure } from '../_interfaces/structure';
import { IUser } from '../_interfaces/agent';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  public filterObjectLists<T extends IPrestation | IReclamation | IStructure | IUser | IEtat>(criteria: string, objectList: T[]) {
    criteria = criteria.toLocaleLowerCase()
    const res = objectList.filter(
      (object: T) => {
        const lowerCaseProps = [
          'nom',
          'libelle',
          'label',
          'sigle',
          'prenoms',
          'firstname',
          'lastname',
          'role',
          'montant',
          'motif',
          'description',
          'email',
          'referenceDossier',
          'telephone',
        ].map(prop => {
          const val = object[prop as keyof T];
          return typeof val === 'string' ? val.toLocaleLowerCase() : val;
        });

        const montant = 'montant' in object ? object['montant'] as number : undefined;

        return lowerCaseProps.some(prop => typeof prop === 'string' && prop.includes(criteria)) ||
               (montant !== undefined && montant === +criteria);
      }
    );

    return res;
  }

}
