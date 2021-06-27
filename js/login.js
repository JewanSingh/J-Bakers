function login()
{  
   var v1 = document.getElementById("uname").value;
   var v2 = document.getElementById("pwd").value;
	if ((v1 == 'admin') &&
	   (v2 ==  '12345'))
	{
	  alert('welcome');	
	  window.location.href = "home.html";

	}
	else
	{
	  alert('Invalid User or Password Login, LOGIN WITH DEFAULT (admin,12345)');
	  document.getElementById("uname").value = "";
	  document.getElementById("pwd").value = "";
	}
}

	 
	 