import {Building} from './Building';

export class ResidentialBuilding extends Building {
    static taxRate: number = 0.06;
    constructor( street, houseNo, valuePerUnit ) {
        super( street, houseNo );
        this.valuePerUnit = valuePerUnit;
        this.capacity = 10;
    }
    addResident(): ResidentialBuilding {
        this.used = Math.min( this.capacity, this.used + 1 );
        return this;
    }
    getPropertyTax(): number {
        return ResidentialBuilding.taxRate * this.valuePerUnit * this.used;
    }
}