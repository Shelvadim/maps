import {User} from './User';
import {Company} from './Company';
import {CustomMap} from './CustomMap';

const user = new User();
const company = new Company();

console.log(user);
console.log(company);

const customMap = new CustomMap('map'); 

customMap.addMarker(user);
customMap.addMarker(company);

//  git init.
//git remote add origin https://github.com/Shelvadim/maps.git
//git add -A
//git commit -m "Message you would like to put"
//git push origin master


//parcel index.html

//npm install @types/googlemaps
//npm install @types/faker