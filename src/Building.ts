export interface TaxableProperty {
    getPropertyTax(): number;
}

export abstract class Building implements TaxableProperty {
    constructor( street, houseNo ) {
        this.used = 0;
        this.street = street;
        this.houseNo = houseNo;
    }
    valuePerUnit: number;
    capacity: number;
    used: number;
    street: string;
    houseNo: number;
    abstract getPropertyTax(): number;
    get address(): string {
        return this.street + ' ' + this.houseNo;
    }
    set address( address: string ) {
        let tokens = address.split(' ');
        let houseNo = parseInt( tokens.pop() );
        if ( houseNo > 0 ) {
            this.houseNo = houseNo;
            this.street = tokens.join(' ');
        } else {
            throw new Error( 'Invalid address' );
        }
    } 
}