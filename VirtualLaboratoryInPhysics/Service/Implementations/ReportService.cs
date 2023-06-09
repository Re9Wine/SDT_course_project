using DAL.Interfaces;
using Domain;
using Domain.Entity;
using Domain.Helper.Interfaces;
using Domain.View;
using Microsoft.AspNetCore.Hosting;
using Service.Interfaces;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Service.Implementations
{
    public class ReportService : IReportService
    {
        private readonly IReportRepository _repository;
        private readonly IWordHelper _wordHelper;
        private readonly IReportViewRepository _viewRepository;
        private readonly IWebHostEnvironment _webHostEnvironment;
        private readonly ILaboratoryWorkRepository _laboratoryWorkRepository;

        private const string ReportDirectoryPath = "\\Report\\";

        public ReportService(IReportRepository repository,
            IWordHelper wordHelper,
            IReportViewRepository viewRepository,
            IWebHostEnvironment webHostEnvironment,
            ILaboratoryWorkRepository laboratoryWorkRepository)
        {
            _repository = repository;
            _wordHelper = wordHelper;
            _viewRepository = viewRepository;
            _webHostEnvironment = webHostEnvironment;
            _laboratoryWorkRepository = laboratoryWorkRepository;
        }

        public async Task<bool> ChangeGrade(int grade, Guid reportId)
        {
            var report = await _repository.GetById(reportId);

            if (report == null)
            {
                return false;
            }

            report.Grade = grade;

            return await _repository.Update(report);
        }

        public async Task<bool> Create(ReportForm reportForm) //TODO мб нужно переделать
        {
            if(reportForm == null || reportForm.FormData.Count == 0)
            {
                return false;
            }

            string sampleReportPath = (await _laboratoryWorkRepository.GetById(reportForm.Report.LaboratoryWorkId)).SampleReport;

            var application = _wordHelper.OpenFile(_webHostEnvironment.WebRootPath + sampleReportPath);

            _wordHelper.FillFile(application, reportForm.FormData);

            string filePath = _wordHelper.SaveDocument(application.ActiveDocument, _webHostEnvironment.WebRootPath + ReportDirectoryPath + reportForm.Report.Content);

            _wordHelper.CloseDocument(application.ActiveDocument);
            _wordHelper.CloseApplication(application);

            reportForm.Report.Content = filePath.Replace(_webHostEnvironment.WebRootPath, string.Empty);

            return await _repository.Create(reportForm.Report);
        }

        public async Task<bool> Delete(Guid id)
        {
            var report = await _repository.GetById(id);

            if (report == null)
            {
                return false;
            }

            return await _repository.Delete(report);
        }

        public Task<Report> Get(Guid id)
        {
            return _repository.GetById(id);
        }

        public Task<List<ReportView>> GetLatestByUser(Guid userId)
        {
            return _viewRepository.GetLatestByUser(userId);
        }
    }
}
