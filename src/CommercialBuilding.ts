import {Building} from './Building';

export class CommercialBuilding extends Building {
    static taxRate: number = 0.1;
    constructor( street, houseNo, valuePerUnit ) {
        super( street, houseNo );
        this.valuePerUnit = valuePerUnit;
        this.capacity = 5;
    }
    addShop(): CommercialBuilding {
        this.used = Math.min( this.capacity, this.used + 1 );
        return this;
    }
    getPropertyTax(): number {
        return CommercialBuilding.taxRate * this.valuePerUnit * this.used;
    }
}