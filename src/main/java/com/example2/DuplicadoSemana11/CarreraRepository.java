package com.example2.DuplicadoSemana11;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "carreras", path = "carreras")
public interface CarreraRepository extends CrudRepository<Carrera, Long> { 
}
