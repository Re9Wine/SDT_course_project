using Domain.Entity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Domain
{
    public class ReportForm
    {
        [Required]
        public Report Report { get; set; }

        [Required]
        public Dictionary<string, int> FormData { get; set; }
    }
}
