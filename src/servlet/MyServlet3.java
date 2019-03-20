package servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONException;

import com.fasterxml.jackson.databind.ObjectMapper;

import http.Post;
import modele.Comment;

/**
 * Servlet implementation class MyServlet
 */
@WebServlet("/MyServlet3")
public class MyServlet3 extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * Default constructor. 
     */
    public MyServlet3() {
    	
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
		
		Comment comment = new ObjectMapper().readValue(request.getReader(), Comment.class);
		
		System.out.println(comment.toString());
		
		Post p = new Post();
		try {
			response.getWriter().append(p.send("http://localhost:4000/save_comment", comment.getCommentAsString()));
		} catch (JSONException e) {
			e.printStackTrace();
		}
		
		System.out.println("passPost2");
	}

}
