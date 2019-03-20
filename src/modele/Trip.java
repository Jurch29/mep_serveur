package modele;

import java.sql.Date;

import org.json.JSONArray;
import org.json.JSONException;

public class Trip {
	private String name;

	private Date starting;
	private Date ending;

	private double price;
	
	private String caption;
	
	private JSONArray photos;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getStarting() {
		return starting;
	}

	public void setStarting(Date starting) {
		this.starting = starting;
	}

	public Date getEnding() {
		return ending;
	}

	public void setEnding(Date ending) {
		this.ending = ending;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getCaption() {
		return caption;
	}

	public void setCaption(String caption) {
		this.caption = caption;
	}

	public JSONArray getPhotos() {
		return photos;
	}

	public void setPhotos(JSONArray photos) {
		this.photos = photos;
	}
	
	public String getTripAsString() throws JSONException {
		StringBuilder trip_as_string = new StringBuilder();
		trip_as_string.append("name=" + this.name);
		trip_as_string.append("&starting=" + this.starting);
		trip_as_string.append("&ending=" + this.ending);
		trip_as_string.append("&price=" + this.price);
		trip_as_string.append("&caption=" + this.caption);
		trip_as_string.append("&photos=" + this.photos.length());
		for(int i = 0; i < this.photos.length(); i++) {
			trip_as_string.append("&photo" + i + "=" + this.photos.getJSONObject(i).getString("name"));
		}
		return trip_as_string.toString();
	}
	
	public String toString() {
		return this.name + " " + this.starting + " " + this.ending + " " + this.price + " " + this.caption;
	}
}
