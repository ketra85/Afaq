using Afaq.Core;
using Afaq.SharedKernel.Interfaces;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Afaq.Api.Pages.TodoRazorPage
{
    public class PopulateModel : PageModel
    {
        private readonly IRepository _repository;

        public PopulateModel(IRepository repository) 
        {
            _repository = repository;
        }

        public int RecordsAdded { get; set; }

        public void OnGet()
        {
            RecordsAdded = DbPopulator.PopulateDb(_repository);
        }
    }
}