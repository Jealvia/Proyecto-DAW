(function(){
    $.ajax({
        type:"GET",
        url: "data/news.xml",
        contentType: "text/xml",
        dataType: "xml",
        success: Onsuccess
    })

    function Onsuccess(data){
        var row=0
        var col1=1
        var col2=2
        $(data).find('new').each(function(){
            var sTitle = $(this).find('tittle').text();
            var sText = $(this).find('body').text();
            var sUrl = $(this).find('imagen').text();
            $("<div class='row' id=''></div>").appendTo("#noticias").attr('id',row);
            $("<h3></h3>").html(sTitle).appendTo("#"+row);
            $("<div class='col-sm-7' id=''></div>").appendTo("#"+row).attr('id',col1);
            $("<p class='text-justify'></p>").html(sText).appendTo("#"+col1);
            $("<div class='col-sm-5' id=''></div>").appendTo("#"+row).attr('id',col2);
            $("<img class='img-responsive img-fluid imgtitulares' src=''></img>").appendTo("#"+col2).attr('src' , sUrl);
            row=row+3;
            col1=col1+3;
            col2=col2+3;
        });
    }
})();
