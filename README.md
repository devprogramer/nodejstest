Paginate
============



Quick Start
-----------

PACKAGE JSON exemple
{
    "version": "0.0.0",
    "description": "ERROR: No README.md file found!",
    "main": "index.js",
    "dependencies": {
        "paginate": "git://github.com/devprogramer/nodejstest.git#master"
    },
    "devDependencies": {},
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "repository": "",
    "author": "",
    "license": "BSD"
}
                                                                    


var  paginate = require("nodejstest"),
    page = 3,
    page_count = 10000,
    pt_count = 10,
    glue = "...";
console.log(paginate(page,page_count,pt_count,glue));