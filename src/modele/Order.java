package modele;

import org.json.JSONException;

public class Order {
	private int trip_id;
	private int user_id;
	
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
	
	public String getOrderAsString() throws JSONException {
		StringBuilder order_as_string = new StringBuilder();
		order_as_string.append("trip_id=" + this.trip_id);
		order_as_string.append("&user_id=" + this.user_id);
		return order_as_string.toString();
	}
	
	public String toString() {
		return this.trip_id + " " + this.user_id;
	}
}
