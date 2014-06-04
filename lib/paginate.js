
module.exports = function paginator(page,page_count,pt_count,glue){
    pt_count = pt_count || 9;
    glue = glue || '...';
    var i,
        pages = [];
    if (page_count <= pt_count) {
        for (i = 1; i <= page_count; i++)
            pages.push(i);
        } else {
            if (page < pt_count - 2) {
                for (i = 1; i <= pt_count - 2; i++)   pages.push(i);
                pages.push(glue);
                pages.push(page_count); //last
            } else if (page > page_count - pt_count + 2) {
                pages.push(1);
                pages.push(glue);
                for (i = page_count - pt_count + 2; i <= page_count; i++)
                    pages.push(i);
            } else {
                pages.push(1);
                pages.push(glue);
                for (i = page - Math.round((pt_count - 5) / 2); i <= page + Math.round((pt_count - 5) / 2); i++)
                    pages.push(i);
                pages.push(glue);
                pages.push(page_count);
            }
        }
    return pages;
}