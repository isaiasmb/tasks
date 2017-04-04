package br.com.tasks.dao;

import java.util.List;

import org.hibernate.Query;
import org.springframework.stereotype.Component;

import br.com.tasks.model.User;

@Component
@SuppressWarnings("unchecked")
public class UserDao extends HibernateDAO<User> {

	public UserDao() {
		super(User.class);
	}

	public void save(User user) {
		super.save(user);
	}

	public List<User> getUsers() {
		Query query = getSession().createQuery("FROM User");
		return query.list();
	}

	public boolean delete(Long id) {
		User user = get(id);
		delete(user);
		return true;
	}

}
