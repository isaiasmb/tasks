package br.com.tasks.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import br.com.tasks.dao.UserDao;
import br.com.tasks.model.User;

@Component
public class UserService {

	@Autowired
	private UserDao userDao;

	@Transactional(rollbackFor = Exception.class)
	public boolean save(User user) {
		userDao.saveOrUpdate(user);
		return true;
	}

	public List<User> getUsers() {
		return userDao.getUsers();
	}

	@Transactional(rollbackFor = Exception.class)
	public boolean delete(long id) {
		return userDao.delete(id);		
	}
}
