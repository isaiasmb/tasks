package br.com.tasks.util.rest;

import org.glassfish.hk2.utilities.binding.AbstractBinder;

import br.com.tasks.dao.UserDao;
import br.com.tasks.service.UserService;

public class MyApplicationBinder extends AbstractBinder {
	@Override
	protected void configure() {
		bind(UserDao.class).to(UserDao.class);
		bind(UserService.class).to(UserService.class);
	}
}