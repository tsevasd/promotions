using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Promotions.Models;

namespace Promotions.Controllers;

public class HomeController : Controller
{
    public HomeController()
    {}

    public IActionResult Index() => View();

    [Route("euro-rush")]
    public IActionResult EuroRush() => View();
    
    [Route("meastery-island")]
    public IActionResult MeasteryIsland() => View();

    [Route("santa-treats")]
    public IActionResult SantaTreats() => View();

    [Route("spin-city")]
    public IActionResult SpinCity() => View();

    [Route("spin-shots")]
    public IActionResult SpinShots() => View();

    [Route("spin-shots-halloween")]
    public IActionResult SpinShotsHalloween() => View();

    [Route("star-quest")]
    public IActionResult StarQuest() => View();

    [Route("summer-ball")]
    public IActionResult SummerBall() => View();

    [Route("wizards")]
    public IActionResult Wizards() => View();

    [Route("xmas-2023")]
    public IActionResult XmasCalendar() => View();

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
