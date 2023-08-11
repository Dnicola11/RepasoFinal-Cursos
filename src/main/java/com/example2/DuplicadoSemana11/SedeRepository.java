package com.example2.DuplicadoSemana11;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "sedes", path = "sedes")
public interface SedeRepository extends CrudRepository<Sede, Long>{
    
}
