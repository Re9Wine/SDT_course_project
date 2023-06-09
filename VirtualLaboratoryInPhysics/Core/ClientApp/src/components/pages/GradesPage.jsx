import React, { useEffect, useState } from "react";

const GradesPage = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [reports, setRepost] = useState([]);
    const [messege, setMessege] = useState('Загрузка');

    const getReports = async () => {
        try{
            await fetch('Report/GetLatestByUser?userId=CC689CF9-23F4-4DF9-40DD-08DB66A02F4C')
            .then(async response => {
                if(response.status == 200){
                    return await response.json()
                }
                else if(response.status == 204){
                    setMessege("Нет данных")
                    throw "Нет данных"
                }
                else{
                    throw "Ошибка запроса"
                }
            })
            .then(data => setRepost(data))
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        getReports().then(() => setIsLoaded(true));
    }, [])

    return(
        <div className="grades-page">
            {!isLoaded ? <p className="loading">{messege}</p> :
                <table className="grades-table">
                    <thead>
                        <tr className="grades-table-row">
                            <th className="grades-table-labNumber">#</th>
                            <th className="grades-table-labName">Название</th>
                            <th className="grades-table-report">Отчет</th>
                            <th className="grades-table-garde">Оценка</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reports.map((report, index) => 
                            <tr key={index} className="grades-table-row">
                                <td className="grades-table-labNumber">{report.laboratoryWorkNumber}</td>
                                <td className="grades-table-labName">{report.laboratoryWorkName}</td>
                                <td className="grades-table-report"><a href={report.content} download>
                                    {report.content.replace(report.content.substring(report.content.indexOf('\\'), report.content.lastIndexOf('\\') + 1), '')}
                                </a></td>
                                <td className="grades-table-garde">{report.grade}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            }
        </div>
    );  
}

export default GradesPage;