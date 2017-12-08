// Select color input
var colorPicker = $('#colorPicker');

// Select size input
var heightInput = $('#input_height');
var widthInput = $('#input_width');

// When size is submitted by the user, call makeGrid()
$(':button').click(makeGrid);
//$(':submit').click(makeGrid);

function makeGrid() {
    $('tr').remove();
    
    var table = $('pixel_canvas');
    
    var rows = heightInput.val();
    var cols = widthInput.val();
    
    for(var y = 0; y < rows; y++){
        var htmlRowString = '<tr>';
        
        for(var x = 0; x < cols; x++){
            htmlRowString += "<td></td>";
        }
        htmlRowString += '</tr>';
        $('table').append(htmlRowString);
    }
    
    $('td').on('click', function(){
        $(this).css('background',colorPicker.val());
    })
}


