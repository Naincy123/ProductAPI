using ProjectApi.core.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProductApi.Infrastructure
{
    public class ProductContext :DbContext
    {
        public ProductContext(): base ("name=ProductContext")
        {
            var a = Database.Connection.ConnectionString;
        }
        public DbSet<Product> Products { get; set; }
    }
}
