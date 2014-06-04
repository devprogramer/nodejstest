Paginate
============



Quick Start
-----------


var  paginate = require("nodejstest"),
    page = 3,
    page_count = 10000,
    pt_count = 10,
    glue = "...";
console.log(paginate(page,page_count,pt_count,glue));