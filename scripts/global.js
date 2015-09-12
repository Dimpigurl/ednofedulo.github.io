$(document).foundation();

function EnviaFormulario(){
	var a=$("#nome").val(),b=$("#email").val(),c=$("#gotcha").val(),d=$("#conteudo").val();  
	
	if(!a||!b||!d)
		return;

	var b={nome:a,email:b,_gotcha:c,conteudo:d};

	$.ajax({
		url:"http://formspree.io/edno.moraes+website@gmail.com"
		,method:"POST"
		,data:b
		,dataType:"json"
		,complete:function(){
			$("#nome").val("");
			$("#email").val("");
			$("#conteudo").val("");
			$("#contactform").foundation("reveal","close");
			$("#modalConfirmacao").foundation("reveal","open");
		}
	})
}

$("#formContato").submit(function(event){
	EnviaFormulario();
	event.preventDefault();
});

$("#btnAbreForm").click(function(e){
	if(IsMobile()){
		location.href="mailto:edno.moraes+website@gmail.com";
	}else{
		$("#contactform").foundation("reveal","open");
	}
});

function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function IsMobile(){
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}