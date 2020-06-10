$(function(){
    $('#btn').click(function(){
        var link = $('#link').val();
        var username = $('#username').val();
        var content = $('#content').val();
        var avatar = $('#avatar').val();
        if (link==null || link=="",content==null || content=="") {
            alert("Are you actually stupid? Fill out the inputs, godammit.");
            return false;
        }
        $.post(link, {"content": content, "username": username, "avatar_url": avatar,});

    });
});
