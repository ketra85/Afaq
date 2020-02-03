using Afaq.Core.Entities;
using Afaq.Api;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using NUnit.Framework;

namespace Afaq.FunctionalTests.Api
{
    public class ApiTodoItemControllerList
    {
        private readonly HttpClient _client;

        public ApiTodoItemControllerList(ApiFactory<Startup> factory)
        {
            _client = factory.CreateClient();
        }

        [Test]
        public async Task ReturnTwoItems()
        {
            var response = await _client.GetAsync("/api/");
            response.EnsureSuccessStatusCode();
            var stringResponse = await response.Content.ReadAsStringAsync();
            var result = JsonConvert.DeserializeObject<IEnumerable<TodoItem>>(stringResponse).ToList();

            Assert.Equals(3, result.Count());

            Assert.That(result, Contains.Item(SeedData.todoItem1.Title));
            Assert.That(result, Contains.Item(SeedData.todoItem2.Title));
            Assert.That(result, Contains.Item(SeedData.todoItem3.Title));
        }
    }
}