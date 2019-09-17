using System;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ProductApi.Infrastructure;

namespace ProductApi.Test
{
    [TestClass]
    public class ProductRepositoryTest
    {
        ProductRepository repo;
        [TestInitialize]
        public void TestSetUp()
        {

            ProductInitializeDb db = new ProductInitializeDb();
            System.Data.Entity.Database.SetInitializer(db);
            repo = new ProductRepository();
        }
        [TestMethod]
        public void ShouldProductRepoInitializedWithTwoRecordsInBeginning()
        {
            var result = repo.GetProducts();
            Assert.IsNotNull(result);
            var nr = result.ToList().Count;
            Assert.AreEqual(2, nr);
        }
        [TestMethod]
        public void ShouldFindProductWithId()
        {
            string pid = "1";
            var result = repo.GetById(pid);
            var nr = result.Title;
            Assert.AreEqual("Hammer", nr);
        }
    }
}
