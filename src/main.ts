import { Building } from './Building';
import { ResidentialBuilding } from './ResidentialBuilding';
import { CommercialBuilding } from './CommercialBuilding';

let r = new ResidentialBuilding( 'Deluxe Str.', 12, 100 );
r.addResident();

let c = new CommercialBuilding( 'Wall Str.', 1, 500 );
c.addShop().addShop().addShop();

let buildings: Building[] = [];
buildings.push( r );
buildings.push( c );

document.getElementsByClassName( 'js-app' )[0]
    .innerHTML = `
<p>Residential Property Tax: ${r.getPropertyTax()}</p>
<p>Commercial Property Tax: ${c.getPropertyTax()}</p>
`;