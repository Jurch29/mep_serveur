package servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import base.Base;
import bean.User;
import bean.User_register;

/**
 * Servlet implementation class ServletRegister
 */
@WebServlet("/ServletSaveTrip")
public class ServletRegister extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ServletRegister() {
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
		User_register u = new ObjectMapper().readValue(request.getReader(), User_register.class);

		Base bdd = new Base();
		
		if (u.getMail() == "" || u.getMdp() == "" || u.getName() == "") {
			response.getWriter().append("error");
		}
		
		else if (bdd.verifyUser(u)) {
			response.getWriter().append("exist");
		}
		else
		{
			bdd.enregistrerUser(u);
			response.getWriter().append("added");
		}

		bdd.fermer();
	}
}
