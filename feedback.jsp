<%@include file="connect.jsp" %>
<%
	try{
		PreparedStatement pst = con.prepareStatement("insert into j2ee values(?,?,?)");		
		pst.setString(1,request.getParameter("email"));
		pst.setString(2,request.getParameter("name"));
		pst.setString(3,request.getParameter("message"));
		int t=pst.executeUpdate();
		if(t>0)
			response.sendRedirect("record.html");
		con.close();
	}
	catch(Exception e){out.println(e);}
%>