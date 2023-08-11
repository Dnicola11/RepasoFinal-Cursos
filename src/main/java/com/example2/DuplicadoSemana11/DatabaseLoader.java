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
		this.repositoryCu.save(new Curso("Base de Datos",3,"Semi-Presencial"));
		this.repositoryCu.save(new Curso("Programacion I",4,"Presencial"));
		this.repositoryCu.save(new Curso("Ingles Tecnico",2,"Virtual"));
		this.repositoryCu.save(new Curso("Zootecnia",4,"Virtual"));
		this.repositoryCa.save(new Carrera("Ingeneria de Sistemas", "5 años"));
		this.repositoryCa.save(new Carrera("Veterinaria", "5 años"));
		this.repositoryCa.save(new Carrera("Negocios Internacionales", "4 años"));
		this.repositorySe.save(new Sede("Lima Centro", "Av. Petituars 315", "Lima"));
		this.repositorySe.save(new Sede("Lima Sur", "Av. Pedro Miotta 950", "San Juan Miraflores"));
	}
}
