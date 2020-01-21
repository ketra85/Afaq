using Afaq.Core.Entities;
using Afaq.Tests;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using NUnit.Framework;

namespace Afaq.IntegrationTests.Data
{
    public class EfRepositoryUpdate : BaseEfRepoTestFixture
    {
        [Test]
        public void UpdateItemAfterAddingIt()
        {
            var repository = GetRepository();
            var initialTitle = Guid.NewGuid().ToString();
            var item = new TodoItemBuilder().Title(initialTitle).Build();

            repository.Add(item);

            _dbContext.Entry(item).State = EntityState.Detached;

            var newItem = repository.List<TodoItem>()
                .FirstOrDefault(i => i.Title == initialTitle);
            Assert.IsNotNull(newItem);
            Assert.AreNotEqual(item, newItem);
            var newTitle = Guid.NewGuid().ToString();
            newItem.Title = newTitle;

            repository.Update(newItem);
            var updatedItem = repository.List<TodoItem>()
                .FirstOrDefault(i => i.Title == newTitle);

            Assert.IsNotNull(updatedItem);
            Assert.AreNotEqual(item.Title, updatedItem.Title);
            Assert.Equals(newItem.Id, updatedItem.Id);
        }
    }
}