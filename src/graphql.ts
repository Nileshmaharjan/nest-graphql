
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class CatInput {
    name?: string;
    age?: number;
    id?: number;
}

export class Cat {
    id?: number;
    name?: string;
    age?: number;
}

export abstract class IMutation {
    abstract createCat(cat?: CatInput): string | Promise<string>;

    abstract updateCat(cat?: CatInput): string | Promise<string>;

    abstract deleteCat(id: string): string | Promise<string>;
}

export abstract class IQuery {
    abstract getCats(): Cat[] | Promise<Cat[]>;

    abstract cats(id: string): Cat | Promise<Cat>;
}
