package ufj.projeto.daw.models;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity
@Table(name = "FUNCIONARIOS")
public class Funcionario implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@EqualsAndHashCode.Include
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "codigo_func")
	private Integer codigo ;
	
	@NotBlank
	@Column(name = "nome_func", nullable = false)
	private String nome;
	
	@NotBlank
	@Email
	@Column(name = "email_func", nullable = false)
	private String email;
	
	
	public Funcionario(Integer codigo, @NotBlank @Size(max = 60) String nome, @NotBlank @Size(max = 60) String email) {
		this.codigo = codigo;
		this.nome = nome;
		this.email = email;
	}

}
