using ChamaJussaDB.Models;

namespace ChamaJussaDB.Interfaces
{
    public interface INotificacaoRepository
    {
        void Cadastrar(Notificacao novaNotificacao);

        void AtualizarIdCorpo(Notificacao NotificacaoAtualizado);

        void AtualizarIdUrl(Guid id, Notificacao NotificacaoAtualizado);

        List<Notificacao> Listar();

        void Deletar(Guid id);

        Notificacao BuscarPorId(Guid id);
    }
}
