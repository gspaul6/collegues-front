import { Collegue } from "../models/Collegue";
import { v4 as uuid } from 'uuid';



 //export let collegueMock =new Collegue(uuid(),
//'Nico',
//'Marrion',
//new Date("1992-03-16"),
//'NicoMarrion@getMaxListeners.com',
//'https://quotevision.net/wp-content/uploads/2018/11/funny-quotes-funny-gym-memes-that-will-make-you-laugh-from-crossfit-and-exercise-memes-to-d.jpg');


//export let collegueMockDeux =new Collegue(uuid(),
//'Nico',
//'Marrion',
//new Date("1992-03-16"),
//'NicoMarrion@getMaxListeners.com',
//'www.googlExp.com');

export let collegueMock:Collegue[]=[];
collegueMock.push(new  Collegue("1", "Marty", "Nicolas",new Date(1998, 12, 20), "Martynicolas@email.com",  "http://heqllowqorld.com"));
collegueMock.push(new  Collegue("2", "Oddet", "Rossi",  new Date(1998, 12, 30), "OddetRossi@email.com", "http://heqllowqorld.com"));
collegueMock.push(new Collegue("3", "hufo", "Hugo",  new Date(1998, 12, 20), "Hugohlo@email.com","https://www.kidsworldfun.com/images/funpics/0146b.jpg"));
collegueMock.push(new Collegue("3", "hufo", "Hugo",  new Date(1998, 12, 20), "Hugohlo@email.com","https://www.kidsworldfun.com/images/funpics/0146b.jpg"));
