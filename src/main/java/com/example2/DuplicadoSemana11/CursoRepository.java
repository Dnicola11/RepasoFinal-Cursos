package com.example2.DuplicadoSemana11;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "cursos", path = "cursos")
public interface CursoRepository extends CrudRepository<Curso, Long>{
    
}
