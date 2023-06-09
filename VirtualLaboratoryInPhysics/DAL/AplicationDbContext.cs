using Domain.Entity;
using Domain.View;
using Microsoft.EntityFrameworkCore;

namespace DAL
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext()
        {
            Database.EnsureDeleted();
            Database.EnsureCreated();
        }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<LaboratoryWork> LaboratoryWorks => Set<LaboratoryWork>();
        public DbSet<Group> Groups => Set<Group>();
        public DbSet<User> Users => Set<User>();
        public DbSet<Report> Reports => Set<Report>();
        public DbSet<GroupLaboratoryWorks> GroupLaboratoryWorks => Set<GroupLaboratoryWorks>();
        public DbSet<ReportView> ReportView => Set<ReportView>();

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=DESKTOP-RTPDA1J;Database=VirtualLaboratoryInPhysics;Trusted_Connection=True;");
            }
        }
    }
}
