import { Collegue } from "../models/Collegue";
import { v4 as uuid } from 'uuid';

import { getMaxListeners } from 'cluster';

 export let collegueMock =new Collegue(uuid(),
'Nico',
'Marrion',
new Date("1992-03-16"),
'NicoMarrion@getMaxListeners.com',
'www.googlExp.com');



