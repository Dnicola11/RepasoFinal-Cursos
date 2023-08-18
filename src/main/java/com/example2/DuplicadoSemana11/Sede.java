package com.example2.DuplicadoSemana11;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Sede {
    private @Id @GeneratedValue Long id;

    @ManyToOne()
    @JoinColumn(name = "id_curso")
    private Curso curso;

    @ManyToOne()
    @JoinColumn(name = "id_carrera")
    private Carrera carrera;

	private String aula;

    public Sede(Curso curso, Carrera carrera, String aula) {
        this.curso = curso;
        this.carrera = carrera;
		this.aula = aula;
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Curso getCurso() {
		return curso;
	}

	public void setCurso(Curso curso) {
		this.curso = curso;
	}

	public Carrera getCarrera() {
		return carrera;
	}

	public void setCarrera(Carrera carrera) {
		this.carrera = carrera;
	}

	public String getAula() {
		return aula;
	}

	public void setAula(String aula) {
		this.aula = aula;
	}
	
}
