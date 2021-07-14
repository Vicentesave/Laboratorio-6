$(".agregar" ).click(function(e) {
    e.preventDefault();
    var listText = $("#newText").val();

    if(listText.trim() == "") {
        alert('Write the item first');
        return;
    }

    $(`<div class="divLista">
        <li class="lis">

            <p class="itemShop">
            ${listText}<br><br></p>
                <button class="checar">Check</button>
                <button class="del">Delete</button>
            
            
        </li>
    
    </div>`).appendTo(".Lista");

    listText = '';
    $("#newText").val('');
    
});

$(".Lista").on("click", ".checar", function() {
    $( this ).parent().toggleClass("chec")  
});

$(".Lista").on("click", ".del", function() {
    $( this ).parent().parent().remove();
});