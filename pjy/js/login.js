$('#login-button').click(function (event) {
    var pwd=document.getElementById("pwd").value;
    if(pwd=="970407"){ 
		event.preventDefault();
		$('form').fadeOut(500);
		$('.wrapper').addClass('form-success');
		setTimeout(function(){window.location.href="../pjy/html/animate.html";},2000);
	}
	else{
		alert("哦豁，真笨！");
	}
});
