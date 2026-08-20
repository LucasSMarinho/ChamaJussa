using ChamaJussaDB.DTO;
using ChamaJussaDB.Interfaces;
using ChamaJussaDB.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ChamaJussaDB.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotificacoesController : ControllerBase
    {
        private readonly INotificacaoRepository _notificacaoRepository;

        public NotificacoesController(INotificacaoRepository notificacaoRepository)
        {
            _notificacaoRepository = notificacaoRepository;
        }

        [HttpGet("{id}")]
        public IActionResult GetById(Guid id)
        {
            try
            {
                return Ok(_notificacaoRepository.BuscarPorId(id));
            }
            catch (Exception erro)
            {
                return BadRequest(erro.Message);
            }
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_notificacaoRepository.Listar());
            }
            catch (Exception erro)
            {
                return BadRequest(erro.Message);
            }
        }

        [HttpPost]
        public IActionResult Post(NotificacaoDTO notificacao)
        {
            try
            {
                var novaNotificacao = new Notificacao
                {
                    Mensagem = notificacao.Mensagem!,
                    Lida = notificacao.Lida!,
                    IdUsuario = notificacao.IdUsuario!,
                    IdOrdemServico = notificacao.IdOrdemServico!
                };

                _notificacaoRepository.Cadastrar(novaNotificacao);

                return StatusCode(201);
            }
            catch (Exception erro)
            {
                return BadRequest(erro.Message);
            }
        }

        [HttpPut("{id}")]
        public IActionResult Put(Guid id, NotificacaoDTO notificacao)
        {
            try
            {
                var notificacaoAtualizada = new Notificacao
                {
                    Mensagem = notificacao.Mensagem!,
                    Lida = notificacao.Lida!,
                    IdUsuario = notificacao.IdUsuario!,
                    IdOrdemServico = notificacao.IdOrdemServico!
                };

                _notificacaoRepository.AtualizarIdUrl(id, notificacaoAtualizada);

                return Ok();
            }
            catch (Exception erro)
            {
                return BadRequest(erro.Message);
            }
        }

        [HttpPut]
        public IActionResult PutBody(NotificacaoDTO notificacao)
        {
            try
            {
                var notificacaoAtualizada = new Notificacao
                {
                    Mensagem = notificacao.Mensagem!,
                    Lida = notificacao.Lida!,
                    IdUsuario = notificacao.IdUsuario!,
                    IdOrdemServico = notificacao.IdOrdemServico!
                };

                _notificacaoRepository.AtualizarIdCorpo(notificacaoAtualizada);

                return Ok();
            }
            catch (Exception erro)
            {
                return BadRequest(erro.Message);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            try
            {
                _notificacaoRepository.Deletar(id);

                return NoContent();
            }
            catch (Exception erro)
            {
                return BadRequest(erro.Message);
            }
        }
    }
}