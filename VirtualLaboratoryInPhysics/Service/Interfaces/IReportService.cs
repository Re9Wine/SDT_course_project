using Domain;
using Domain.Entity;
using Domain.View;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Service.Interfaces
{
    public interface IReportService
    {
        Task<bool> Create(ReportForm reportForm);
        Task<Report> Get(Guid id);
        Task<bool> ChangeGrade(int grade, Guid reportId);
        Task<bool> Delete(Guid id);
        Task<List<ReportView>> GetLatestByUser(Guid userId);
    }
}
