package com.example2.DuplicadoSemana11;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {
    private final CursoRepository repositoryCu;
	private final CarreraRepository repositoryCa;
	private final SedeRepository repositorySe;

	@Autowired 
	public DatabaseLoader(CursoRepository repositoryCu, CarreraRepository repositoryCa, SedeRepository repositorySe) {
		this.repositoryCu = repositoryCu;
		this.repositoryCa = repositoryCa;
		this.repositorySe = repositorySe;
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

		this.repositorySe.save(new Sede(cuBase, caIs, "A103"));
		this.repositorySe.save(new Sede(cuMat, caCon, "A504"));
	
	}
}
