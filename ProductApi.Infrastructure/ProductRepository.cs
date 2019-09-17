using ProjectApi.core.Entities;
using ProjectApi.core.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProductApi.Infrastructure
{
    public class ProductRepository : IProductRepository
    {
        ProductContext context = new ProductContext();
        public void Add(Product p)
        {
            //throw new NotImplementedException();
            context.Products.Add(p);
            context.SaveChanges();
        }
        public void Delete(string ProductID)
        {
            //throw new NotImplementedException();
            Product p = context.Products.Find(ProductID);
            context.Products.Remove(p);
            context.SaveChanges();
        }

        public void Edit(Product p)
        {
            //throw new NotImplementedException();
            context.Entry(p).State = System.Data.Entity.EntityState.Modified;
            context.SaveChanges();
        }

        public Product GetById(string ProductID)
        {
            //throw new NotImplementedException();
            var p = (from r in context.Products where r.ProductID == ProductID select r).FirstOrDefault();
            return p;
        }

        public IEnumerable<Product> GetProducts()
        {
            //throw new NotImplementedException();
            return context.Products;
        }
    }
}
