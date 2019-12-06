const bodyParser=require('body-parser')
 let list=[
     {
        'img':'https://cn.vuejs.org/images/logo.png',
        'title':'渐渐的，成为了最讨厌的自己'
     },
     {
        'img':'https://cn.vuejs.org/images/logo.png',
        'title':'渐渐的，成为了最讨厌的自己'
     },  {
        'img':'https://cn.vuejs.org/images/logo.png',
        'title':'渐渐的，成为了最讨厌的自己'
     },  {
        'img':'https://cn.vuejs.org/images/logo.png',
        'title':'渐渐的，成为了最讨厌的自己'
     },  {
        'img':'https://cn.vuejs.org/images/logo.png',
        'title':'渐渐的，成为了最讨厌的自己'
     },
 ]
module.exports={
    devServer:{
        before(app){
            app.use(bodyParser.json())
            app.get('/api/list',(req,res)=>{
                  res.send({
                      code:200,
                      data:list
                  })
            })
        }
    }
}