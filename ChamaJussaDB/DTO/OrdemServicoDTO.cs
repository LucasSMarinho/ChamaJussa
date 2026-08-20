using System.ComponentModel.DataAnnotations;

namespace ChamaJussaDB.DTO;

public class OrdemServicoDTO
{
    [Required(ErrorMessage = "O titulo da ordem de servico é obrigatoria")]
    public string? TituloProblema { get; set; }
    public IFormFile? Imagem { get; set; }
    public string? Equipamento { get; set; }

    [Required(ErrorMessage = "O local da ordem de servico é obrigatoria")]
    public string? Local { get; set; }

    [Required(ErrorMessage = "A descricao da ordem de servico é obrigatoria")]
    public string? Descricao { get; set; }

    [Required(ErrorMessage = "O status da ordem de servico é obrigatoria")]
    public string? Status { get; set; } = "Pendente";

    [Required(ErrorMessage = "O id do usuario é obrigatorio")]
    public String? IdUsuario { get; set; }
}