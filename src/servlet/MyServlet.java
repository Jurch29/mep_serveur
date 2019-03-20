package servlet;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.List;
import java.util.stream.Collectors;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

import org.apache.tomcat.util.http.fileupload.IOUtils;

/**
 * Servlet implementation class MyServlet
 */
@WebServlet("/MyServlet")
@MultipartConfig(fileSizeThreshold = 1024 * 1024, maxFileSize = 1024 * 1024 * 5, maxRequestSize = 1024 * 1024 * 5 * 5)
public class MyServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	private int total_photo_number;

    /**
     * Default constructor. 
     */
    public MyServlet() {
    	this.total_photo_number = 0;
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
		
		String images_directory = "/home/ubo/TP/001/test_servlet/WebContent/images/";
		
		int transaction_photo_number = 0;
		
		response.getWriter().append("{\"photos\" : [");
		
		List<Part> fileParts = request.getParts().stream().filter(part -> "image/png".equals(part.getName())).collect(Collectors.toList()); // Retrieves <input type="file" name="file" multiple="true">
	    for (Part filePart : fileParts) {
	        InputStream file_content = filePart.getInputStream();
	        File file = new File("file.txt");
	        file.createNewFile();
	        file.renameTo(new File(images_directory + this.total_photo_number + ".png"));
	        file.setWritable(true);
	        file.setReadable(true);
	        OutputStream output_file = new FileOutputStream(images_directory + this.total_photo_number + ".png");
	        IOUtils.copy(file_content, output_file);
	        output_file.close();
	        if(transaction_photo_number != 0) {
	        	response.getWriter().append(", ");
	        }
	        response.getWriter().append("{\"name\" : \"" + this.total_photo_number + ".png\"" + "}");
	        this.total_photo_number++;
	        transaction_photo_number++;
	    }
	    fileParts = request.getParts().stream().filter(part -> "image/jpeg".equals(part.getName())).collect(Collectors.toList()); // Retrieves <input type="file" name="file" multiple="true">
	    for (Part filePart : fileParts) {
	        InputStream file_content = filePart.getInputStream();
	        File file = new File("file.txt");
	        file.createNewFile();
	        file.renameTo(new File(images_directory + this.total_photo_number + ".jpeg"));
	        file.setWritable(true);
	        file.setReadable(true);
	        OutputStream output_file = new FileOutputStream(images_directory + this.total_photo_number + ".jpeg");
	        IOUtils.copy(file_content, output_file);
	        output_file.close();
	        if(transaction_photo_number != 0) {
	        	response.getWriter().append(", ");
	        }
	        response.getWriter().append("{\"name\" : \"" + this.total_photo_number + ".jpeg\"" + "}");
	        this.total_photo_number++;
	        transaction_photo_number++;
	    }
	    fileParts = request.getParts().stream().filter(part -> "image/gif".equals(part.getName())).collect(Collectors.toList()); // Retrieves <input type="file" name="file" multiple="true">
	    for (Part filePart : fileParts) {
	        InputStream file_content = filePart.getInputStream();
	        File file = new File("file.txt");
	        file.createNewFile();
	        file.renameTo(new File(images_directory + this.total_photo_number + ".gif"));
	        file.setWritable(true);
	        file.setReadable(true);
	        OutputStream output_file = new FileOutputStream(images_directory + this.total_photo_number + ".gif");
	        IOUtils.copy(file_content, output_file);
	        output_file.close();
	        if(transaction_photo_number != 0) {
	        	response.getWriter().append(", ");
	        }
	        response.getWriter().append("{\"name\" : \"" + this.total_photo_number + ".gif\"" + "}");
	        this.total_photo_number++;
	        transaction_photo_number++;
	    }
		
		response.getWriter().append("]}");
		
		System.out.println("passPost2");
	}

}
