package com.example2.DuplicadoSemana11;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity 
public class Carrera {
    private @Id @GeneratedValue Long id;
    private String nombre;
	private String duracion;

    private Carrera() {}

	public Carrera(String nombre, String duracion) {
		this.nombre = nombre;
		this.duracion = duracion;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Carrera carrera = (Carrera) o;
		return Objects.equals(id, carrera.id) &&
			Objects.equals(nombre, carrera.nombre) &&
			Objects.equals(duracion, carrera.duracion);
			
	}

	@Override
	public int hashCode() {

		return Objects.hash(id, nombre, duracion);
	}

	@Override
	public String toString() {
		return "Carrera{" +
			"id=" + id +
			", nombre='" + nombre + '\'' +
			", duracion='" + duracion + '\'' +
			'}';
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

    public String getDuracion() {
        return duracion;
    }

    public void setDuracion(String duracion) {
        this.duracion = duracion;
    }
    
}
