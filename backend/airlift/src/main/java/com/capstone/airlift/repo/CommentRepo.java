package com.capstone.airlift.repo;

import com.capstone.airlift.models.Book;
import com.capstone.airlift.models.Comment;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "comments", path = "comments")
public interface CommentRepo extends MongoRepository<Comment, String> {

    public Comment findCommentByBookId(String bookId);

}
