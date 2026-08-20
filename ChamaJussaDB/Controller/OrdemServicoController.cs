using Microsoft.AspNetCore.Mvc;
using ChamaJussaDB.Interfaces;
using ChamaJussaDB.Repositories;
using ChamaJussaDB.DTO;
using ChamaJussaDB.Models;

namespace ChamaJussaDB.Controllers;

[Route("api/[controller]")]
[ApiController]

public class OrdemServicoController : ControllerBase
{
    private readonly IOrdemServicoRepository _orderServicoRepository;

    public OrdemServicoController(IOrdemServicoRepository orderServicoRepository)
    {
        _orderServicoRepository = orderServicoRepository;
    }

    [HttpGet("{id}")]
    public IActionResult GetById(Guid id)
    {
        try
        {
            return Ok(_orderServicoRepository.BuscarPorId(id));
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
            return Ok(_orderServicoRepository.Listar());
        }
        catch (Exception erro)
        {
            return BadRequest(erro.Message);
        }
    }

    [HttpPost]
    public async Task<IActionResult> Post([FromForm] OrdemServicoDTO orderServico)
    {
        if (string.IsNullOrEmpty(orderServico.TituloProblema))
            return BadRequest("É obrigatório informar o nome do veículo");

        OrdemServico novaOrdemServico = new OrdemServico();

        if (orderServico.Imagem != null && orderServico.Imagem.Length != 0)
        {
            var extensao = Path.GetExtension(orderServico.Imagem.FileName);

            var nomeArquivo = $"{Guid.NewGuid()}{extensao}";

            var pastaRelativa = "wwwroot/imagens";
            var caminhoPasta = Path.Combine(Directory.GetCurrentDirectory(), pastaRelativa);

            if (!Directory.Exists(caminhoPasta))
                Directory.CreateDirectory(caminhoPasta);

            var caminhoCompleto = Path.Combine(caminhoPasta, nomeArquivo);

            using (var stream = new FileStream(caminhoCompleto, FileMode.Create))
            {
                await orderServico.Imagem.CopyToAsync(stream);
            }

            novaOrdemServico.Imagem = nomeArquivo;
        }

        novaOrdemServico.TituloProblema = orderServico.TituloProblema;
        novaOrdemServico.Local = orderServico.Local!;
        novaOrdemServico.Descricao = orderServico.Descricao!;
        novaOrdemServico.Status = orderServico.Status!;
        novaOrdemServico.IdUsuario = orderServico.IdUsuario;

        try
        {
            _orderServicoRepository.Cadastrar(novaOrdemServico);
            return StatusCode(201, novaOrdemServico);
        }
        catch (Exception erro)
        {
            return BadRequest(erro.Message);
        }
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Put(Guid id, OrdemServicoDTO orderServicoAtualizado)
    {
        var orderServicoBuscado = _orderServicoRepository.BuscarPorId(id);

        if (orderServicoBuscado == null)
            return NotFound("Ordem de serviço não encontrada");

        if (!string.IsNullOrEmpty(orderServicoAtualizado.TituloProblema))
            orderServicoBuscado.TituloProblema = orderServicoAtualizado.TituloProblema;

        if (orderServicoAtualizado.Local != null)
            orderServicoBuscado.Local = orderServicoAtualizado.Local;

        if (orderServicoAtualizado.Descricao != null)
            orderServicoBuscado.Descricao = orderServicoAtualizado.Descricao;

        if (orderServicoAtualizado.Status != null)
            orderServicoBuscado.Status = orderServicoAtualizado.Status;

        if (orderServicoAtualizado.IdUsuario != null)
            orderServicoBuscado.IdUsuario = orderServicoAtualizado.IdUsuario;

        if (orderServicoAtualizado.Imagem != null && orderServicoAtualizado.Imagem.Length != 0)
        {
            var pastaRelativa = "wwwroot/imagens";
            var caminhoPasta = Path.Combine(Directory.GetCurrentDirectory(), pastaRelativa);

            if (!string.IsNullOrEmpty(orderServicoBuscado.Imagem))
            {
                var caminhoAntigo = Path.Combine(caminhoPasta, orderServicoBuscado.Imagem);

                if (System.IO.File.Exists(caminhoAntigo))
                    System.IO.File.Delete(caminhoAntigo);
            }

            var extensao = Path.GetExtension(orderServicoAtualizado.Imagem.FileName);
            var nomeArquivo = $"{Guid.NewGuid()}{extensao}";

            if (!Directory.Exists(caminhoPasta))
                Directory.CreateDirectory(caminhoPasta);

            var caminhoCompleto = Path.Combine(caminhoPasta, nomeArquivo);

            using (var stream = new FileStream(caminhoCompleto, FileMode.Create))
            {
                await orderServicoAtualizado.Imagem.CopyToAsync(stream);
            }

            orderServicoBuscado.Imagem = nomeArquivo;
        }

        try
        {
            _orderServicoRepository.AtualizarIdUrl(id, orderServicoBuscado  );
            return Ok();
        }
        catch (Exception erro)
        {
            return BadRequest(erro.Message);
        }
    }

    [HttpPut]
    public IActionResult PutBody(OrdemServico orderServicoAtualizado)
    {
        try
        {
            _orderServicoRepository.AtualizarIdCorpo(orderServicoAtualizado);
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
        var orderServicoBuscado = _orderServicoRepository.BuscarPorId(id);

        if (orderServicoBuscado == null)
            return NotFound("Ordem de serviço não encontrada");

        var pastaRelativa = "wwwroot/imagens";
        var caminhoPasta = Path.Combine(Directory.GetCurrentDirectory(), pastaRelativa);

        if (!string.IsNullOrEmpty(orderServicoBuscado.Imagem))
        {
            var caminho = Path.Combine(caminhoPasta, orderServicoBuscado.Imagem);

            if (System.IO.File.Exists(caminho))
                System.IO.File.Delete(caminho);
        }

        try
        {
            _orderServicoRepository.Deletar(id);
            return NoContent();
        }
        catch (Exception erro)
        {
            return BadRequest(erro.Message);
        }
    }
}