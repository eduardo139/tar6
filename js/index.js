// Funcionalidad de agregar items
$(".agregar").on('click',function(b){
    b.preventDefault()

    var divItem = $("<div>")
    divItem.attr("class","itemClass")

    var item = $("<li>")
    item.attr("class","lis")
    divItem.append(item)

    var name = $("<p>")
    name.text($("#newText").val())
    name.attr("class","itemShop")
    item.append(name)

    var checkbtn = $("<button>")
    checkbtn.text("Check")
    checkbtn.attr("class","checar")
    item.append(checkbtn)

    var delbtn = $("<button>")
    delbtn.text("Delete")
    delbtn.attr("class","del")
    item.append(delbtn)

    var par = $("<p>")
    item.append(par)

    $(".Lista").append(item)
})

// Funcionalidad de check
$(".Lista").on('click','.checar',function() {
    $(this).parent().toggleClass('chec')
})

// Funcionalidad de delete
$(".Lista").on('click','.del',function() {
    $(this).parent().remove()
})