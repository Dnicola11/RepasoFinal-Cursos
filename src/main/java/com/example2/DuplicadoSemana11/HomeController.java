package com.example2.DuplicadoSemana11;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@RequestMapping(value = "/")
	public String index() {
		return "index";
	}

	@GetMapping(path = "/api/sedes/{id}/informacion")
	public @ResponseBody List<Map <String, Object>> informacion(@PathVariable Integer id){
		String sql = "SELECT sede.id as ID, curso.nombre as CURSO, carrera.nombre as CARRERA FROM sede JOIN curso ON sede.id_curso=curso.id JOIN carrera ON sede.id_carrera=carrera.id WHERE sede.id_sede = ?";
		List<Map <String, Object>> queryResult = jdbcTemplate.queryForList(sql, id);
		return queryResult;
	}

}

