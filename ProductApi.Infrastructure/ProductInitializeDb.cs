using ProjectApi.core.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProductApi.Infrastructure
{
    public class ProductInitializeDb : DropCreateDatabaseIfModelChanges<ProductContext>
    {
        protected override void Seed(ProductContext context)
        {
            context.Products.Add(new Product
            {
                ProductID = "1",
                Color = "Red",
                Details = "This is awesome product",
                ExpiryDate = DateTime.Now,
                ImageUrl = "abc.jpg",
                inStock = true,
                Price = 400,
                Quantity = 50,
                Rating = 5,
                Title = "Hammer"
            });
            context.Products.Add(new Product
            {
                ProductID = "2",
                Color = "Blue",
                Details = "This is very very awesome project",
                ExpiryDate = DateTime.Now,
                ImageUrl = "xyz.jpg",
                inStock = false,
                Price = 200,
                Quantity = 30,
                Rating = 4,
                Title = "Saw"
            });
            try
            {
                context.SaveChanges();
            }
            catch(Exception e)
            {
                var e1 = e.InnerException;
            }
            base.Seed(context);
        }
    }
}
