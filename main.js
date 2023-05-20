$(function(){
    $("#send").on("click", function(event){
        let id = $("#id").val();
        let name = $("#name").val();
        let age = $("#age").val();
        $.ajax({
            type: "POST",
            url: "phpSide.php",
            data: {
                "id" : id,
                "name" : name,
                "age" : age
            },
            dataType: "json"
        })
        .done(function(data){
            if(data.id == "" || data.name == "" || data.age == ""){
                alert("すべての項目に入力してください");
                return false
            }
            $("#return").append('<p> ID:'+data.id+' 　名前: '+data.name+' 　年齢: '+data.age+'</p>')
        })
        .fail(function(XMLHttpRequest, status, e){
            alert(e);
        })
    })
})