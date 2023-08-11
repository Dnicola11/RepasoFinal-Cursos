package com.example2.DuplicadoSemana11;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Sede {
    private @Id @GeneratedValue Long id;
    private String nombre;
	private String direccion;
	private String distrito;

    private Sede() {}

	public Sede(String nombre, String direccion, String distrito) {
		this.nombre = nombre;
		this.direccion = direccion;
		this.distrito = distrito;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Sede sede = (Sede) o;
		return Objects.equals(id, sede.id) &&
			Objects.equals(nombre, sede.nombre) &&
			Objects.equals(direccion, sede.direccion) &&
			Objects.equals(distrito, sede.distrito);
	}

	@Override
	public int hashCode() {

		return Objects.hash(id, nombre, direccion, distrito);
	}

	@Override
	public String toString() {
		return "Sede{" +
			"id=" + id +
			", nombre='" + nombre + '\'' +
			", direccion='" + direccion + '\'' +
			", distrito='" + distrito + '\'' +
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

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getDistrito() {
        return distrito;
    }

    public void setDistrito(String distrito) {
        this.distrito = distrito;
    }
	
}
