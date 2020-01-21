using Afaq.Api;
using System.Net.Http;
using System.Threading.Tasks;
using NUnit.Framework;

namespace Afaq.FunctionalTests.Api
{
    
    public class MetaControllerInfo
    {
        private readonly HttpClient _client;

        public MetaControllerInfo(ApiFactory<Startup> factory)
        {
            _client = factory.CreateClient();
        }

        [Test]
        public async Task ReturnVersionAndLastUpdateDate()
        {
            var response = await _client.GetAsync("/info");
            response.EnsureSuccessStatusCode();
            var stringResponse = await response.Content.ReadAsStringAsync();

            Assert.AreEqual("Version", stringResponse);
            Assert.AreEqual("Last Updated", stringResponse);
        }
    }
}