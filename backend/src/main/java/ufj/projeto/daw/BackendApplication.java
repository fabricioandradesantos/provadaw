package ufj.projeto.daw;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import ufj.projeto.daw.models.Funcionario;
import ufj.projeto.daw.repositories.FuncionarioDAO;


@EnableAutoConfiguration
@ComponentScan
@SpringBootApplication
public class BackendApplication implements CommandLineRunner {

	@Autowired
	private FuncionarioDAO funcDAO;	
	
	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
		
	}
	
	
	public void run(String... args) throws Exception{
		
		Funcionario f1 = new Funcionario(1, "Fabricio", "fabriicioa@gmail.com");
		Funcionario f2 = new Funcionario(2, "Isabele", "fabriicio123@gmail.com");
		Funcionario f3 = new Funcionario(3, "Flavia", "f@gmail.com");		
		
		funcDAO.saveAll(Arrays.asList(f1,f2,f3));
		
	}

}
