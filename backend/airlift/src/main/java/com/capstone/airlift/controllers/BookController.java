package com.capstone.airlift.controllers;

import com.capstone.airlift.models.Book;
import com.capstone.airlift.models.Comment;
import com.capstone.airlift.repo.BookRepo;
import com.capstone.airlift.repo.CommentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RepositoryRestController
public class BookController {
    @Autowired
    BookRepo bookRepo;
    @Autowired
    CommentRepo commentRepo;

@PostMapping(path="/books/{bookId}/comments")
    public ResponseEntity<Comment> addComment(@PathVariable String bookId, @RequestBody Comment comment) {
        if (comment.getContent() == null || comment.getContent().isEmpty()) {
            return ResponseEntity.badRequest().build();}

        Book book = bookRepo.findById(bookId).get();
        commentRepo.save(comment);
        book.getComments().add(comment);
        bookRepo.save(book);
        return ResponseEntity.ok().body(comment);
    }


}
