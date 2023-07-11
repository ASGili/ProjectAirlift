package com.capstone.airlift;

import com.capstone.airlift.models.Book;
import com.capstone.airlift.repo.BookRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class AirliftApplicationTests {

	@Autowired
	BookRepo bookRepo;

	@Test
	void contextLoads() {
	}

	@Test
	public void canAddBook(){
		Book book = new Book("Introductory Statistics with R","9780387790534","https://www.googleapis.com/books/v1/volumes?q=isbn:9780387790534");
		bookRepo.save(book);
	}

	@Test
	public void canFindBook(){
		Book foundBook = bookRepo.findBookByIsbn("9780387790534");
		System.out.println(foundBook);

	}
}
