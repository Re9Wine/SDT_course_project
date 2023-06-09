using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entity
{
    public class Report
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        public Guid LaboratoryWorkId { get; set; }

        public Guid UserId { get; set; }

        [Required]
        [FileExtensions(Extensions = "docx")]
        public string Content { get; set; }

        public int Grade { get; set; } = 0;

        [ForeignKey(nameof(LaboratoryWorkId))]
        public virtual LaboratoryWork LaboratoryWorkNavigation { get; set; }

        [ForeignKey(nameof(UserId))]
        public virtual User UserNavigation { get; set; }
    }
}
