using ChamaJussaDB.Interfaces;
using Microsoft.EntityFrameworkCore;
using ChamaJussaDB.Models;
using ChamaJussaDB.BdContext;

namespace ChamaJussaDB.Repositories
{
    public class NotificacaoRepository : INotificacaoRepository
    {
        private readonly ChamaJussaContext _context;

        public NotificacaoRepository(ChamaJussaContext context)
        {
            _context = context;
        }

        public void AtualizarIdCorpo(Notificacao notificacaoAtualizada)
        {
            try
            {
                Notificacao notificacaoBuscada = _context.Notificacaos.Find(notificacaoAtualizada.IdNotificacao)!;

                if (notificacaoBuscada != null)
                {
                    notificacaoBuscada.IdUsuario = notificacaoAtualizada.IdUsuario;
                    notificacaoBuscada.Mensagem = notificacaoAtualizada.Mensagem;
                    notificacaoBuscada.IdOrdemServico = notificacaoAtualizada.IdOrdemServico;
                    notificacaoBuscada.Lida = notificacaoAtualizada.Lida;
                }

                _context.Notificacaos.Update(notificacaoBuscada!);
                _context.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void AtualizarIdUrl(Guid id, Notificacao notificacaoAtualizada)
        {
            try
            {
                Notificacao notificacaoBuscada = _context.Notificacaos.Find(id)!;

                if (notificacaoBuscada != null)
                {
                    notificacaoBuscada.IdUsuario = notificacaoAtualizada.IdUsuario;
                    notificacaoBuscada.Mensagem = notificacaoAtualizada.Mensagem;
                    notificacaoBuscada.IdOrdemServico = notificacaoAtualizada.IdOrdemServico;
                    notificacaoBuscada.Lida = notificacaoAtualizada.Lida;
                }

                _context.Notificacaos.Update(notificacaoBuscada!);
                _context.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public Notificacao BuscarPorId(Guid id)
        {
            try
            {
                Notificacao notificacaoBuscada = _context.Notificacaos.Find(id)!;

                return notificacaoBuscada;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void Cadastrar(Notificacao novaNotificacao)
        {
            try
            {
                _context.Notificacaos.Add(novaNotificacao);

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
                Notificacao notificacaoBuscada = _context.Notificacaos.Find(id)!;

                if (notificacaoBuscada != null)
                {
                    _context.Notificacaos.Remove(notificacaoBuscada);

                    _context.SaveChanges();
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        public List<Notificacao> Listar()
        {
            try
            {
                List<Notificacao> listaNotificacoes = _context.Notificacaos.Include(n => n.IdUsuarioNavigation).Include(n => n.IdOrdemServicoNavigation).OrderBy(n => n.IdUsuarioNavigation!.Nome).ToList();

                return listaNotificacoes;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}