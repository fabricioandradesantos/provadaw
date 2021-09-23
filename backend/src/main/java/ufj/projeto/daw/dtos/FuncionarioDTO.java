package ufj.projeto.daw.dtos;

import java.io.Serializable;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.hateoas.RepresentationModel;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import ufj.projeto.daw.models.Funcionario;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode(onlyExplicitlyIncluded = true, callSuper = false)
@JsonPropertyOrder({"codigo_func","nome_func","email_func"})
public class FuncionarioDTO extends RepresentationModel<FuncionarioDTO> implements Serializable {
	private static final long serialVersionUID = 1L;


	@EqualsAndHashCode.Include
	@JsonProperty("codigo_func")
	private Integer codigo ;
	
	@NotBlank
	@Size(max=60)
	@JsonProperty("nome_func")
	private String nome;
	
	@NotBlank
	@Size(max=60)
	@JsonProperty("email_func")
	private String email;
	
	
	public FuncionarioDTO (Funcionario obj) {
		this.codigo = obj.getCodigo();
		this.nome = obj.getNome();
		this.email = obj.getEmail();
		
	}
	
	
	
}