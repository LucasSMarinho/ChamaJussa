using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace ChamaJussaDB.Models;

[Table("Notificacao")]
public partial class Notificacao
{
    [Key]
    public Guid IdNotificacao { get; set; }

    [StringLength(255)]
    [Unicode(false)]
    public string Mensagem { get; set; } = null!;

    public bool Lida { get; set; }

    [StringLength(40)]
    [Unicode(false)]
    public string? IdUsuario { get; set; }

    public Guid? IdOrdemServico { get; set; }

    [ForeignKey("IdOrdemServico")]
    [InverseProperty("Notificacaos")]
    public virtual OrdemServico? IdOrdemServicoNavigation { get; set; }

    [ForeignKey("IdUsuario")]
    [InverseProperty("Notificacaos")]
    public virtual Usuario? IdUsuarioNavigation { get; set; }
}
