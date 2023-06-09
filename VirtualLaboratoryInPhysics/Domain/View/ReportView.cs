using System;
using System.ComponentModel.DataAnnotations;

namespace Domain.View
{
    public class ReportView
    {
        public Guid Id { get; set; }

        public Guid UserId { get; set; }

        public int LaboratoryWorkNumber { get; set; }

        public string LaboratoryWorkName { get; set; }

        [FileExtensions(Extensions = "doxc")]
        public string Content { get; set; }

        public int Grade { get; set; }
    }
}
