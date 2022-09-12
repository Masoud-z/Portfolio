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
        'Name 1',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia magni tenetur ad deleniti dolor voluptate consequuntur, enim placeat distinctio, esse officiis. Voluptatem praesentium quam at, cumque quas omnis dolores similique. '
   
    ),
    new client(
        2,
        Avatar2,
        'NSecond Name',
        ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia magni tenetur ad deleniti dolor voluptate consequuntur, enim placeat distinctio, esse officiis. Voluptatem praesentium quam at, cumque quas omnis dolores similique.'
    ),
    new client(
        3,
        Avatar3,
        'Some Name',
        ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia magni tenetur ad deleniti dolor voluptate consequuntur, enim placeat distinctio, esse officiis. Voluptatem praesentium quam at, cumque quas omnis dolores similique.'
    ),
    new client(
        4,
        Avatar4,
        'Some Another Name',
        ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia magni tenetur ad deleniti dolor voluptate consequuntur, enim placeat distinctio, esse officiis. Voluptatem praesentium quam at, cumque quas omnis dolores similique.'
    )
]