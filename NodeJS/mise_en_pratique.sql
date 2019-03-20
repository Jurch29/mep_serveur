DROP TABLE IF EXISTS Orders;
DROP TABLE IF EXISTS Photos_Trips;
DROP TABLE IF EXISTS Photos_Comments;
DROP TABLE IF EXISTS Photos;
DROP TABLE IF EXISTS Comments;
DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Trips;

CREATE TABLE IF NOT EXISTS Users (
    user_id INT(10) NULL AUTO_INCREMENT,
    user_name VARCHAR(255) NOT NULL,
    user_passwd VARCHAR(255) NOT NULL,
    user_mail VARCHAR(255) NOT NULL,

    CONSTRAINT pk_users
        PRIMARY KEY (user_id),
    CONSTRAINT uk_user_mail
        UNIQUE KEY (user_mail)
) engine = InnoDB;

CREATE TABLE IF NOT EXISTS Trips (
    trip_id INT(10) NULL AUTO_INCREMENT,
    trip_name VARCHAR(255) NOT NULL,
    trip_starting_date DATETIME NOT NULL,
    trip_ending_date DATETIME NOT NULL,
    trip_price FLOAT UNSIGNED NOT NULL,
    trip_caption TEXT NOT NULL,

    CONSTRAINT pk_trips
        PRIMARY KEY (trip_id)
) engine = InnoDB;

CREATE TABLE IF NOT EXISTS Orders (
    order_id INT(10) NULL AUTO_INCREMENT,
    order_user_id INT(10) NOT NULL,
    order_trip_id INT(10) NOT NULL,
    order_date DATETIME NOT NULL,

    CONSTRAINT pk_orders
        PRIMARY KEY (order_id),
    CONSTRAINT fk_order_user
        FOREIGN KEY (order_user_id)
        REFERENCES Users(user_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    CONSTRAINT fk_order_trip
        FOREIGN KEY (order_trip_id)
        REFERENCES Trips(trip_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
) engine = InnoDB;

CREATE TABLE IF NOT EXISTS Photos (
    photo_id INT(10) NULL AUTO_INCREMENT,
    photo_relative_name VARCHAR(255) NOT NULL,

    CONSTRAINT pk_photos
        PRIMARY KEY (photo_id)
) engine = InnoDB;

CREATE TABLE IF NOT EXISTS Comments (
    comment_id INT(10) NULL AUTO_INCREMENT,
    comment_trip_id INT(10) NOT NULL,
	comment_user_id INT(10) NOT NULL,
	comment_content TEXT NOT NULL,
	comment_date DATETIME NOT NULL,

    CONSTRAINT pk_comments
        PRIMARY KEY (comment_id),
    CONSTRAINT fk_comments_trips
        FOREIGN KEY (comment_trip_id)
        REFERENCES Trips(trip_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    CONSTRAINT fk_comments_users
        FOREIGN KEY (comment_user_id)
        REFERENCES Users(user_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
) engine = InnoDB;

CREATE TABLE IF NOT EXISTS Photos_Comments (
    photo_comment_photo_id INT(10) NOT NULL,
    photo_comment_comment_id INT(10) NOT NULL,

    CONSTRAINT fk_photos_comments_photos
        FOREIGN KEY (photo_comment_photo_id)
        REFERENCES Photos(photo_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    CONSTRAINT fk_photos_comments_comments
        FOREIGN KEY (photo_comment_comment_id)
        REFERENCES Comments(comment_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
) engine = InnoDB;

CREATE TABLE IF NOT EXISTS Photos_Trips (
    photo_trip_photo_id INT(10) NOT NULL,
    photo_trip_trip_id INT(10) NOT NULL,

    CONSTRAINT fk_photos_trips_photos
        FOREIGN KEY (photo_trip_photo_id)
        REFERENCES Photos(photo_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    CONSTRAINT fk_photos_trips_trips
        FOREIGN KEY (photo_trip_trip_id)
        REFERENCES Trips(trip_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
) engine = InnoDB;
