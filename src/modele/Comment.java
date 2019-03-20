package modele;

import org.json.JSONArray;
import org.json.JSONException;

public class Comment {
	private int trip_id;
	private int user_id;
	
	private String content;
	
	private JSONArray photos;

	public int getTrip_id() {
		return trip_id;
	}

	public void setTrip_id(int trip_id) {
		this.trip_id = trip_id;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public JSONArray getPhotos() {
		return photos;
	}

	public void setPhotos(JSONArray photos) {
		this.photos = photos;
	}
	
	public String getCommentAsString() throws JSONException {
		StringBuilder comment_as_string = new StringBuilder();
		comment_as_string.append("trip_id=" + this.trip_id);
		comment_as_string.append("&user_id=" + this.user_id);
		comment_as_string.append("&content=" + this.content);
		comment_as_string.append("&photos=" + this.photos.length());
		for(int i = 0; i < this.photos.length(); i++) {
			comment_as_string.append("&photo" + i + "=" + this.photos.getJSONObject(i).getString("name"));
		}
		return comment_as_string.toString();
	}
}
