using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using OrthoTrack.Models;

namespace OrthoTrack.Controllers;

public class FichaController : Controller
{
    private readonly ILogger<FichaController> _logger;

    public FichaController(ILogger<FichaController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Historico(string cpf)
    {
        ViewData["Cpf"] = cpf;
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}