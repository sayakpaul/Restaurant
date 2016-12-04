<%@include file = "connect.jsp" %>
<%
	try{
		PreparedStatement pst = con.prepareStatement("select * from admin where id=? and password=?");
		pst.setString(1,request.getParameter("id"));
		pst.setString(2,request.getParameter("password"));
		ResultSet rs = pst.executeQuery();
		if(rs.next())
		{
			session.setAttribute("id",rs.getString(1));
			response.sendRedirect("admin2.html");
		}
		else
		{
			%>
		<font color=red>Invalid UserID or password</font>
		<%@include file="index.html" %>
		<%
		}
			con.close();
		}
		catch(Exception e){out.println(e);}
%>