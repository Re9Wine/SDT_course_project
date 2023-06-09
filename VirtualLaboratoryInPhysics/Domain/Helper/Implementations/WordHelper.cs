using Domain.Exceptions;
using Domain.Helper.Interfaces;
using System;
using System.Collections.Generic;
using Word = Microsoft.Office.Interop.Word;


namespace Domain.Helper.Implementations
{
    public class WordHelper : IWordHelper
    {
        private readonly IParser _parser;

        public WordHelper(IParser parser)
        {
            _parser = parser;
        }

        public void FillFile(Word.Application application, Dictionary<string, int> items)
        {
            try
            {
                foreach (var item in items)
                {
                    Word.Find find = application.Selection.Find;
                    find.Text = item.Key;
                    find.Replacement.Text = item.Value.ToString();

                    Object wrap = Word.WdFindWrap.wdFindContinue;
                    Object replace = Word.WdReplace.wdReplaceAll;

                    find.Execute(Wrap: wrap, Replace: replace);
                }
            }
            catch (Exception)
            {
                throw new WordException("Ошибка при заполнения файла данными");
            }
        }

        public Word.Application OpenFile(string filePath)
        {
            if (_parser.FileExist(filePath))
            {
                Word.Application app = new Word.Application();

                app.Documents.Open(filePath);

                return app;
            }
            else
            {
                throw new WordException("Файл не найден");
            }
        }

        public void CloseApplication(Word.Application application)
        {
            application.Quit();
        }

        public void CloseDocument(Word.Document document)
        {
            document.Close();
        }

        public string SaveDocument(Word.Document document, string filePath)
        {
            string newFilePath = new string(filePath.ToCharArray());

            if (_parser.FileExist(filePath))
            {
                int bonusIndex = newFilePath.IndexOf('.');

                if (bonusIndex < 0)
                {
                    bonusIndex = 0;
                }

                string substring = newFilePath.Substring(filePath.LastIndexOf('_') + 1, bonusIndex - filePath.LastIndexOf('_') - 1);

                if (int.TryParse(substring, out int copyNumber))
                {
                    newFilePath = newFilePath.Replace(substring, (copyNumber + 1).ToString());
                }
                else
                {
                    newFilePath = newFilePath.Insert(bonusIndex, "_1");
                }
            }

            document.SaveAs2(FileName: newFilePath);

            return newFilePath;
        }

        public Word.Application CreateEmptyFile()
        {
            var application = new Word.Application();

            application.Documents.Add();

            return application;
        }
    }
}

