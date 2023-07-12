package com.capstone.airlift.repo;

import com.capstone.airlift.models.Book;
import com.capstone.airlift.models.Comment;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(collectionResourceRel = "comments", path = "comments")
@CrossOrigin("http://localhost:3000")
public interface CommentRepo extends MongoRepository<Comment, String> {

}
