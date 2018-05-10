$(function () {

    $('#search').click(function(){
        $('#searchresult').empty();
        var keyword = $('#keyword').val();
        var type = $('#type').val();
        var radius = $('#radius').val();
        PlaceSearch.Search(keyword, type, radius).then(function(data){
            for(var i=0;i<data.length;i++){
                if(data[i].rating == "undefined" || data[i].rating == 0 || data[i].rating == null){
                    data[i].rating = 0;
                }
                var row = '<div class = "col-12 col-8 col-md-4" style="padding-bottom: 25px;">' +
                '<div>'+
                '<a href="detail.html?placeid=' + data[i].id + '">' +
                '<p>' + data[i].name + '</p>' +
                '<div><img src=' + data[i].photo + ' class="thumbnail" height="300" width="300" /> </div>'+
                '<div>' ;
                if(data[i].rating != null){
                    for (var j = 0; j < data[i].rating; j++) {
                        
                        row += '<span class="icon-star3"></span>';
                    }
                }
                
                row += '</div>' +
                '</div>'+'</a>'+'</div>';
                
                $('#searchresult').append(row);
            }
        });
    });    
});