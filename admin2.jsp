<center><h1>KING OF PASTA</h1>
<h2>USER-FEEDBACKS:</h2>
<%@include file="connect.jsp" %>
<%
	try{
		PreparedStatement pst = con.prepareStatement("select * from j2ee");
		ResultSet rs = pst.executeQuery();
		
		while(rs.next())
		{	
			
			
			String mail=rs.getString(1);
			String name=rs.getString(2);
			String message=rs.getString(3);
			out.println("<h4>Email-Id:"+mail); %><br>
		<%      out.println("Name:"+name); %> <br>
			<% out.println("Message:"+message); %><br><br>
		
		
	<%

		} %>
	<a href="index.html">RETURN TO HOME</a>
	<%
		
	}
	catch(Exception e){out.println(e);}
%>
