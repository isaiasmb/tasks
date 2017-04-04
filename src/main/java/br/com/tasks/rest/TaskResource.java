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

import br.com.tasks.model.Task;
import br.com.tasks.service.TaskService;
import br.com.tasks.util.rest.Response;

@Path("/tasks")
@Produces(MediaType.APPLICATION_JSON + ";charset=utf-8")
@Consumes(MediaType.APPLICATION_JSON + ";charset=utf-8")
@Component
public class TaskResource {

	@Autowired
	private TaskService taskService;

	@POST
	public Response post(Task task) {
		taskService.save(task);
		return Response.Ok("Tarefa cadastrada com sucesso.");
	}

	@GET
	public List<Task> get() {
		return taskService.getTasks();
	}

	@PUT
	public Response put(Task task) {
		taskService.save(task);
		return Response.Ok("Tarefa alterada com sucesso.");
	}

	@DELETE
	@Path("{id}")
	public Response delete(@PathParam("id") long id) {
		taskService.delete(id);
		return Response.Ok("Tarefa alterada com sucesso.");

	}

}
