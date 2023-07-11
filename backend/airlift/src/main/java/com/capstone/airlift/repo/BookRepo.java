package com.capstone.airlift.repo;

import com.capstone.airlift.models.Book;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BookRepo extends MongoRepository<Book, String> {

    public Book findBookByIsbn(String isbn);

}
