export default {
    name:'testimonials',
    title:'Testimonials',
    type: 'document',
    fields:[
        { 
            name:'name',
            title:'Name',
            type: 'string'
        },
        {
            name:'company',
            title:'Company',
            type:'string'
        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            imgurl: 'imgUrl',
            options: {
              hotspot: true,
            },
        },  
        {
            name:'feedback',
            title:'Feedback',
            type:'string'
        }
    ]
}