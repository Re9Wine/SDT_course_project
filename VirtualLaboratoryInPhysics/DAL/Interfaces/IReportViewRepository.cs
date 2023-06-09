using Domain.View;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DAL.Interfaces
{
    public interface IReportViewRepository
    {
        Task<List<ReportView>> GetLatestByUser(Guid userId);
    }
}
