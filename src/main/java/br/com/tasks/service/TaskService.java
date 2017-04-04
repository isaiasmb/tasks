package br.com.tasks.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import br.com.tasks.dao.TaskDao;
import br.com.tasks.model.Task;

@Component
public class TaskService {
	
	@Autowired
	private TaskDao taskDao;
	
	@Transactional(rollbackFor = Exception.class)
	public boolean save(Task task) {
		taskDao.saveOrUpdate(task);
		return true;
	}
	
	public List<Task> getTasks() {
		return taskDao.getTasks();
	}

	@Transactional(rollbackFor = Exception.class)
	public boolean delete(long id) {
		return taskDao.delete(id);
	}

}
