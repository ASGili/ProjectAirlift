package com.capstone.airlift.models;

import org.bson.types.Binary;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("comments")
public class Comment {

    private String id;
    private String content;
    private String date;
    private Binary photo;


    public Comment() {
    }

    public Comment(String content, String date) {
        this.content = content;
        this.date = date;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Binary getPhoto() {
        return photo;
    }
    public void setPhoto(Binary photo) {
        this.photo = photo;
    }
}