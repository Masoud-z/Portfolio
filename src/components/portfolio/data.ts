import IMG1 from '../../assets/portfolio1.jpg';

class site {
    constructor(
         public img:string,
         public title:string, 
         public github:string, 
         public live:string){}
}


export const data:site[] =[
    new site(
        IMG1,
         'title',
        'http://github.com',
        'http://github.com'
    ),
    new site(
        IMG1,
         'title',
        'http://github.com',
        'http://github.com'
    ),
    new site(
        IMG1,
         'title',
        'http://github.com',
        'http://github.com'
    ),
    new site(
        IMG1,
         'title',
        'http://github.com',
        'http://github.com'
    ),
    new site(
        IMG1,
         'title',
        'http://github.com',
        'http://github.com'
    ),
    new site(
        IMG1,
         'title',
        'http://github.com',
        'http://github.com'
    ),
]