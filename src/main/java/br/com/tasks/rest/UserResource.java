package br.com.tasks.rest;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.tasks.model.User;
import br.com.tasks.service.UserService;
import br.com.tasks.util.rest.Response;

@Path("/users")
@Produces(MediaType.APPLICATION_JSON + ";charset=utf-8")
@Consumes(MediaType.APPLICATION_JSON + ";charset=utf-8")
@Component
public class UserResource {

	@Autowired
	private UserService userService;

	@POST
	public Response post(User user) {
		userService.save(user);
		return Response.Ok("Usuário salvo com sucesso.");
	}

	@GET
	public List<User> get() {
		return userService.getUsers();
	}

	@PUT
	public Response put(User user) {
		userService.save(user);
		return Response.Ok("Usuário alterado com sucesso.");
	}

	@DELETE
	@Path("{id}")
	public Response delete(@PathParam("id") long id) {
		userService.delete(id);
		return Response.Ok("Usuário excluído com sucesso.");
	}

}
