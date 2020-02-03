﻿using Afaq.Core.Events;
using Afaq.SharedKernel;

namespace Afaq.Core.Entities
{
    public class TodoItem : BaseEntity
    {
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; }
        public bool IsDone { get; private set; }

        public void MarkComplete()
        {
            IsDone = true;
            Events.Add(new TodoItemCompletedEvent(this));
        }
    }
}
