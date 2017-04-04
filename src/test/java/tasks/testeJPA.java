package tasks;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

public class testeJPA {

	public static void main(String[] args) {
		EntityManagerFactory factory = Persistence.createEntityManagerFactory("TasksPU");
		EntityManager manager = factory.createEntityManager();

		EntityTransaction trx = manager.getTransaction();
		trx.begin();
	}
}
