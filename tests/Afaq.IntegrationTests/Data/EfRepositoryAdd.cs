using Afaq.Core.Entities;
using Afaq.Tests;
using System.Linq;
using NUnit.Framework;

namespace Afaq.IntegrationTests.Data
{
    public class EfRepositoryAdd : BaseEfRepoTestFixture
    {
        [Test]
        public void AddItemAndSetId()
        {
            var repository = GetRepository();
            var item = new TodoItemBuilder().Build();

            repository.Add(item);
            var newItem = repository.List<TodoItem>().FirstOrDefault();

            Assert.AreEqual(item, newItem);
            Assert.IsTrue(newItem?.Id > 0);
        }
    }
}