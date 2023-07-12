package com.capstone.airlift;

import com.capstone.airlift.models.Book;
import com.capstone.airlift.models.Comment;
import com.capstone.airlift.repo.BookRepo;
import com.capstone.airlift.repo.CommentRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping;

@SpringBootTest
class AirliftApplicationTests {

	@Autowired
	BookRepo bookRepo;

	@Autowired
	CommentRepo commentRepo;

	@Test
	void contextLoads() {
	}

	@Test
	public void canAddBook(){
		Book book = new Book("Introductory Statistics with R","9780387790534","https://www.googleapis.com/books/v1/volumes?q=isbn:9780387790534");
		bookRepo.save(book);
	}

	@Test
	public void canAddComment(){
		Book book = new Book("Introductory Statistics with R","9780387790534","https://www.googleapis.com/books/v1/volumes?q=isbn:9780387790534");
		bookRepo.save(book);
		Comment comment = new Comment("This is another comment","01/01/2000");
		commentRepo.save(comment);}

	}

