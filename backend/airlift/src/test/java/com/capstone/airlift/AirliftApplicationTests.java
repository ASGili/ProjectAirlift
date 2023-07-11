package com.capstone.airlift;

import com.capstone.airlift.models.Book;
import com.capstone.airlift.models.Comment;
import com.capstone.airlift.repo.BookRepo;
import com.capstone.airlift.repo.CommentRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

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
	public void canFindBook(){
		Book foundBook = bookRepo.findBookById("64ad2df0573ec0459564ca30");
		System.out.println(foundBook.getTitle());
	}

	@Test
	public void canAddComment(){
		Book foundBook = bookRepo.findBookById("64ad584ad0ce03587b6bf2cd");
		Comment comment = new Comment("This is another comment","01/01/2000",foundBook);
		foundBook.getComments().add(comment);
		bookRepo.save(foundBook);
		commentRepo.save(comment);

	}
}
