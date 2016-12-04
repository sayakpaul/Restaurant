<%@include file="connect.jsp" %>
<html>
<head>
<script language="javascript">
function check()
{
	var n1=document.getElementById('n1').value;
	var n2=document.getElementById('n2').value;
	var n3=document.getElementById('n3').value;
	var n4=document.getElementById('n4').value;
	if(n1=="" || n2=="" || n3=="" || n4=="")
	{
		alert("All fields are necessary.");
		return false;
	}
	else
		return true;
	
}
</script>
</head>
<body>
<form action=seat3.jsp method=post onsubmit="return check();">

<center><h1>ENTER THE FOLLOWING DETAILS:</h1></center>
<table border=2 align="center">
<tr>
<td><font color=red>*</font>Please Enter the Date once again:</td>
<td><input type=date name=n3 id=n3></td>
</tr>
<tr>
<td><font color=red>*</font>Email-id:</td>
<td><input type=text name=n2 id=n2></td>
</tr>
<tr>
<td><font color=red>*</font>Branch:</td>
<td><select name=n4 id=n4>
	<option>select</option>
	<option value=Gariahat>Gariahat</option>
	<option value=Hatibagan>Hatibagan</option>
	<option value=Parkstreet>Parkstreet</option>
</select>
</td>
</tr>
<tr>
<td><font color=red>*</font>Number of seats:</td>
<td><input type=text name=n1 id=n1></td>
</tr></table><br><br>
<center><button>Submit</button></center></center>
</form></body></html>