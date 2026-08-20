using ChamaJussaDB.Models;

namespace ChamaJussaDB.Interfaces
{
    public interface IOrdemServicoRepository
    {

        void Cadastrar(OrdemServico novaOrdemServico);

        void AtualizarIdCorpo(OrdemServico OrdemServico);

        void AtualizarIdUrl(Guid id, OrdemServico OrdemServicoAtualizado);

        List<OrdemServico> Listar();

        void Deletar(Guid id);

        OrdemServico BuscarPorId(Guid id);
    }

}