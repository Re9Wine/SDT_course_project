using DAL.Interfaces;
using Domain.View;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DAL.Implementations
{
    public class ReportViewRepository : IReportViewRepository
    {
        private readonly ApplicationDbContext _context;

        public ReportViewRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public Task<List<ReportView>> GetLatestByUser(Guid userId)
        {
            return _context.ReportView.Where(x => x.UserId == userId).ToListAsync();
        }
    }
}
