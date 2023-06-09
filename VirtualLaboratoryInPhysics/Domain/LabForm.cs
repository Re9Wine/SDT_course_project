using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain
{
    public class LabForm
    {
        [Required]
        public int Number { get; set; }

        [Required]
        public string Name { get; set; }

        public string Objective { get; set; }

        [Required]
        [FileExtensions(Extensions = "docx")]
        public string SampleReport { get; set; }

        [Required]
        [FileExtensions(Extensions = "docx")]
        public string CriteriaForEvaluation { get; set; }
    }
}
