import IMG1 from '../../assets/portfolio1.jpg';

class site {
    constructor(
        public id:number,
         public img:string,
         public title:string, 
         public github:string, 
         public live:string){}
}


export const data:site[] =[
    new site(
        1,
        IMG1,
         'title',
        'http://github.com',
        'http://github.com'
    ),
    new site(
        2,
        IMG1,
         'title',
        'http://github.com',
        'http://github.com'
    ),
    new site(
        3,
        IMG1,
         'title',
        'http://github.com',
        'http://github.com'
    ),
    new site(
        4,
        IMG1,
         'title',
        'http://github.com',
        'http://github.com'
    ),
    new site(
        5,
        IMG1,
         'title',
        'http://github.com',
        'http://github.com'
    ),
    new site(
        6,
        IMG1,
         'title',
        'http://github.com',
        'http://github.com'
    ),
]