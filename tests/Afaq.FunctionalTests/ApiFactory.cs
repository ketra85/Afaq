using Afaq.SharedKernel.Interfaces;
using Afaq.Infrastructure.Data;
using Afaq.Tests;
using Afaq.Api;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Test;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DepedencyInjection;
using Microsoft.Extensions.Logging;
using System;

namespace Afaq.FunctionalTests
{
    public class ApiFactory<TStartup> : WebApplicationFactory<Startup>
    {
        
    }
}