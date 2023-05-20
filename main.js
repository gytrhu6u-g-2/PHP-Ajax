$(function(){
    $("#send").on("click", function(event){
        let id = $("#main").val();
        $.ajax({
            type: "POST",
            url: "phpSide.php",
            data: {"id" : id},
            dataType: "json"
        })
        .done(function(data){
            $("#return").append('<p> '+data.id+' : '+data.school+' : '+data.skill+'</p>')
        })
        .fail(function(XMLHttpRequest, status, e){
            alert(e);
        })
    })
})