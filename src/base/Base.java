package base;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ResourceBundle;

import bean.User;
import bean.User_register;

public class Base {
	
	static {
		try {
			Class.forName
				("com.mysql.jdbc.Driver").
					newInstance();
		} catch (InstantiationException e) {
			e.printStackTrace();
		} catch (IllegalAccessException e) {
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}	
	}
	
	Connection connection = null;
	
	public Base() {
		String url = null;
		String user = null;
		String password = null;

		try {
			ResourceBundle rs = 
			ResourceBundle.getBundle("base/config");
			url = rs.getString("url");
			user = rs.getString("user");
			password = rs.getString("password");
		}
		catch (Exception e) {
			System.out.println("Erreur acces ressources "+e.getMessage());
		}
		
		try  {
			connection = DriverManager.getConnection(url, user, password);
		}
		catch (Exception e) {
			System.out.println("Erreur connexion "+e.getMessage());
		}
	}
	
	public void fermer() {
		try {if (connection != null) connection.close();} catch (Exception e) {}
	}
	
	public boolean verifyUser(User_register u)  {
		boolean res = false;
		String sql = "SELECT * FROM Users WHERE user_mail = '"+u.getMail()+"'";
		//System.out.println(sql);
		try {
		 PreparedStatement ps = connection.prepareStatement(sql);
		 ResultSet rs = ps.executeQuery();
		 res = rs.next();
		} catch (Exception e) {
			System.out.println("Erreur verifyuser "+e.getMessage());
		}
		return res;
	}
	
	public boolean enregistrerUser(User_register u)  {
		boolean res = false;
		String sql = "insert into Users (user_name, user_passwd, user_mail) values (?, ?, ? )";
		try {
			PreparedStatement ps = connection.prepareStatement(sql);
			ps.setString(1, u.getName());
			ps.setString(2, u.getMdp());
			ps.setString(3, u.getMail());

			int nb = ps.executeUpdate();
			if (nb == 1) res = true;

		} catch (Exception e) {
			System.out.println("Erreur enregistreuser "+e.getMessage());
		}
		return res;
	}
	
	public String getUser(User u)  {
		String res = null;

		String sql = "SELECT user_name FROM Users WHERE user_mail = '"+u.getLogin()+"' AND user_passwd = '"+u.getMdp()+"'";

		try {
		 PreparedStatement ps = connection.prepareStatement(sql);
		 ResultSet rs = ps.executeQuery();
		 
		 if (! rs.next())
			 res = "-1";
		 else
			 res = rs.getString("user_name");
		 
		} catch (Exception e) {
			System.out.println("Erreur verifyuser "+e.getMessage());
		}
		return res;
	}
}
