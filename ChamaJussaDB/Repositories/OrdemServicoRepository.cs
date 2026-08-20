using ChamaJussaDB.BdContext;
using ChamaJussaDB.Interfaces;
using ChamaJussaDB.Models;
using Microsoft.EntityFrameworkCore;

namespace ChamaJussaDB.Repositories
{
    public class OrdemServicoRepository : IOrdemServicoRepository
    {
        private readonly ChamaJussaContext _context;

        public OrdemServicoRepository(ChamaJussaContext context)
        {
            _context = context;
        }

        public void AtualizarIdCorpo(OrdemServico OrdemServico)
        {
            OrdemServico OrdemServicoBuscada = _context.OrdemServicos.Find(OrdemServico.IdOrdemServico)!;

            if (OrdemServicoBuscada != null)
            {
                OrdemServicoBuscada.IdUsuario = OrdemServico.IdUsuario;
                OrdemServicoBuscada.Descricao = OrdemServico.Descricao;
                OrdemServicoBuscada.TituloProblema = OrdemServico.TituloProblema;
                OrdemServicoBuscada.Equipamento = OrdemServico.Equipamento;
                OrdemServicoBuscada.Imagem = OrdemServico.Imagem;
                OrdemServicoBuscada.Status = OrdemServico.Status;
                OrdemServicoBuscada.Local = OrdemServico.Local;
            }
        }

        public void AtualizarIdUrl(Guid id, OrdemServico OrdemServicoAtualizado)
        {
            try
            {
                OrdemServico OrdemServicoBuscada = _context.OrdemServicos.Find(id)!;

                if (OrdemServicoBuscada != null)
                {
                    OrdemServicoBuscada.IdUsuario = OrdemServicoAtualizado.IdUsuario;
                    OrdemServicoBuscada.Descricao = OrdemServicoAtualizado.Descricao;
                    OrdemServicoBuscada.TituloProblema = OrdemServicoAtualizado.TituloProblema;
                    OrdemServicoBuscada.Equipamento = OrdemServicoAtualizado.Equipamento;
                    OrdemServicoBuscada.Imagem = OrdemServicoAtualizado.Imagem;
                    OrdemServicoBuscada.Status = OrdemServicoAtualizado.Status;
                    OrdemServicoBuscada.Local = OrdemServicoAtualizado.Local;
                }

                _context.OrdemServicos.Update(OrdemServicoBuscada!);
                _context.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }


        public OrdemServico BuscarPorId(Guid id)
        {
            try
            {
                OrdemServico OrdemServicoBuscada = _context.OrdemServicos.Find(id)!;

                return OrdemServicoBuscada;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void Cadastrar(OrdemServico novaOrdemServico)
        {
            try
            {
                _context.OrdemServicos.Add(novaOrdemServico);

                _context.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void Deletar(Guid id)
        {
            try
            {
                OrdemServico ordemServicoBuscada = _context.OrdemServicos.Find(id)!;

                if (ordemServicoBuscada != null)
                {
                    _context.OrdemServicos.Remove(ordemServicoBuscada);

                    _context.SaveChanges();
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        public List<OrdemServico> Listar()
        {
            try
            {
                List<OrdemServico> listaOrdensServico = _context.OrdemServicos.Include(o => o.IdUsuarioNavigation).OrderBy(o => o.IdUsuarioNavigation!.Nome).ToList();

                return listaOrdensServico;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
