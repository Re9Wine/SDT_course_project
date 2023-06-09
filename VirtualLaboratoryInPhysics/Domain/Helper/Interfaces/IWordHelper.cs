using System.Collections.Generic;
using Word = Microsoft.Office.Interop.Word;

namespace Domain.Helper.Interfaces
{
    public interface IWordHelper
    {
        void FillFile(Word.Application application, Dictionary<string, int> items);
        Word.Application OpenFile(string filePath);
        void CloseApplication(Word.Application application);
        void CloseDocument(Word.Document document);
        string SaveDocument(Word.Document document, string filePath);
        Word.Application CreateEmptyFile();
    }
}
