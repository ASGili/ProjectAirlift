package com.capstone.airlift.repo;

import com.capstone.airlift.models.Book;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(collectionResourceRel = "books", path = "books")
public interface BookRepo extends MongoRepository<Book, String> {

    public Book findBookById(String id);

}
