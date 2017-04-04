package br.com.tasks.dao;

import java.util.List;

import org.hibernate.Query;
import org.springframework.stereotype.Component;

import br.com.tasks.model.Task;

@Component
@SuppressWarnings("unchecked")
public class TaskDao extends HibernateDAO<Task> {

	public TaskDao() {
		super(Task.class);
	}

	public void save(Task task) {
		super.save(task);
	}

	public List<Task> getTasks() {
		Query query = getSession().createQuery("FROM Task");
		return query.list();
	}

	public boolean delete(Long id) {
		Task task = get(id);
		delete(task);
		return true;
	}

}
