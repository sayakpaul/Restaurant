<%@page import="java.sql.*" %>
<%!
	Connection con= null;
%>
<%
	try{
		Class.forName("oracle.jdbc.OracleDriver");
		con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE","system","03324165667");
	}
	catch(Exception e){}
%>