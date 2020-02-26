using System.Collections.Generic;

namespace Afaq.Core.Interfaces
{
    // The repository will the object responsible for
    // interfacing with the database (CRUD)
    // This interface will be extended in infrastructre project
    public interface IRepository
    {
        T GetById<T>(int id) where T : BaseEntity;
        List<T> List<T>() where T : BaseEntity;
        T Add<T>(T entity) where T : BaseEntity;
        void Update<T>(T entity) where T : BaseEntity;
        void Delete<T>(T entity) where T : BaseEntity;
    }
}