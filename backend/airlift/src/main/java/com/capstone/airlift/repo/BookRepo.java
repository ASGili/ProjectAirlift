package com.capstone.airlift.repo;

import com.capstone.airlift.models.Book;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(collectionResourceRel = "books", path = "books")
@CrossOrigin("http://localhost:3000")
public interface BookRepo extends MongoRepository<Book, String> {

    public Book findBookById(String id);

}
