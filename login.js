
function linkOnClick(i) {
	var links = document.querySelectorAll('.logineLine>div>a');
	for(let a = 0; a < links.length; a++){
		if(a == i) links[a].setAttribute('index', 1)
		else links[a].setAttribute('index', 0)
	}
}

function checValue() {
	var username = document.querySelector('#username');
	var password = document.querySelector('#password');
	if(!username.value){
		alert('请输入账号');
		return 0
	}
	if(!password.value) {
		alert('请输入密码');
		return 0
	}
	window.location.href = './index.html'
}

window.onload = function() {
	
	
}