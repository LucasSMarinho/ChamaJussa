using System.ComponentModel.DataAnnotations;

namespace ChamaJussaDB.DTO
{
    public class NotificacaoDTO
    {
        [Required(ErrorMessage = "A mensagem da notificação é obrigatória")]
        public string? Mensagem { get; set; }

        [Required(ErrorMessage = "O status da notificação é obrigatório")]
        public bool Lida { get; set; }

        [Required(ErrorMessage = "O id do usuário é obrigatório")]
        public string? IdUsuario { get; set; }

        [Required(ErrorMessage = "O id da ordem de serviço é obrigatório")]
        public Guid? IdOrdemServico { get; set; }
    }
}
