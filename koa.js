const Koa = require('koa');
const app = new Koa();

const Router = require('koa-router');
const router = new Router();


router.get('/', ctx =>{
    ctx.status = 200;
    ctx.body = '<h1> Index Sayfasına Hoş Geldiniz!</h1>';
  });

router.get('/hakkimda', ctx =>{
    ctx.status = 200;
    ctx.body = '<h1>Hakkımda Sayfasına Hoş Geldiniz!</h1>';
  });

router.get('/iletisim', ctx =>{
    ctx.status = 200;
    ctx.body = '<h1>İletişim Sayfasına Hoş Geldiniz!</h1>';
  });


app.use(router.routes());

const port = 3000;

app.listen(port, () =>{
    console.log(`Sunucu port ${port}'de başlatıldı`)
 });