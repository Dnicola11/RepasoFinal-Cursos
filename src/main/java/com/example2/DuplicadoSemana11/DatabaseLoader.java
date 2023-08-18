package com.example2.DuplicadoSemana11;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {
    private final CursoRepository repositoryCu;
	private final CarreraRepository repositoryCa;
	private final AulaRepository repositoryA;

	@Autowired 
	public DatabaseLoader(CursoRepository repositoryCu, CarreraRepository repositoryCa, AulaRepository repositoryA) {
		this.repositoryCu = repositoryCu;
		this.repositoryCa = repositoryCa;
		this.repositoryA = repositoryA;
	}

	@Override
	public void run(String... strings) throws Exception {
		this.repositoryCu.save(new Curso("Programacion I",4));
		this.repositoryCu.save(new Curso("Ingles Tecnico",2));
		this.repositoryCu.save(new Curso("Zootecnia",4));
		Curso cuMat = new Curso("Matematica Basica", 3);
		this.repositoryCu.save(cuMat);
		Curso cuBase = new Curso("Base de Datos", 3);
		this.repositoryCu.save(cuBase);

		Carrera caIs = new Carrera("Ingeneria de Sistemas");
		this.repositoryCa.save(caIs);
		Carrera caCon = new Carrera("Contabilidad");
		this.repositoryCa.save(caCon);
		this.repositoryCa.save(new Carrera("Negocios Internacionales"));

		this.repositoryA.save(new Aula(cuBase, caIs, "NOCHE"));
		this.repositoryA.save(new Aula(cuMat, caCon, "TARDE"));
	
	}
}
