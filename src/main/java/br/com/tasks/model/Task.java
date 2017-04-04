package br.com.tasks.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "tasks")
public class Task implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;
	private String name;
	private Long effort;
	private User user;
	private String description;
	private Integer status;
	private Long elapsedTime;

	@Id
	@GeneratedValue(generator = "sequence_task", strategy = GenerationType.SEQUENCE)
	@SequenceGenerator(initialValue = 1, allocationSize = 1, name = "sequence_task", sequenceName = "sequence_task")
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Long getEffort() {
		return effort;
	}

	public void setEffort(Long effort) {
		this.effort = effort;
	}

	@ManyToOne
	@JoinColumn(name = "id_user")
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public Long getElapsedTime() {
		return elapsedTime;
	}

	public void setElapsedTime(Long elapsedTime) {
		this.elapsedTime = elapsedTime;
	}

}
