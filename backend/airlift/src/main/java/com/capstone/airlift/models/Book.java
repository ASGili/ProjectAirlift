package com.capstone.airlift.models;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.ArrayList;

@Document("books")
public class Book {

    private String id;
    private String title;
    private String isbn;
    private String googleApiLink;
    private String frontendLink;
    @DocumentReference
    private ArrayList<Comment> comments;

    public Book() {
    }

    public Book(String title, String isbn, String googleApiLink, String frontendLink) {
        this.title = title;
        this.isbn = isbn;
        this.googleApiLink = googleApiLink;
        this.frontendLink = frontendLink;
        this.comments = new ArrayList<>();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public String getGoogleApiLink() {
        return googleApiLink;
    }

    public void setGoogleApiLink(String googleApiLink) {
        this.googleApiLink = googleApiLink;
    }

    public ArrayList<Comment> getComments() {
        return comments;
    }

    public void setComments(ArrayList<Comment> comments) {
        this.comments = comments;
    }

    public String getFrontendLink() {
        return frontendLink;
    }

    public void setFrontendLink(String frontendLink) {
        this.frontendLink = frontendLink + this.getId();
    }
}
