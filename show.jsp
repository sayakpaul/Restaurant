<center><h1>KING OF PASTA</h1>
<h2>BOOKINGS:</h2>
<%@include file="connect.jsp" %>
<%
	try{
		PreparedStatement pst = con.prepareStatement("select * from seating");
		ResultSet rs = pst.executeQuery();
		
		while(rs.next())
		{	
			
			
			String mail=rs.getString(1);
			String seat=rs.getString(2);
			String date=rs.getString(3);
			String branch=rs.getString(4);
			out.println("<h4>Email-Id: "+mail); %><br>
		<%      out.println("No. of Seats: "+seat); %> <br>
			<% out.println("Date: "+date); %> <br>
			<% out.println("Branch: "+branch); %> <br><br>
		
		
	<%

		} %>
	     <a href="index.html">RETURN TO HOME</a>
	<%
		
	}
	catch(Exception e){out.println(e);}
%>
