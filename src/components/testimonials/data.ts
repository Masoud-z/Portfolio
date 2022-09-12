import Avatar from '../../assets/avatar1.jpg';
import Avatar2 from '../../assets/avatar2.jpg';
import Avatar3 from '../../assets/avatar3.jpg';
import Avatar4 from '../../assets/avatar4.jpg';

class client{
    constructor(
        public id:number,
        public img: string,
        public name: string,
        public review: string
    ){}
}

export const Clients :client[] =[
    new client(
        1,
        Avatar,
        'Name',
        ' 45g45g4g'
   
    ),
    new client(
        2,
        Avatar2,
        'Name',
        ' g5345g4'
    ),
    new client(
        3,
        Avatar3,
        'Name',
        ' asdasdasd!'
    ),
    new client(
        4,
        Avatar4,
        'Name',
        ' 3r23r2rf345g3g'
    )
]