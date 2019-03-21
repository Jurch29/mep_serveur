package servlet;

import java.io.File;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.Scanner;
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
@WebServlet("/ServletSaveImages")
@MultipartConfig(fileSizeThreshold = 1024 * 1024, maxFileSize = 1024 * 1024 * 5, maxRequestSize = 1024 * 1024 * 5 * 5)
public class ServletSaveImages extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * Default constructor. 
     */
    public ServletSaveImages() {
    	
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
		
		String images_directory = "/home/ubo/git/v4/mep_serveur/WebContent/images/";
		
		int transaction_photo_number = 0;
		
		response.getWriter().append("{\"photos\" : [");
		
		List<Part> fileParts = request.getParts().stream().filter(part -> "image/png".equals(part.getName())).collect(Collectors.toList()); // Retrieves <input type="file" name="file" multiple="true">
	    for (Part filePart : fileParts) {
	    	Scanner scanner = new Scanner(new File("/home/ubo/git/v4/mep_serveur/src/servlet/images_number"));
			Integer photo_name = scanner.nextInt();
	        InputStream file_content = filePart.getInputStream();
	        File file = new File("file.txt");
	        file.createNewFile();
	        file.renameTo(new File(images_directory + photo_name + ".png"));
	        file.setWritable(true);
	        file.setReadable(true);
	        OutputStream output_file = new FileOutputStream(images_directory + photo_name + ".png");
	        IOUtils.copy(file_content, output_file);
	        output_file.close();
	        if(transaction_photo_number != 0) {
	        	response.getWriter().append(", ");
	        }
	        response.getWriter().append("{\"name\" : \"" + photo_name + ".png\"" + "}");
	        try(FileWriter fileWriter = new FileWriter("/home/ubo/git/v4/mep_serveur/src/servlet/images_number")) {  
			    String fileContent = new Integer(photo_name + 1).toString();
			    fileWriter.write(fileContent);
			} catch (IOException e) {
			    System.out.println("Reading file error");
			}
	        transaction_photo_number++;
	    }
	    fileParts = request.getParts().stream().filter(part -> "image/jpeg".equals(part.getName())).collect(Collectors.toList()); // Retrieves <input type="file" name="file" multiple="true">
	    for (Part filePart : fileParts) {
	    	Scanner scanner = new Scanner(new File("/home/ubo/git/v4/mep_serveur/src/servlet/images_number"));
			Integer photo_name = scanner.nextInt();
	        InputStream file_content = filePart.getInputStream();
	        File file = new File("file.txt");
	        file.createNewFile();
	        file.renameTo(new File(images_directory + photo_name + ".jpeg"));
	        file.setWritable(true);
	        file.setReadable(true);
	        OutputStream output_file = new FileOutputStream(images_directory + photo_name + ".jpeg");
	        IOUtils.copy(file_content, output_file);
	        output_file.close();
	        if(transaction_photo_number != 0) {
	        	response.getWriter().append(", ");
	        }
	        response.getWriter().append("{\"name\" : \"" + photo_name + ".jpeg\"" + "}");
	        try(FileWriter fileWriter = new FileWriter("/home/ubo/git/v4/mep_serveur/src/servlet/images_number")) {  
			    String fileContent = new Integer(photo_name + 1).toString();
			    fileWriter.write(fileContent);
			} catch (IOException e) {
			    System.out.println("Reading file error");
			}
	        transaction_photo_number++;
	    }
	    fileParts = request.getParts().stream().filter(part -> "image/gif".equals(part.getName())).collect(Collectors.toList()); // Retrieves <input type="file" name="file" multiple="true">
	    for (Part filePart : fileParts) {
	    	Scanner scanner = new Scanner(new File("/home/ubo/git/v4/mep_serveur/src/servlet/images_number"));
			Integer photo_name = scanner.nextInt();
	        InputStream file_content = filePart.getInputStream();
	        File file = new File("file.txt");
	        file.createNewFile();
	        file.renameTo(new File(images_directory + photo_name + ".gif"));
	        file.setWritable(true);
	        file.setReadable(true);
	        OutputStream output_file = new FileOutputStream(images_directory + photo_name + ".gif");
	        IOUtils.copy(file_content, output_file);
	        output_file.close();
	        if(transaction_photo_number != 0) {
	        	response.getWriter().append(", ");
	        }
	        response.getWriter().append("{\"name\" : \"" + photo_name + ".gif\"" + "}");
	        try(FileWriter fileWriter = new FileWriter("/home/ubo/git/v4/mep_serveur/src/servlet/images_number")) {  
			    String fileContent = new Integer(photo_name + 1).toString();
			    fileWriter.write(fileContent);
			} catch (IOException e) {
			    System.out.println("Reading file error");
			}
	        transaction_photo_number++;
	    }
		
		response.getWriter().append("]}");
		
		System.out.println("passPost2");
	}

}
