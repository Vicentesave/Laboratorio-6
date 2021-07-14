$(".agregar" ).click(function(e) {
    e.preventDefault();
    var listText = $("#newText").val();

    $(`<div class="divLista">
        <li class="lis">

            <p class="itemShop">
            ${listText}<br><br>
                <button class="checar">Check</button>
                <button class="del">Delete</button>
            </p>
            
        </li>
    
    </div>`).appendTo(".Lista"); 
});

$(".Lista").on("click", ".checar", function() {
    $(this).parent().toggleClass("chec");
});