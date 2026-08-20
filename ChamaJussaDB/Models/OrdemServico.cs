using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace ChamaJussaDB.Models;

[Table("OrdemServico")]
public partial class OrdemServico
{
    [Key]
    public Guid IdOrdemServico { get; set; }

    [StringLength(150)]
    [Unicode(false)]
    public string TituloProblema { get; set; } = null!;

    [StringLength(150)]
    [Unicode(false)]
    public string? Equipamento { get; set; }

    [StringLength(150)]
    [Unicode(false)]
    public string Local { get; set; } = null!;

    [StringLength(500)]
    [Unicode(false)]
    public string Descricao { get; set; } = null!;

    [StringLength(255)]
    [Unicode(false)]
    public string? Imagem { get; set; }

    [StringLength(30)]
    [Unicode(false)]
    public string Status { get; set; } = null!;

    [StringLength(40)]
    [Unicode(false)]
    public string? IdUsuario { get; set; }

    [ForeignKey("IdUsuario")]
    [InverseProperty("OrdemServicos")]
    public virtual Usuario? IdUsuarioNavigation { get; set; }

    [InverseProperty("IdOrdemServicoNavigation")]
    public virtual ICollection<Notificacao> Notificacaos { get; set; } = new List<Notificacao>();
}
