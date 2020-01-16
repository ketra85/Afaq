using Afaq.Core.Entities;
using Afaq.Tests;
using System;
using NUnit.Framework;

namespace Afaq.IntegrationTests.Data
{
    public class EfRepositoryDelete : BaseEfRepoTestFixture
    {
        [Test]
        public void DeleteItemAfterAddingIt()
        {
            var repository = GetRepository();
            var initialTitle = Guid.NewGuid().ToString();
            var item = new TodoItemBuilder().Title(initialTitle).Build();
            repository.Add(item);
            repository.Delete(item);

            Assert.That(repository.List<TodoItem>(), i => i.Title == initialTitle);
        }
    }
}