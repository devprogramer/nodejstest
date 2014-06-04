var paginate = require('./lib/paginate');
var page = 3,
    page_count = 10,
    pt_count = 100,
    glue = "...";
    

console.log(paginator(page,page_count,pt_count,glue));