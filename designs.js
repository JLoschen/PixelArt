// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    //clear table
    $('colgroup').remove();
    $('tr').remove();
    $('tbody').remove();
    
    var table = $('pixel_canvas');
    
    var rows = $('#input_height').val();
    var cols = $('#input_width').val();
    
    $('#pixel_canvas').append(`<colgroup></colgroup>`);
    var colGroup = $('colgroup');
    for(var i = 0; i < cols; i++){
        colGroup.append(`<col style="width: 20px">`);
        console.log('adding col');
    }
    
    for(var y = 0; y < rows; y++){
        var htmlRowString = '<tr>';
        
        for(var x = 0; x < cols; x++){
            htmlRowString += "<td></td>";
        }
        htmlRowString += '</tr>';
        console.log('adding' + htmlRowString);
        $('table').append(htmlRowString);
    }
    
    $('td').on('click', function(){
        var backgroundColor = $(this).css('background-color');
        
        if($(this).hasClass('colored-background')){
            $(this).attr('style','');
            $(this).toggleClass('colored-background');
        }else{
            $(this).toggleClass('colored-background');
            var myColor = $('#colorPicker').val();
            $(this).css('background', myColor);        
        }
    })
}

$(':button').on('click', makeGrid);
