package servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/ServletTest")
public class ServletTest extends HttpServlet {
	
	private static final long serialVersionUID = 1L;
    
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ServletTest() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("Servlet doGet");
		
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("Servlet do Post");
		//System.out.println(request.getParameter("login"));
		
		/*
		JsonGenerator generator = new JsonFactory();
		createGenerator(response.getOutputStream());
		generator.setCodec(new ObjectMapper());
		generator.writeObject(object_a_convert);
		generator.close();
		*/
		
		/*
		Object o = request.getParameter("name parameters");
		response.getWriter().append("coucou");//coucou=>o
		response.sendRedirect("url");*/
		
		//response.getWriter().println("{}");*/
	}

}
