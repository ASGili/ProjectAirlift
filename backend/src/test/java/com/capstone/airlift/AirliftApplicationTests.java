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
}


