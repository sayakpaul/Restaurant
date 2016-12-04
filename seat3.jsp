<%@include file="connect.jsp" %>

<%
	try{
		PreparedStatement pst = con.prepareStatement("insert into seating values(?,?,?,?)");
		pst.setString(1,request.getParameter("n2"));
		pst.setString(2,request.getParameter("n1"));
		pst.setString(3,request.getParameter("n3"));
		pst.setString(4,request.getParameter("n4"));
		int t=pst.executeUpdate();
		if(t>0)
		{
			response.sendRedirect("seat4.html");
		}
		con.close();
	}
	catch(Exception e){out.println(e);}
%>