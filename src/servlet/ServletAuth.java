package servlet;


import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.fasterxml.jackson.databind.ObjectMapper;

import base.Base;
import bean.User;
import http.Post;



/**
 * Servlet implementation class ServletAuth
 */
@WebServlet("/ServletAuth")
public class ServletAuth extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ServletAuth() {
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
		
		User u = new ObjectMapper().readValue(request.getReader(), User.class);
		System.out.println(u.getLogin());
		System.out.println(u.getMdp());
		
		Base bdd = new Base();
		
		HttpSession session = request.getSession(); 
		
		String res = bdd.getUser(u);
		
		if (res != "-1") {
			session.setAttribute("connected", true);
		}
		response.getWriter().append(res);
		
		bdd.fermer();
		
	}
}
