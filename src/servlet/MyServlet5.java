package servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import http.Post;

/**
 * Servlet implementation class MyServlet
 */
@WebServlet("/MyServlet5")
public class MyServlet5 extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * Default constructor. 
     */
    public MyServlet5() {
    	
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		System.out.println("passGet");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		System.out.println("passPost");
		
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.addHeader("Content-type", "text/plain");
		response.addHeader("cross-domain", "true");
		
		Integer user = new ObjectMapper().readValue(request.getReader(), Integer.class);
		
		System.out.println(user.toString());
		
		Post p = new Post();
		response.getWriter().append(p.send("http://localhost:4000/user_orders_list", "user_id=" + user.toString()));
		
		System.out.println("passPost2");
	}

}
