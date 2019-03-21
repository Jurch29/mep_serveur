package servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.fasterxml.jackson.databind.ObjectMapper;

import http.Post;

/**
 * Servlet implementation class ServletRegister
 */
@WebServlet("/ServletUserId")
public class ServletUserId extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ServletUserId() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		HttpSession session = request.getSession();
		if (session.getAttribute("connected") != null && (boolean)session.getAttribute("connected") != false)
		{
			System.out.println("passPost");
			
			response.setHeader("Access-Control-Allow-Origin", "*");
			response.addHeader("Content-type", "text/plain");
			response.addHeader("cross-domain", "true");
			
			String user_email = request.getReader().readLine();
			System.out.println(user_email);
			
			Post p = new Post();
			response.getWriter().append(p.send("http://localhost:4000/user_id_from_email", "user_mail=" + user_email.toString()));
			
			System.out.println("passPost2");
		}
	}
}
